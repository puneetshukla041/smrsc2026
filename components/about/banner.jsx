'use client';
import React from 'react';
import AboutTab from './AboutTab'; // <-- Importing your section here

const Banner = () => {
  // Generate an array of numbers from 1 to 12 for the logo file names
  const logos = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="relative w-full flex flex-col items-center">
      
      {/* 1. BANNER HERO SECTION */}
      <div className="w-full bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
            About SMRSC 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Global Multi-Specialty Robotic Surgery Conference
          </p>
        </div>
      </div>

      {/* 2. INFINITE LOGO CAROUSEL */}
      <div className="w-full py-10 bg-white border-t border-gray-100 flex flex-col items-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Trusted by our Partners
        </p>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((num) => (
              <li key={`logo-${num}`}>
                <img 
                  src={`/logos/animation/${num}.png`} 
                  alt={`Partner Logo ${num}`} 
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {logos.map((num) => (
              <li key={`duplicate-${num}`}>
                <img 
                  src={`/logos/animation/${num}.png`} 
                  alt={`Partner Logo ${num}`} 
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </li>
            ))}
          </ul>
          
        </div>
      </div>

      {/* 3. ABOUT TAB SECTION (Imported at the last) */}
      {/* Wrapped in a dark background so your #E3F5F6 text shows up clearly */}
      <div className="w-full bg-[#050505] pt-24 pb-10 flex justify-center">
        <div className="w-full max-w-[1380px] px-4 md:px-0">
          <AboutTab />
        </div>
      </div>

    </section>
  );
};

export default Banner;