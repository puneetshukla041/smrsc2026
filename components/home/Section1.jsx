"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip">
      
      {/* Cinematic Breathing Glow - Always Live */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute z-0 pointer-events-none"
        style={{
          width: '70%',
          height: '100%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 186, 254, 0.80)',
          filter: 'blur(250px)',
          borderRadius: '100%',
        }}
      />

      {/* Main Hero Container - Locked to 1693x861 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full flex justify-center"
      >
        <div 
          style={{ 
            marginTop: '98px', 
            marginBottom: '65px', 
            marginLeft: '114px', 
            marginRight: '114px',
            width: '100%',
            maxWidth: '1693px', 
            aspectRatio: '1693 / 861',
          }}
          className="relative"
        >
          <Image
            src="/images/home/section1/image1.png"
            alt="SMRSC 2026 Hero"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />

          {/* Indicators */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            <div className="w-12 h-2.5 bg-white rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section1;