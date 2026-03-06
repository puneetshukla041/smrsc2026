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
  
  const navItems = useMemo(() => [
    "About SMRSC",
    "Organizing Committee",
    "Chief Guests",
    "Faculty"
  ], []);
  
  const [activeTab, setActiveTab] = useState(tabParam || "About SMRSC");

  const handleTabChange = (item) => {
    setActiveTab(item);
    router.push(`/about?tab=${encodeURIComponent(item)}`, { scroll: false });
  };

  useEffect(() => {
    if (tabParam && navItems.includes(tabParam)) {
      setActiveTab(tabParam);
      setTimeout(() => {
        const section = document.getElementById('about-tabs-nav');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }, [tabParam, navItems]);

  return (
    <div className="w-full">
      {/* ALIGNMENT FIX: Applied max-w-[1380px] and px-4 md:px-10 lg:px-16 xl:px-0 
          This ensures the buttons and the Tab content below align perfectly on the same vertical line. */}
      <div className="flex flex-col gap-10 md:gap-[80px] xl:gap-[130px] w-full max-w-[1380px] mx-auto px-4 md:px-10 lg:px-16 xl:px-0">
        
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
                <div 
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)',
                  }}
                />
                <span className="relative z-10 text-center whitespace-nowrap">{item}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Area - No extra padding needed here as the Tabs have their own internal padding handled by the container above */}
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

const Section2 = () => {
  return (
    <section className="w-full min-h-screen relative flex flex-col py-10 bg-transparent">
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