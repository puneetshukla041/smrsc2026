// This file exports metadata and caching configuration for static pages
// Add this pattern to pages that have static content

export const revalidate = 3600; // Revalidate every hour (ISR - Incremental Static Regeneration)

export const metadata = {
  // Add your page metadata here
};

// Usage: Import and apply at the top of your page files
// This enables Next.js to cache static content and revalidate it periodically
