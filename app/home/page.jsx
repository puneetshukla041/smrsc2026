'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';
import CookieBanner from '../../components/features/CookieBanner';
import { fetchWithRetry } from '../../lib/fetchWithRetry';

const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));
const Section7 = dynamic(() => import('../../components/home/Section7'));

const HomePage = () => {
  // Use a ref to persist the start time across re-renders
  const visitStartTime = useRef(Date.now());

  useEffect(() => {
    let hasAnalyticsConsent = false;

    // Check for existing consent
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('gdpr-cookie-consent');
        if (consent) {
          const parsed = JSON.parse(consent);
          hasAnalyticsConsent = parsed.analytics === true;
        }
      } catch (e) {
        console.error('Failed to parse consent:', e);
      }
    };

    const startTracking = () => {
      // Update the ref value
      visitStartTime.current = Date.now();
      const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : "Unknown";

      // Send initial visit ping with retry logic (non-critical call)
      fetchWithRetry('/api/track-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'enter', screenResolution: screenRes })
      }, 1, 500).catch(err => console.warn("Visit tracking unavailable", err));
    };

    const clearTrackingData = () => {
      // Delete any stored tracking data
      try {
        localStorage.removeItem('visit-tracking-data');
      } catch (e) {
        console.error('Failed to clear tracking data:', e);
      }
    };

    // Listen for consent changes
    // Removed the ': CustomEvent' TypeScript syntax here
    const handleConsentChange = (event) => {
      hasAnalyticsConsent = event.detail.analytics === true;
      if (hasAnalyticsConsent) {
        // Analytics just became enabled, start tracking
        startTracking();
      } else {
        // Analytics was disabled, clear tracking data
        clearTrackingData();
      }
    };

    checkConsent();

    // Listen to the custom event
    window.addEventListener('gdpr-consent-changed', handleConsentChange);

    // Only start tracking if consent already exists
    if (hasAnalyticsConsent) {
      startTracking();
    }

    // Helper to calculate and send time
    const sendWatchTime = () => {
      // Only send if consent was given
      if (!hasAnalyticsConsent) return;

      // Access the value stored in the ref using .current
      const timeSpentInSeconds = Math.floor((Date.now() - visitStartTime.current) / 1000);
      
      if (timeSpentInSeconds > 0) {
        fetchWithRetry('/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'leave', watchTime: timeSpentInSeconds }),
          keepalive: true 
        }, 1, 500).catch(err => console.warn("Time tracking unavailable", err));
      }
    };

    // 2. Watch Time Ping
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendWatchTime();
        visitStartTime.current = Date.now(); // Reset using .current
      } else if (document.visibilityState === 'visible') {
        visitStartTime.current = Date.now(); // Reset using .current
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', sendWatchTime);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', sendWatchTime);
      window.removeEventListener('gdpr-consent-changed', handleConsentChange);
      
      if (document.visibilityState === 'visible') {
        sendWatchTime();
      }
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
      
      {/* Cookie Banner hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block">
        <CookieBanner />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;