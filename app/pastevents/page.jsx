'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// Dynamic Imports
const SMRSC2024 = dynamic(() => import('../../components/pastevent/SMRSC2024'));
const SMRSC2025 = dynamic(() => import('../../components/pastevent/SMRSC2025'));

const PastEventsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || '2025');

  useEffect(() => {
    if (tabParam && (tabParam === '2024' || tabParam === '2025')) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // 👇 BACKGROUND PRELOADER LOGIC
  useEffect(() => {
    const preloadBackgroundAssets = async () => {
      // Pre-fetch the heavy component code in the background
      await Promise.all([
        import('../../components/pastevent/SMRSC2024'),
        import('../../components/pastevent/SMRSC2025')
      ]);

      // Automatically generate paths for all 24 images
      const assetsToPreload = [];
      for (let i = 1; i <= 12; i++) {
        assetsToPreload.push(`/images/pastevent/24/image${i}.webp`);
        assetsToPreload.push(`/images/pastevent/2025/image${i}.webp`);
      }

      // Delay by 800ms to guarantee the Hero Video gets 100% of the internet connection first
      setTimeout(() => {
        assetsToPreload.forEach((src) => {
          const img = new window.Image();
          img.src = src; // Silently downloads and caches the image
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
      
      {/* --- HERO VIDEO SECTION --- */}
      <div className="relative z-10 w-full flex justify-center px-4 md:px-8">
        <div
          style={{
            marginTop: "98px",
            marginBottom: "65px",
            width: "100%",
            maxWidth: "1693px",      
            aspectRatio: "1693/833", 
            borderRadius: "8px 200px", 
            overflow: "hidden",      
          }}
          className="relative bg-gray-900 shadow-2xl group rounded-br-[80px] md:rounded-br-[200px]" // Adjusted radius for mobile
        >
          <video
            key={activeTab} 
            className="w-full h-full object-cover" 
            autoPlay
            muted
            loop
            playsInline
            fetchpriority="high"
          >
            <source src={videoSource} type="video/webm" />
          </video>

          {/* Fully Responsive Hero Text */}
          <div 
            className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:bottom-[60px] lg:left-[60px] z-20 pointer-events-none w-[90%] max-w-[655px]"
            style={{
              color: '#FFF',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[70px]">
              {heroText}
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* --- NAVIGATION TABS --- */}
      {/* Aligned with the 1380px grid used in the child components */}
      <div className="w-full max-w-[1380px] mx-auto mb-10 flex items-center justify-start px-4 md:px-8 gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
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

      {/* --- CONTENT SECTION --- */}
      <div className="w-full mb-20 min-h-[50vh] flex flex-col items-center">
        {activeTab === '2025' && <SMRSC2025 />}
        {activeTab === '2024' && <SMRSC2024 />}
      </div>
    </div>
  );
};

const PastEvents = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="bg-[#020617] min-h-screen" />}>
        <PastEventsContent />
      </Suspense>
      <Footer />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        
        /* Utility to hide scrollbar for tabs on mobile if needed */
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
};

export default PastEvents;