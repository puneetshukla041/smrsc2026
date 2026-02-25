'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // 1. Fade IN slightly after the component mounts
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // 2. Fade OUT after 5 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // 3. Completely remove from DOM after the fade-out animation finishes
    const unmountTimer = setTimeout(() => {
      setIsRendered(false);
    }, 5500); // 500ms after the fade out starts

    // Cleanup timers
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  // If the banner is fully unmounted, return nothing
  if (!isRendered) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto bg-[#02091A] border border-white/10 p-5 sm:p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Text Content */}
        <p className="text-gray-300 text-sm leading-relaxed flex-1 text-center lg:text-left">
          We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking &quot;Accept All&quot;, you consent to the use of all the cookies. However, you may visit &quot;Cookie Settings&quot; to provide controlled consent.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <Link 
            href="/cookies" 
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center text-sm font-medium whitespace-nowrap"
          >
            Cookie Settings
          </Link>
          <button 
            onClick={() => setIsVisible(false)} // Allows user to manually dismiss it before 5s
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3FD0D4] text-[#02091A] hover:bg-opacity-90 transition-colors text-center text-sm font-semibold whitespace-nowrap"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;