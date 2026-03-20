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

// Structured data for all 24 logos found in your images
const logosData = [
  { id: 1, name: "IRCAD India" },
  { id: 2, name: "IASO" },
  { id: 3, name: "IACTS" },
  { id: 4, name: "SMICTSI" },
  { id: 5, name: "Hernia Society of India" },
  { id: 6, name: "Vascular Society of India" },
  { id: 7, name: "Assoc. of Breast Surgeons of India" },
  { id: 8, name: "AIIMS Kalyani" },
  { id: 9, name: "Indian Assoc. of Paediatric Surgeons" },
  { id: 10, name: "Indian Assoc. of Endocrine Surgeons" },
  { id: 11, name: "Govt. Medical College Nagpur" },
  { id: 12, name: "ARIS" },
  { id: 13, name: "AHPI" },
  { id: 14, name: "Assoc. of Urological Surgeons Sri Lanka" },
  { id: 15, name: "Sri Lanka College of Obstetricians & Gynaecologists" },
  { id: 16, name: "ACTSSL" },
  { id: 17, name: "The College of Surgeons of Sri Lanka" },
  { id: 18, name: "Philippine Urological Association" },
  { id: 19, name: "Philippine College of Surgeons" },
  { id: 20, name: "Society of Robotic Surgery" },
  { id: 21, name: "Nepalese Assoc. of Surgical Gastroenterology" },
  { id: 22, name: "Persatuan Robotika Seluruh Indonesia" },
  { id: 23, name: "CAHO" },

];

const LogoScroller = () => {
  // Map the structured data to include the image source path
  const logos = logosData.map(logo => ({
    ...logo,
    src: `/logos/animation/${logo.id}.png` // Assuming your files are named 1.png, 2.png, etc.
  }));
  
  // Duplicate the array so the loop is perfectly seamless
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full max-w-[1380px] mt-8 md:mt-12 overflow-hidden flex items-center mx-auto py-4">
      
      {/* Premium gradient fade edges */}
      <div className="absolute left-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll-lr hover:pause-scroll items-start">
        {duplicatedLogos.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="flex flex-col justify-start items-center w-[140px] md:w-[180px] lg:w-[220px] px-4 transition-transform duration-300 hover:scale-105 cursor-pointer group"
          >
            {/* Logo Wrapper */}
            <div className="relative w-full h-[50px] md:h-[60px] lg:h-[80px]">
              <Image 
                src={item.src} 
                alt={item.name} 
                fill 
                className="object-contain" 
                unoptimized={true}
                loading="eager"
                fetchPriority="low"
              />
            </div>
            
            {/* Logo Name */}
            <span className="mt-4 text-[10px] md:text-[11px] lg:text-xs text-center text-[#F8FFFF]/60 group-hover:text-[#F8FFFF] transition-colors duration-300 font-medium leading-snug line-clamp-3">
              {item.name}
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
          animation: scrollLr 45s linear infinite; /* Slightly slowed down to account for text readability */
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
