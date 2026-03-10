/**
 * Retry logic for API calls
 * Useful for non-critical calls (analytics) and critical calls (form submission)
 */

export async function fetchWithRetry(
  url,
  options = {},
  maxRetries = 2,
  delayMs = 500,
  onRetry = null
) {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      lastError = error;
      
      if (attempt < maxRetries) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delayMs * (attempt + 1)));
        
        if (onRetry) {
          onRetry(attempt + 1, maxRetries, error);
        }
      }
    }
  }

  throw lastError;
}

/**
 * Show a user-friendly retry button for failed critical operations
 */
export function createRetryButton(
  message = "Request failed. ",
  onRetry = () => {}
) {
  return {
    type: 'error_with_retry',
    message,
    onRetry
  };
}
