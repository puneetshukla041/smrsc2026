"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section6 = () => {
  const registerBtnStyle = { display: 'flex', width: '301px', padding: '16px 24px', justifyContent: 'center', alignItems: 'center', gap: '5px', borderRadius: '24px', background: '#F8FFFF', border: 'none', cursor: 'pointer', zIndex: 20, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', textDecoration: 'none' };
  const registerBtnTextStyle = { color: '#191B1B', fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: '20px' };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
  const textVariants = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const imageVariants = { hidden: { opacity: 0, y: 50, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } };

  const subHeadingBaseStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#E6E6E6', fontFamily: "'Manrope', sans-serif", fontWeight: 500 };
  const mainHeadingBaseStyle = { color: '#E3F5F6', fontFamily: '"Blauer Nue", sans-serif', fontWeight: 600, textTransform: 'uppercase' };

  return (
    // Removed md:min-h-[150vh] which causes massive empty space on widescreen laptops
    <section id="section6" className="w-full bg-[#020617] flex flex-col items-center py-20 lg:py-32 px-6 relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap');
        @font-face { font-family: 'Blauer Nue'; src: url('/fonts/BlauerNue.otf') format('opentype'); font-weight: normal; font-style: normal; }
      `}</style>

      <motion.div className="w-full max-w-[1380px] flex flex-col items-center h-full" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
        
        {/* HEADING SECTION */}
        <div className="w-full flex flex-col items-start gap-1">
          {/* Scaled down typography for md breakpoints so it fits comfortably on laptops */}
          <motion.div variants={textVariants} style={subHeadingBaseStyle} className="w-full text-xl md:text-[28px] lg:text-[32px] leading-tight">Last year we inspired</motion.div>
          <motion.h1 variants={textVariants} style={mainHeadingBaseStyle} className="text-4xl leading-tight md:text-[48px] lg:text-[64px] md:leading-[1.1]">THIS YEAR, WE TRANSFORM</motion.h1>
        </div>

        {/* IMAGE SECTION */}
        <motion.div variants={imageVariants} className="mt-12 md:mt-16 lg:mt-24 w-full flex justify-center">
          
          {/* CRITICAL FIX: Replaced hardcoded width/height with w-full and aspect ratios! 
              This ensures the container scales fluidly down to fit smaller laptops. */}
          <div className="relative w-full aspect-[350/173] md:aspect-[1380/693] rounded-[20px] md:rounded-[40px] overflow-hidden flex justify-center items-center shadow-2xl">
            
            <Image src="/images/home/section6/image1.webp" alt="SMRSC 2026 Transformation Desktop" fill sizes="(max-width: 1380px) 100vw, 1380px" className="object-cover hidden md:block" unoptimized={true} loading="eager" />
            <Image src="/images/home/section6/mobile.webp" alt="SMRSC 2026 Transformation Mobile" fill sizes="(max-width: 768px) 100vw, 350px" className="object-cover block md:hidden" unoptimized={true} loading="eager" />

            {/* BUTTON FIX: Switched hardcoded md:top-[450px] to top-[65%]. 
                When the image shrinks on a laptop, a fixed 450px would push the button right out of the container! */}
            <motion.a 
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              style={registerBtnStyle} 
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[65%] md:translate-y-0 max-w-[90%] md:max-w-[301px]"
            >
              <span style={registerBtnTextStyle}>Register Now</span>
            </motion.a>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Section6;