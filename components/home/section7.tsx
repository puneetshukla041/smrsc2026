'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInView = ({ children, delay = 0 }: FadeInViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ==========================================
//   INFINITE LOGO SCROLLER COMPONENT
// ==========================================
const LogoScroller = () => {
  // Generate array of 12 logo paths
  const logos = Array.from({ length: 23 }, (_, i) => `/logos/animation/${i + 1}.png`);
  
  // Duplicate the array so the loop is perfectly seamless
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full max-w-[1380px] mt-12 md:mt-16 overflow-hidden flex items-center mx-auto">
      
      {/* Premium gradient fade edges */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll-lr hover:pause-scroll">
        {duplicatedLogos.map((src, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center w-[140px] md:w-[200px] px-6 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div className="relative w-full h-[50px] md:h-[70px]">
              {/* Removed opacity classes so they are always in full color */}
              <Image 
                src={src} 
                alt={`Logo ${index}`} 
                fill 
                className="object-contain" 
                unoptimized={true}
                loading="eager"
                fetchPriority="low"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className="w-full max-w-[1380px] mt-24 md:mt-[200px] px-4 md:px-0 mx-auto">
      <FadeInView delay={200}>
        <h3 className="text-[#F8FFFF] text-[28px] md:text-[36px] font-medium leading-tight md:leading-[40px]" style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
          In association with
        </h3>
        <LogoScroller />
      </FadeInView>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');
        
        /* SCROLLING ANIMATION CSS */
        @keyframes scrollLr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-scroll-lr {
          animation: scrollLr 35s linear infinite;
        }

        /* Pauses the animation when the user hovers over the logos */
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Section7;