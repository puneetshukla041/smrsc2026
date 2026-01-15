"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section3 = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const images = [
    { id: 1, src: "/images/home/section3/image1.png", title: "SSI Mantra 3", desc: "India's first globally developed robotic surgical system. Crafted for precision, adaptability, and scale." },
    { id: 2, src: "/images/home/section3/image2.png", title: "Advanced Robotics", desc: "Next-generation surgical precision with modular arm configurations." },
    { id: 3, src: "/images/home/section3/image3.png", title: "Precision Control", desc: "Real-time haptic feedback and 3D visualization for surgeons." },
    { id: 4, src: "/images/home/section3/image4.png", title: "Future of Surgery", desc: "Redefining the boundaries of minimally invasive procedures." },
    { id: 5, src: "/images/home/section3/image5.png", title: "Global Innovation", desc: "Bridging the gap between technology and healthcare accessibility." },
    { id: 6, src: "/images/home/section3/image6.png", title: "Smart Integration", desc: "Seamless connectivity with hospital ecosystems and data clouds." },
    { id: 7, src: "/images/home/section3/image7.png", title: "Scalable Systems", desc: "Design thinking applied to complex medical engineering." },
  ];

  const currentIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Content Styles (From Original)
  const textStyle = {
    color: '#E3F5F6',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '64px',
    fontWeight: '600',
    lineHeight: '72px',
    maxWidth: '900px',
  };

  const alphabetStyle = {
    color: '#E1C583',
    fontFamily: 'Roba, sans-serif',
    fontSize: '500px',
    textTransform: 'uppercase',
    filter: 'blur(5.45px)',
    userSelect: 'none',
  };

  const leftGlowStyle = {
    width: '312px',
    height: '388px',
    borderRadius: '388px',
    background: '#2233F0',
    filter: 'blur(200px)',
    position: 'absolute',
    left: '-150px', 
    top: '50%',
    transform: 'translate(-20%, -50%)',
    zIndex: -1, 
  };

  // Applied Properties: 48x48, padding 10px, gap 10px, centered
  const arrowBtnClass = "flex w-[48px] h-[48px] p-[10px] justify-center items-center gap-[10px] rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 shrink-0 z-50 active:scale-95";

  return (
    <section className="relative w-full overflow-hidden bg-black">
      
      {/* 1. Header & Background Effects */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div style={leftGlowStyle} aria-hidden="true" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={alphabetStyle} 
            className="absolute left-[-150px] top-1/2 -translate-y-1/2 z-0"
          >
            O
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-12">
          <motion.h2 style={textStyle} className="text-4xl md:text-6xl">From landmark moments in 2024 and 2025</motion.h2>
          
          <div className="flex justify-center items-center py-4">
            <svg width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0.5" y1="0" x2="0.5" y2="219" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#634B19" />
                  <stop offset="0.5" stopColor="#F2B629" />
                  <stop offset="1" stopColor="#634B19" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          <motion.h2 style={textStyle} className="text-4xl md:text-6xl">Now, see what unfolds in 2026</motion.h2>

          <div className="flex justify-center items-center py-4">
            <svg width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 2.8 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Carousel Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-start pb-20 overflow-visible">
        <div className="relative flex items-center justify-center w-full overflow-visible gap-12 px-10">
          
          {/* Left Arrow */}
          <button onClick={() => paginate(-1)} className={arrowBtnClass}>
            <ChevronLeft className="text-white w-full h-full" />
          </button>

          {/* Slider Frame */}
          <div 
            className="relative overflow-hidden rounded-[40px] shadow-[0_0_60px_rgba(0,0,0,0.6)] shrink-0 bg-[#0a0a0a]"
            style={{ width: '1380px', height: '720px' }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
                  opacity: { duration: 0.4 }
                }}
                className="absolute inset-0 w-full h-full will-change-transform"
              >
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
                
                <div className="absolute bottom-16 left-16 right-16 text-left">
                  <span className="text-[#E1C583] uppercase tracking-widest text-sm font-medium mb-4 block">Experience Zone</span>
                  <h3 className="text-[#E3F5F6] text-5xl font-bold mb-4 font-['Blauer_Nue']">{images[currentIndex].title}</h3>
                  <p className="text-[#E3F5F6]/70 text-xl max-w-2xl leading-relaxed">{images[currentIndex].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button onClick={() => paginate(1)} className={arrowBtnClass}>
            <ChevronRight className="text-white w-full h-full" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex space-x-3 mt-12">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx ? "w-10 bg-[#E1C583]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;