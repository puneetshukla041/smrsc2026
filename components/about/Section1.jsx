'use client';
import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  return (
    <section className="w-full bg-transparent flex flex-col items-center">
      
      {/* --- DESKTOP VIEW --- */}
      {/* UPDATED: Added responsive laptop padding (lg:px-16 xl:px-24 2xl:px-8) 
          so the image doesn't touch the screen edges on standard 13" and 15" laptops */}
      <div className="relative z-10 w-full hidden md:flex justify-center mt-20 lg:mt-[98px] mb-12 lg:mb-[65px] px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-8">
        <div className="relative w-full max-w-[1693px] aspect-[1693/833]">
          <Image
            src="/images/about/section1/img1.webp"
            alt="SMRSC About Banner"
            fill
            priority={true}
            fetchPriority="high"
            loading="eager"
            unoptimized={true} // ⚡ ZERO BUFFERING
            className="object-contain"
          />
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      {/* REFACTORED: Replaced hardcoded 350x476px with a fluid aspect ratio layout.
          Now it scales perfectly on both small (320px) and large (430px) mobile screens.
      */}
      <div className="md:hidden w-full flex justify-center mt-20 mb-10 px-4 sm:px-8">
        <div className="relative w-full max-w-[400px] aspect-[350/476]">
          <Image
            src="/images/about/section1/mobile.webp"
            alt="SMRSC Mobile Banner"
            fill
            className="object-contain"
            priority={true}
            fetchPriority="high"
            loading="eager"
            unoptimized={true} // ⚡ ZERO BUFFERING
          />
        </div>
      </div>

    </section>
  );
};

export default Section1;