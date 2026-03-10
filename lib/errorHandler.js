import { NextResponse } from 'next/server';

export class APIError extends Error {
  constructor(message, status = 500, details = null) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

/**
 * Standardized error handler for API routes
 */
export function handleAPIError(error, defaultMessage = 'An error occurred') {
  console.error('[API Error]', error?.message || error);
  
  // Database timeout/unavailable errors
  if (error?.message?.includes('timeout') || 
      error?.message?.includes('ECONNREFUSED') ||
      error?.message?.includes('connect ECONNREFUSED')) {
    return NextResponse.json(
      { 
        error: 'Service temporarily unavailable. Please try again in a few moments or contact support at support@smrsc.com',
        code: 'DB_UNAVAILABLE'
      },
      { status: 503 }
    );
  }
  
  // Validation errors
  if (error instanceof APIError) {
    return NextResponse.json(
      { 
        error: error.message,
        ...(error.details && { details: error.details })
      },
      { status: error.status }
    );
  }
  
  // Generic error
  return NextResponse.json(
    { error: defaultMessage },
    { status: 500 }
  );
}
