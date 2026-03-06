'use client';
import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// Import your separate content files
import AboutTab from './tabs/AboutTab';
import CommitteeTab from './tabs/CommitteeTab';
import GuestsTab from './tabs/GuestsTab';
import FacultyTab from './tabs/FacultyTab';

const Section2Content = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); 
  const tabParam = searchParams.get('tab');
  
  // Memoize navItems so it can be safely used in useEffect dependencies
  const navItems = useMemo(() => [
    "About SMRSC",
    "Organizing Committee",
    "Chief Guests",
    "Faculty"
  ], []);
  
  // Set the default tab, or use the URL parameter if it exists
  const [activeTab, setActiveTab] = useState(tabParam || "About SMRSC");

  // Function to handle tab changes and update URL
  const handleTabChange = (item) => {
    setActiveTab(item);
    // This updates the URL without refreshing the page
    router.push(`/about?tab=${encodeURIComponent(item)}`, { scroll: false });
  };

  // Sync state if user types URL directly or presses back/forward
  useEffect(() => {
    if (tabParam && navItems.includes(tabParam)) {
      setActiveTab(tabParam);
      
      // Added a tiny timeout to ensure the DOM is ready before scrolling
      setTimeout(() => {
        const section = document.getElementById('about-tabs-nav');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }, [tabParam, navItems]);

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      {/* UPDATED PADDING: Added lg:px-16 xl:px-24 2xl:px-8 
        This is what gives laptops proper breathing room on the left and right, 
        while preserving the perfect layout for mobile and huge desktops!
      */}
      <div className="flex flex-col gap-10 md:gap-[80px] xl:gap-[130px] w-full max-w-[1380px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8">
        
        {/* Navigation Buttons */}
        <div id="about-tabs-nav" className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 pt-4 w-full">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            
            return (
              <button
                key={item}
                onClick={() => handleTabChange(item)}
                className="group relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  display: 'flex',
                  padding: '12px 24px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '40px',
                  color: '#FFF',
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  border: isActive ? '1px solid #FFF' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: isActive 
                    ? 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
                    : 'rgba(0, 0, 0, 0.20)',
                  overflow: 'hidden'
                }}
              >
                {/* Hover/Active Gradient Layer */}
                <div 
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)',
                  }}
                />
                
                {/* whitespace-nowrap prevents words from stacking awkwardly on tiny mobile screens */}
                <span className="relative z-10 text-center whitespace-nowrap">{item}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Area */}
        <div className="w-full min-h-[400px]">
          {activeTab === "About SMRSC" && <AboutTab />}
          {activeTab === "Organizing Committee" && <CommitteeTab />}
          {activeTab === "Chief Guests" && <GuestsTab />}
          {activeTab === "Faculty" && <FacultyTab />}
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const Section2 = () => {
  return (
    <section className="w-full min-h-screen relative flex flex-col py-10 bg-transparent">
      {/* Suspense boundary is required when using useSearchParams in Next.js */}
      <Suspense fallback={<div className="text-white p-10 text-center w-full">Loading Navigation...</div>}>
        <Section2Content />
      </Suspense>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap');
      `}</style>
    </section>
  );
};

export default Section2;