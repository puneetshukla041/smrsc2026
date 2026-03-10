'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, 
      duration: 1.2, 
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, 
      touchMultiplier: 2,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      // Cancel the RAF callback to prevent memory leak
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return null;
}