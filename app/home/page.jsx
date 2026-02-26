'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';
import CookieBanner from '../../components/common/CookieBanner';

const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));

const HomePage = () => {
  const visitStartTime = useRef(null);

  useEffect(() => {
    visitStartTime.current = Date.now();
    const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : "Unknown";

    // 1. Initial Ping (Logs the visit)
    fetch('/api/track-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'enter', screenResolution: screenRes })
    }).catch(err => console.error("Tracking failed", err));

    // Helper to calculate and send time
    const sendWatchTime = () => {
      if (!visitStartTime.current) return;
      
      const timeSpentInSeconds = Math.floor((Date.now() - visitStartTime.current) / 1000);
      
      if (timeSpentInSeconds > 0) {
        // FIXED: Replaced sendBeacon with fetch + keepalive for JSON support
        fetch('/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'leave', watchTime: timeSpentInSeconds }),
          keepalive: true 
        }).catch(err => console.error("Time tracking failed", err));
      }
    };

    // 2. Watch Time Ping
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendWatchTime();
        visitStartTime.current = null; 
      } else if (document.visibilityState === 'visible') {
        visitStartTime.current = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', sendWatchTime);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', sendWatchTime);
      
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
        <Section6 />
      </main>
      
      <CookieBanner />
      
      <Footer />
    </div>
  );
};

export default HomePage;
