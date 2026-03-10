import crypto from 'crypto';

const csrfTokens = new Map();
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Generate a CSRF token and store it temporarily
 */
export function generateCSRFToken() {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + TOKEN_EXPIRY;
  csrfTokens.set(token, expiresAt);
  
  // Clean up expired tokens periodically
  if (csrfTokens.size > 1000) {
    const now = Date.now();
    for (const [t, exp] of csrfTokens) {
      if (exp < now) csrfTokens.delete(t);
    }
  }
  
  return token;
}

/**
 * Verify a CSRF token
 */
export function verifyCSRFToken(token) {
  if (!token || !csrfTokens.has(token)) {
    return false;
  }
  
  const expiresAt = csrfTokens.get(token);
  if (Date.now() > expiresAt) {
    csrfTokens.delete(token);
    return false;
  }
  
  csrfTokens.delete(token); // Single-use tokens
  return true;
}
