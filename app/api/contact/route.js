import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import { contactService } from '../../../services/contactService';
import { rateLimit } from '../../../lib/rateLimit';
import { verifyCSRFToken } from '../../../lib/csrf';
import { handleAPIError, APIError } from '../../../lib/errorHandler';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://smrsc.com',
  'https://www.smrsc.com',
  // Add your production domain here
];

export async function OPTIONS(req) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function POST(req) {
  try {
    // 1. RATE LIMITING: Max 5 requests per minute per IP
    const limitResult = rateLimit(req, 5, 60000);
    if (limitResult.isLimited) {
      return NextResponse.json(
        { error: `Too many requests. Please try again in ${limitResult.retryAfter} seconds.` },
        { 
          status: 429,
          headers: { 'Retry-After': limitResult.retryAfter }
        }
      );
    }

    // 2. CORS VALIDATION
    const origin = req.headers.get('origin') || '';
    if (!ALLOWED_ORIGINS.includes(origin)) {
      console.warn(`[CORS] Blocked request from origin: ${origin}`);
      return NextResponse.json(
        { error: 'CORS policy violation' },
        { status: 403 }
      );
    }

    // 3. CSRF TOKEN VERIFICATION
    const csrfToken = req.headers.get('x-csrf-token');
    if (!csrfToken || !verifyCSRFToken(csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token. Please refresh the page and try again.' },
        { status: 403 }
      );
    }

    // 4. DATABASE CONNECTION WITH TIMEOUT
    let dbConnected = false;
    try {
      await connectDB();
      dbConnected = true;
    } catch (dbError) {
      console.error('[DB Connection Error]', dbError.message);
      return handleAPIError(dbError, 'We are experiencing technical difficulties. Please try again later or contact support@smrsc.com');
    }

    if (!dbConnected) {
      return NextResponse.json(
        { error: 'Database service unavailable. Please try again in a few moments.' },
        { status: 503 }
      );
    }

    // 5. PARSE REQUEST BODY
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // 6. USE SERVICE LAYER FOR BUSINESS LOGIC
    const result = await contactService.createContact({ name, email, message });

    return NextResponse.json(result, { 
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': origin,
      }
    });

  } catch (error) {
    // Handle all other errors gracefully
    if (error.message.includes('already been submitted')) {
      return NextResponse.json(
        { error: error.message },
        { status: 409 }
      );
    }
    
    return handleAPIError(error, 'We encountered an issue processing your request. Please try again.');
  }
}