'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FadeInView = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

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
  // Explicit data mapping for 0.png to 24.png with names extracted from screenshots
  const logoData = [
    { id: 0, name: "IRCAD India" },
    { id: 1, name: "IASO" },
    { id: 2, name: "IACTS" },
    { id: 3, name: "SMICTSI" },
    { id: 4, name: "Hernia Society of India" },
    { id: 5, name: "Vascular Society of India" },
    { id: 6, name: "ABSI" },
    { id: 7, name: "AIIMS, Kalyani" },
    { id: 8, name: "Indian Association of Pediatric Surgeons" },
    { id: 9, name: "Indian Association of Endocrine Surgeons" },
    { id: 10, name: "Govt. Medical College, Nagpur" },
    { id: 11, name: "ARIS" },
    { id: 12, name: "AHPI" },
    { id: 13, name: "SLAUS" },
    { id: 14, name: "SLCOG" },
    { id: 15, name: "ACTSSL" },
    { id: 16, name: "The College of Surgeons of Sri Lanka" },
    { id: 17, name: "Philippine Urological Association, Inc." },
    { id: 18, name: "Philippine College of Surgeons" },
    { id: 19, name: "SRS" },
    { id: 20, name: "NASG" },
    { id: 21, name: "PRSI" },
    { id: 22, name: "CAHO" },
    { id: 23, name: "ISMICS" },
    { id: 24, name: "HUA" }
  ].map(logo => ({
    ...logo,
    src: `/logos/animation/${logo.id}.png`
  }));
  
  // Duplicate the array so the loop is perfectly seamless
  const duplicatedLogos = [...logoData, ...logoData];

  return (
    <div className="relative w-full max-w-[1380px] mt-12 md:mt-16 overflow-hidden flex items-center mx-auto">
      
      {/* Premium gradient fade edges */}
      <div className="absolute left-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll-lr hover:pause-scroll items-start">
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            // Switched to flex-col and increased width slightly to fit text
            className="flex flex-col justify-start items-center w-[160px] md:w-[200px] lg:w-[240px] px-4 md:px-6 transition-transform duration-300 hover:scale-105 cursor-pointer gap-3 md:gap-4"
          >
            {/* Logo Image Wrapper */}
            <div className="relative w-full h-[50px] md:h-[70px] lg:h-[80px]">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill 
                className="object-contain" 
                unoptimized={true}
                loading="eager"
                fetchPriority="low"
              />
            </div>
            {/* Logo Name */}
            <span className="text-center text-[#E3F5F6] text-[12px] md:text-[14px] font-manrope leading-snug opacity-90">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <section className="w-full max-w-[1380px] mt-24 md:mt-[120px] lg:mt-[160px] xl:mt-[200px] px-6 lg:px-12 xl:px-0 mx-auto overflow-hidden">
      <FadeInView delay={200}>
        <h3 className="text-center text-[#F8FFFF] text-[24px] md:text-[28px] lg:text-[36px] font-medium leading-tight md:leading-[40px]" style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
          In association with
        </h3>
        <LogoScroller />
      </FadeInView>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap');
        
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
          animation: scrollLr 45s linear infinite; /* Slowed down slightly for readability */
        }

        /* Pauses the animation when the user hovers over the logos */
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Section7;