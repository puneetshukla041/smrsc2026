'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Google's Official Core Web Vitals Thresholds
const METRIC_THRESHOLDS = {
  'Next.js-route-change-to-render': { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
};

export default function NextLevelSpeedLogger() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true);
  
  // State to control our booster line animation
  const [isNavigating, setIsNavigating] = useState(false);

  const fullUrl = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;

  // 1. Intercept Link Clicks to Start the Booster Line
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.target !== '_blank') {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(target.href);
        
        // If it's an internal link heading to a new page, trigger the line!
        if (currentUrl.origin === targetUrl.origin && currentUrl.pathname !== targetUrl.pathname) {
          setIsNavigating(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // 2. Stop the Booster Line and Log Navigation
  useEffect(() => {
    // Stop the animation because the new page has rendered
    setIsNavigating(false);

    if (process.env.NODE_ENV === 'production') return;

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      console.log(
        `%c🚀 App Initialized: ${fullUrl}`, 
        'color: #b084f6; font-weight: bold; font-size: 11px; background: #111; padding: 4px; border-radius: 4px;'
      );
      return; 
    }
    
    console.log(
      `%c🧭 Navigated to: ${fullUrl}`, 
      'color: #00ffff; font-weight: bold; font-size: 11px; padding: 2px;'
    );
  }, [fullUrl]);

  // 3. Capture and Grade All Web Vitals (Unchanged)
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'production') return;

    const { id, name, value } = metric;
    const thresholds = METRIC_THRESHOLDS[name] || { good: 250, poor: 1000 };
    
    const isGood = value <= thresholds.good;
    const isPoor = value > thresholds.poor;
    
    const statusColor = isGood ? '#4ade80' : isPoor ? '#f87171' : '#fbbf24'; 
    const statusText = isGood ? '✅ GOOD' : isPoor ? '❌ POOR' : '⚠️ NEEDS IMPROVEMENT';
    const unit = name === 'CLS' ? '' : 'ms'; 

    console.groupCollapsed(
      `%c⚡ ${name} %c${value.toFixed(2)}${unit} %c${statusText}`,
      'color: #a8a29e; font-weight: bold;',
      `color: ${statusColor}; font-weight: bold; font-size: 11px; background: #222; padding: 2px 6px; border-radius: 4px; margin-left: 6px;`,
      `color: ${statusColor}; font-size: 10px; padding-left: 8px;`
    );
    
    console.table({ Metric: name, Value: `${value.toFixed(2)} ${unit}`, Rating: statusText, Path: fullUrl, 'Metric ID': id });
    console.groupEnd();
  });

  // 4. Render the Booster Line!
// 4. Render the Booster Line!
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        // Trustworthy SaaS Blue
        background: 'linear-gradient(90deg, transparent, #2563eb, #60a5fa)',
        // Soft, professional glow
        boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
        zIndex: 9999,
        pointerEvents: 'none',
        transition: isNavigating 
          ? 'width 8s cubic-bezier(0.1, 0.05, 0, 1)' 
          : 'width 0.4s ease-out, opacity 0.4s ease-out',
        width: isNavigating ? '90%' : '100%',
        opacity: isNavigating ? 1 : 0,
      }}
    />
  );
}