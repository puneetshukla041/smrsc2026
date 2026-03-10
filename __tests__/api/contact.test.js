// app/api/contact/__tests__/route.test.js
// Example test file for the contact API endpoint

import { POST, OPTIONS } from '../route';
import { NextRequest } from 'next/server';

// Mock dependencies
jest.mock('../../../lib/mongodb', () => ({
  default: jest.fn().mockResolvedValue(true)
}));

jest.mock('../../../services/contactService', () => ({
  contactService: {
    createContact: jest.fn(),
  }
}));

jest.mock('../../../lib/rateLimit', () => ({
  rateLimit: jest.fn(() => ({ isLimited: false }))
}));

jest.mock('../../../lib/csrf', () => ({
  verifyCSRFToken: jest.fn(() => true),
  generateCSRFToken: jest.fn(() => 'mock-token')
}));

describe('/api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('OPTIONS', () => {
    it('should return CORS headers', async () => {
      const req = new NextRequest(new URL('http://localhost:3000/api/contact'), {
        method: 'OPTIONS',
      });

      const response = await OPTIONS(req);
      expect(response.status).toBe(200);
      expect(response.headers.get('Access-Control-Allow-Methods')).toContain('POST');
    });
  });

  describe('POST', () => {
    it('should reject rate-limited requests', async () => {
      const { rateLimit } = require('../../../lib/rateLimit');
      rateLimit.mockReturnValueOnce({ isLimited: true, retryAfter: 30 });

      const req = new NextRequest(new URL('http://localhost:3000/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://localhost:3000',
          'x-csrf-token': 'mock-token'
        },
        body: new ReadableStream()
      });

      const response = await POST(req);
      expect(response.status).toBe(429);
    });

    it('should reject CORS from unauthorized origin', async () => {
      const req = new NextRequest(new URL('http://localhost:3000/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://evil.com',
          'x-csrf-token': 'mock-token'
        },
        body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Test' })
      });

      const response = await POST(req);
      expect(response.status).toBe(403);
    });

    it('should reject missing CSRF token', async () => {
      const req = new NextRequest(new URL('http://localhost:3000/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://localhost:3000',
          // Missing x-csrf-token
        },
        body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Test' })
      });

      const response = await POST(req);
      expect(response.status).toBe(403);
    });

    it('should successfully submit contact form', async () => {
      const { contactService } = require('../../../services/contactService');
      contactService.createContact.mockResolvedValueOnce({
        id: '123',
        success: true,
        message: 'Your message has been received.'
      });

      const req = new NextRequest(new URL('http://localhost:3000/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://localhost:3000',
          'x-csrf-token': 'mock-token'
        },
        body: JSON.stringify({ 
          name: 'John Doe', 
          email: 'john@example.com', 
          message: 'This is a test message.' 
        })
      });

      const response = await POST(req);
      expect(response.status).toBe(201);
      
      const data = await response.json();
      expect(data.success).toBe(true);
    });
  });
});
