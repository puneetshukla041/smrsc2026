'use client'
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import critical components immediately
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';


const CookieBanner = dynamic(() => import('../../components/features/CookieBanner'), {
  loading: () => null, // No loading state needed, renders after page interactive
});

const Section2 = dynamic(() => import('../../components/home/Section2'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const Section3 = dynamic(() => import('../../components/home/Section3'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const Section4 = dynamic(() => import('../../components/home/Section4'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const Section5 = dynamic(() => import('../../components/home/Section5'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const Section6 = dynamic(() => import('../../components/home/Section6'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const Section7 = dynamic(() => import('../../components/home/Section7'), {
  loading: () => <div className="h-96 bg-[#020617]" />,
});

const HomePage = () => {
  const visitStartTime = useRef(Date.now());
  const [analyticsReady, setAnalyticsReady] = useState(false);

  // Defer analytics tracking to after page is interactive
  useEffect(() => {
    let hasAnalyticsConsent = false;
    let mounted = true;

    // Delay analytics setup to not block render
    const analyticsTimer = setTimeout(() => {
      if (!mounted) return;

      // Check for existing consent
      try {
        const consent = localStorage.getItem('gdpr-cookie-consent');
        if (consent) {
          const parsed = JSON.parse(consent);
          hasAnalyticsConsent = parsed.analytics === true;
        }
      } catch (e) {
        console.warn('Analytics setup skipped:', e);
      }

      if (hasAnalyticsConsent) {
        const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : "Unknown";
        // Fire and forget - non-blocking
        fetch('/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'enter', screenResolution: screenRes })
        }).catch(() => {}); // Silently fail, don't block
      }

      setAnalyticsReady(true);
    }, 3000); // Wait 3s after page interactive

    const handleConsentChange = (event) => {
      hasAnalyticsConsent = event.detail?.analytics === true;
    };

    const handleVisibilityChange = () => {
      if (!hasAnalyticsConsent) return;

      const timeSpentInSeconds = Math.floor((Date.now() - visitStartTime.current) / 1000);
      if (timeSpentInSeconds > 0 && document.visibilityState === 'hidden') {
        fetch('/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'leave', watchTime: timeSpentInSeconds }),
          keepalive: true 
        }).catch(() => {});
      }
    };

    window.addEventListener('gdpr-consent-changed', handleConsentChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleVisibilityChange);

    return () => {
      mounted = false;
      clearTimeout(analyticsTimer);
      window.removeEventListener('gdpr-consent-changed', handleConsentChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
     
 

      <Header />
      
      <main className="flex-grow">
        <Section1 />
        <div className="hidden md:block">
          <Section2 />
        </div>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section6 />
      </main>
      
      {/* Cookie Banner - deferred load */}
      <div className="hidden md:block">
        <CookieBanner />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;