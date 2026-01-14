"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Monoton } from 'next/font/google';
import localFont from 'next/font/local';

const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
});

const roba = localFont({
  src: '../../public/fonts/Roba-Regular.ttf',
  variable: '--font-roba',
});

const Section1 = () => {
  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip">
      
      {/* Cinematic Breathing Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

          {/* SMRSC Text */}
          <h1 
            className={`${monoton.className} absolute z-30 whitespace-nowrap`}
            style={{
              color: '#E1C583',
              fontSize: '90px',
              left: '379px', 
              top: '39%',
              margin: 0,
            }}
          >
            SMRSC
          </h1>

          {/* 2026 Stacked Text */}
          <div 
            className={`${roba.className} absolute z-30`}
            style={{
              color: '#E1C583',
              textAlign: 'center',
              fontSize: '160px',
              letterSpacing: '-1.76px',
              left: '763px', 
            }}
          >
            <div style={{ position: 'absolute', top: '251px', lineHeight: '1' }}>20</div>
            <div style={{ position: 'absolute', top: '371px', lineHeight: '1' }}>26</div>
          </div>

          {/* GLOBAL EVENT - Corrected Margins */}
          <div 
            className="absolute z-30 whitespace-nowrap"
            style={{
              color: '#FFF',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.20)',
              fontFamily: '"Blauer Nue", sans-serif',
              fontSize: '36px',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'capitalize',
              left: '981px',
              top: '336px',
            }}
          >
            GLOBAL EVENT
          </div>

          {/* 3rd EDITION - Corrected Margins */}
          <div 
            className="absolute z-30 whitespace-nowrap"
            style={{
              color: '#FFF',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.20)',
              fontFamily: '"Blauer Nue", sans-serif',
              fontSize: '84px',
              fontWeight: '600',
              lineHeight: '150%',
              textTransform: 'capitalize',
              left: '981px', // Fixed mistake: changed from 377px to 981px
              bottom: '364px',
            }}
          >
            3rd EDITION
          </div>

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