"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
  // --- Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay }
    })
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 1.4 }
    }
  };

  // --- Styles ---
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

  return (
    /* Main Section Container */
    <section className="relative w-full overflow-hidden bg-black">
      
      {/* 1. Content Wrapper */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
        
        {/* --- Background Elements --- */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div style={leftGlowStyle} aria-hidden="true" />
          
          {/* Animated Letter "O" */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={alphabetStyle} 
            className="absolute left-[-150px] top-1/2 -translate-y-1/2 z-0"
          >
            O
          </motion.div>
        </div>

        {/* --- Main Center Content --- */}
        <div className="relative z-10 flex flex-col items-center space-y-12">
          
          {/* First Heading */}
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.8}
            style={textStyle}
            className="text-4xl md:text-6xl"
          >
            From landmark moments in 2024 and 2025
          </motion.h2>

          {/* First Animated Yellow Line SVG */}
          <div className="flex justify-center items-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0.5" y1="0" x2="0.5" y2="219" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#634B19" />
                  <stop offset="0.5" stopColor="#F2B629" />
                  <stop offset="1" stopColor="#634B19" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" 
                strokeWidth="2"
                variants={lineDraw}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {/* Second Heading */}
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.5}
            style={textStyle}
            className="text-4xl md:text-6xl"
          >
            Now, see what unfolds in 2026
          </motion.h2>

          {/* Second Animated Yellow Line SVG (NEW) */}
          <div className="flex justify-center items-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ 
                  pathLength: 1, 
                  opacity: 1,
                  transition: { duration: 1.5, ease: "easeInOut", delay: 3.1 } 
                }}
                viewport={{ once: true }}
              />
            </svg>
          </div>
        </div>

        {/* Subtle Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2B629]/5 blur-[120px] pointer-events-none rounded-full" />
      </div>

      {/* 2. THE EXTENSION SPACE */}
      <div className="h-[150vh] w-full" />
      
    </section>
  );
};

export default Section3;