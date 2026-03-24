import { NextResponse } from 'next/server';
import { generateCSRFToken } from '../../../lib/csrf';

export async function GET(req) {
  try {
    const token = generateCSRFToken();
    
    return NextResponse.json({ 
      token,
      message: 'CSRF token generated successfully'
    }, { status: 200 });
  } catch (error) {
    console.error('[CSRF Token Generation Error]', error);
    return NextResponse.json(
      { error: 'Failed to generate security token' },
      { status: 500 }
    );
  }
}
