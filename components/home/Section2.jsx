'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SparkleBubble = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="10" 
    height="10" 
    viewBox="0 0 10 10" 
    fill="none"
    className={`w-[9.218px] h-[9.218px] transform -rotate-[66.571deg] ${className}`}
  >
    <circle cx="4.61078" cy="4.61112" r="4.60917" transform="rotate(-76.2652 4.61078 4.61112)" fill="#225CF0"/>
  </svg>
);

const Section2 = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const absoluteBottom = window.scrollY + rect.bottom;
      const maxScroll = absoluteBottom - window.innerHeight;

      if (window.scrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = windowWidth > 0 && windowWidth < 768; 
  const isLaptop = windowWidth >= 768 && windowWidth < 1440; 

  const cards = [
    { id: 1, img: "/images/home/section2/image1.png", x: -500, y: 100 },
    { id: 2, img: "/images/home/section2/image2.png", x: -180, y: -180 },
    { id: 3, img: "/images/home/section2/image3.png", x: 180, y: -180 },
    { id: 4, img: "/images/home/section2/image4.png", x: 500, y: 100 },
  ];

  const sparklePositions = [
    { top: '-2%', left: '-2%' },
    { top: '15%', right: '-4%' },
    { bottom: '-1%', left: '25%' },
    { bottom: '20%', right: '-3%' },
  ];

  const titleStyle = { color: '#FFF', textAlign: 'center', fontFamily: '"Blauer Nue", sans-serif', fontStyle: 'normal', fontWeight: '600', lineHeight: '150%', letterSpacing: '-0.704px', textTransform: 'capitalize' };

  const entranceVariants = {
    hidden: { x: 0, y: 0, scale: 0.4, opacity: 0 },
    visible: (i) => {
      let targetX = cards[i].x; let targetY = cards[i].y;
      if (isMobile) { 
        targetX = 0; targetY = 0; 
      } else if (isLaptop) { 
        targetX = targetX * 0.65; 
        targetY = targetY * 0.65; 
      }
      return { x: targetX, y: targetY, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 45, damping: 14, mass: 1.2, delay: i * 0.1 } };
    }
  };

  const floatVariants = {
    float: (i) => ({ y: isMobile ? [0, -6, 0] : [0, -12, 0], transition: { delay: 0.8 + (i * 0.2), duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 } }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, type: "spring", delay: 0.2 } }
  };

  return (
    <>
      <style>{`
        @keyframes full-glitch {
          0% { transform: translate(0) scale(1); filter: hue-rotate(0deg) contrast(100%); clip-path: inset(0 0 0 0); }
          10% { transform: translate(-4px, 4px) scale(1.02); filter: hue-rotate(90deg) contrast(150%); clip-path: inset(10% 0 80% 0); }
          20% { transform: translate(4px, -4px) scale(0.98); filter: hue-rotate(-90deg) contrast(120%); clip-path: inset(80% 0 10% 0); }
          30% { transform: translate(-4px, -4px) skewX(2deg); filter: hue-rotate(45deg) invert(10%); clip-path: inset(40% 0 40% 0); }
          40% { transform: translate(4px, 4px) skewX(-2deg); filter: hue-rotate(-45deg) saturate(200%); clip-path: inset(20% 0 60% 0); }
          50% { transform: translate(-2px, 2px); filter: hue-rotate(180deg) contrast(200%); clip-path: inset(60% 0 20% 0); }
          60% { transform: translate(2px, -2px) scale(1.05); filter: hue-rotate(0deg) invert(20%); clip-path: inset(10% 0 50% 0); }
          70% { transform: translate(-4px, 0) skewY(3deg); filter: hue-rotate(270deg) contrast(150%); clip-path: inset(50% 0 30% 0); }
          80% { transform: translate(4px, 0) skewY(-3deg); filter: hue-rotate(-270deg) saturate(300%); clip-path: inset(30% 0 50% 0); }
          90% { transform: translate(0, 4px) scale(0.95); filter: hue-rotate(45deg) contrast(180%); clip-path: inset(70% 0 10% 0); }
          100% { transform: translate(0) scale(1); filter: hue-rotate(0deg) contrast(100%); clip-path: inset(0 0 0 0); }
        }
        .active-glitch {
          animation: full-glitch 0.25s infinite linear;
          position: relative;
        }
        .active-glitch::before, .active-glitch::after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          z-index: -1;
          pointer-events: none;
        }
        .active-glitch::before {
          transform: translate(-3px, 0);
          mix-blend-mode: screen;
          filter: drop-shadow(4px 0 0 red);
          animation: full-glitch 0.2s infinite reverse;
        }
        .active-glitch::after {
          transform: translate(3px, 0);
          mix-blend-mode: screen;
          filter: drop-shadow(-4px 0 0 blue);
          animation: full-glitch 0.3s infinite reverse;
        }
      `}</style>
      
      <section 
        ref={sectionRef} 
        className={`relative w-full min-h-screen flex flex-col md:justify-center items-center overflow-hidden bg-transparent py-20 md:py-0 ${isInView ? 'active-glitch' : ''}`}
      >
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          
          <motion.div style={titleStyle} variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} className="relative order-1 md:absolute md:order-none z-30 select-none text-4xl sm:text-5xl lg:text-[64px] mb-12 md:mb-0 md:mt-[280px] lg:mt-[350px]">
            Clinical Outcomes
          </motion.div>

          <div className="relative order-2 md:order-none md:absolute inset-0 flex flex-col md:block items-center justify-center pointer-events-none">
            
            <motion.div
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className={`pointer-events-auto z-30 flex items-center justify-center 
                ${isMobile 
                  ? 'relative mb-10 w-[150px] h-[150px]' 
                  : isLaptop 
                    ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px]' 
                    : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]'}`}
            >
              <img 
                src="/logos/Isolation_Mode (1).png" 
                alt="SMRSC 2026 Logo" 
                className="w-full h-full object-contain pointer-events-none select-none" 
                draggable={false} 
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:block w-full max-w-4xl px-6 md:px-0">
              {cards.map((card, i) => {
                const cardWidth = isMobile ? '100%' : (isLaptop ? '190px' : '272px');
                const cardHeight = isMobile ? 'auto' : (isLaptop ? '156px' : '224px');
                const leftOffset = isMobile ? 'auto' : (isLaptop ? '95px' : '136px'); 
                const topOffset = isMobile ? 'auto' : (isLaptop ? '78px' : '112px');  

                return (
                  <motion.div
                    key={card.id} custom={i} variants={entranceVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                    style={{
                      width: cardWidth, 
                      height: cardHeight, 
                      aspectRatio: isMobile ? '272/224' : 'auto', 
                      position: isMobile ? 'relative' : 'absolute',
                      left: isMobile ? 'auto' : `calc(50% - ${leftOffset})`, 
                      top: isMobile ? 'auto' : `calc(50% - ${topOffset})`, 
                      zIndex: 20,
                    }}
                    className="flex items-center justify-center pointer-events-auto mx-auto"
                  >
                    
                    {!isMobile && sparklePositions.map((pos, idx) => (
                      <motion.div
                        key={`sparkle-${card.id}-${idx}`}
                        className="absolute pointer-events-none z-0"
                        style={pos}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{
                          opacity: [0, 0.3, 0.1, 0.3],
                          scale: [0, 0.6, 0.6, 0.6], 
                        }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                          duration: 6 + (idx % 2), 
                          delay: 0.8 + (i * 0.1) + (idx * 0.1),
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <SparkleBubble />
                      </motion.div>
                    ))}

                    <motion.div custom={i} animate="float" variants={floatVariants} className="relative w-full h-full flex items-center justify-center z-10">
                      <img src={card.img} alt={`Clinical Outcome ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="select-none pointer-events-none" draggable={false} />
                    </motion.div>

                  </motion.div>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;