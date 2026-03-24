'use client';

import { useEffect, useState } from 'react';

/**
 * Optimized lazy preloader - only loads critical hero images upfront
 * Defers all other assets to after page is interactive
 */

// CRITICAL: Hero images only - load immediately
const HERO_CRITICAL = [
  "/images/home/section1/image2.webp",
  "/images/home/section1/image3.webp",
];

export default function OptimizedPreloader() {
  const [deferredLoadStarted, setDeferredLoadStarted] = useState(false);

  // Load critical hero images immediately
  useEffect(() => {
    HERO_CRITICAL.forEach(src => {
      const img = new Image();
      img.src = src;
      img.loading = 'eager';
    });

    // Defer non-critical assets to after page is interactive
    // Use requestIdleCallback if available, otherwise use setTimeout
    const deferLoad = () => {
      setDeferredLoadStarted(true);
      loadDeferredAssets();
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(deferLoad, { timeout: 2000 });
    } else {
      setTimeout(deferLoad, 2500); // After interactive
    }
  }, []);

  // Deferred assets loaded in batches after page is interactive
  const loadDeferredAssets = () => {
    // Load in small batches to avoid network congestion
    const deferredAssets = [
      // Section 3 images
      [
        "/images/home/section3/image1.webp",
        "/images/home/section3/image2.webp",
        "/images/home/section3/image3.webp",
        "/images/home/section3/image5.webp",
        "/images/home/section3/image6.webp",
      ],
      // Section 5 images
      [
        "/images/home/section5/image1.webp",
        "/images/home/section5/image2.webp",
        "/images/home/section5/image3.webp",
        "/images/home/section5/image4.webp",
      ],
      // About images (lazy)
      [
        "/images/about/benifit/image1.webp",
        "/images/about/benifit/image2.webp",
        "/images/about/benifit/image3.webp",
        "/images/about/benifit/image4.webp",
      ],
      // Committee (very lazy)
      [
        "/images/about/committe/1.webp",
        "/images/about/committe/2.webp",
        "/images/about/committe/3.webp",
      ]
    ];

    // Batch 1: Short delay
    setTimeout(() => {
      deferredAssets[0].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, 1000);

    // Batch 2: Medium delay
    setTimeout(() => {
      deferredAssets[1].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, 3000);

    // Batch 3: Long delay  
    setTimeout(() => {
      deferredAssets[2].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, 6000);

    // Batch 4: Very long delay
    setTimeout(() => {
      deferredAssets[3].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, 10000);
  };

  return null; // This component renders nothing, just preloads
}
