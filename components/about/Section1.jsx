'use client';
import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  return (
    <section className="w-full bg-transparent flex flex-col items-center">
      
      {/* --- DESKTOP VIEW --- */}
      {/* ALIGNMENT FIX: Applied max-w-[1380px] and the matching px-4/10/16/0 scale */}
      <div className="relative z-10 w-full hidden md:flex justify-center mt-20 lg:mt-[98px] mb-12 lg:mb-[65px] px-4 md:px-10 lg:px-16 xl:px-0 mx-auto max-w-[1380px]">
        <div className="relative w-full aspect-[1693/833]">
          <Image
            src="/images/about/section1/img1.webp"
            alt="SMRSC About Banner"
            fill
            priority={true}
            fetchPriority="high"
            loading="eager"
            unoptimized={true} 
            className="object-contain"
          />
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden w-full flex justify-center mt-20 mb-10 px-4">
        <div className="relative w-full max-w-[400px] aspect-[350/476]">
          <Image
            src="/images/about/section1/mobile.webp"
            alt="SMRSC Mobile Banner"
            fill
            className="object-contain"
            priority={true}
            fetchPriority="high"
            loading="eager"
            unoptimized={true} 
          />
        </div>
      </div>

    </section>
  );
};

export default Section1;