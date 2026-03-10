// Simple in-memory rate limiter (for production, use Redis)
const requestCounts = new Map();

export function rateLimit(req, maxRequests = 5, windowMs = 60000) {
  const ip = req.headers.get('x-forwarded-for') || 
             req.headers.get('x-client-ip') || 
             'unknown';
  
  const now = Date.now();
  const key = `${ip}`;
  
  if (!requestCounts.has(key)) {
    requestCounts.set(key, []);
  }
  
  const requests = requestCounts.get(key);
  
  // Remove old requests outside the time window
  const recentRequests = requests.filter(time => now - time < windowMs);
  requestCounts.set(key, recentRequests);
  
  if (recentRequests.length >= maxRequests) {
    return {
      isLimited: true,
      retryAfter: Math.ceil((recentRequests[0] + windowMs - now) / 1000)
    };
  }
  
  recentRequests.push(now);
  return { isLimited: false };
}

// Clean up old entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, requests] of requestCounts) {
    const recentRequests = requests.filter(time => now - time < 300000);
    if (recentRequests.length === 0) {
      requestCounts.delete(key);
    } else {
      requestCounts.set(key, recentRequests);
    }
  }
}, 300000);
