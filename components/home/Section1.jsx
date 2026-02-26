"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of desktop images
  const desktopImages = [
    "/images/home/section1/image2.webp",
    "/images/home/section1/image3.webp",
    "/images/home/section1/image4.webp",
    "/images/home/section1/image5.webp",
    "/images/home/section1/image6.webp",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === desktopImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? desktopImages.length - 1 : prev - 1));
  };

  // Optional: Auto-play functionality (changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const buttonContainerStyle = {
    display: "flex",
    width: "280px", 
    height: "51px",
    padding: "12px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "40px",
    border: "1px solid #FFF",
    background: "linear-gradient(180deg, #E5B648 0%, #C8890C 100%), radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%)",
    backdropFilter: "blur(21px)",
    cursor: "pointer", 
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  };

  const buttonTextStyle = {
    color: "#FFF",
    fontFamily: "Manrope, sans-serif",
    fontSize: "18px", 
    fontWeight: "600",
    lineHeight: "20px",
    whiteSpace: "nowrap",
  };

  // Your requested arrow styling + basic visibility colors
  const arrowStyle = {
    display: "flex",
    width: "48px",
    height: "48px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "100px",
    background: "rgba(0, 0, 0, 0.4)", // Semi-transparent black for visibility
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(4px)",
    color: "#FFF",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    transition: "background 0.3s ease",
  };

  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip pt-24 pb-12 md:pt-32 md:pb-20">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

      {/* Background Glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
            width: '1456px',
            height: '800px',
            borderRadius: '100%',
            background: 'rgba(102, 199, 235, 0.85)',
            filter: 'blur(350px)',
        }}
      />

      {/* --- DESKTOP VIEW (CAROUSEL) --- */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 hidden md:flex justify-center items-center">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "1693 / 861" }}>
          
          {/* Track */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {desktopImages.map((src, index) => (
              <div key={index} className="relative w-full h-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`SMRSC 2026 Hero ${index + 2}`}
                  fill
                  priority={index === 0} // Only prioritize the first image
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  unoptimized={true}
                  style={{ objectFit: "contain" }}
                />

                {/* Register Button ONLY on the first slide (image2.webp) */}
                {index === 0 && (
                  <motion.a 
                    href="https://indiattitude.eventsair.com/smrsc-2026/registration-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    style={buttonContainerStyle} 
                    className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 origin-center scale-90 lg:scale-100"
                  >
                    <span style={buttonTextStyle}>Register Now</span>
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            style={{ ...arrowStyle, left: "20px" }}
            className="hover:bg-black/60"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide} 
            style={{ ...arrowStyle, right: "20px" }}
            className="hover:bg-black/60"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Optional: Carousel Indicators (Dots) at the bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {desktopImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (UNCHANGED) --- */}
      <div className="relative z-10 w-full flex md:hidden justify-center px-6">
        <div
          style={{ width: "350px", height: "592px", aspectRatio: "81 / 137", borderRadius: "4px 100px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}
          className="relative flex justify-center shadow-2xl"
        >
          {/* 👇 Change this to a .webp file immediately! */}
          <Image
            src="/images/home/section1/mobileimg.png" 
            alt="SMRSC 2026 Hero Mobile"
            fill
            priority={true}
            fetchPriority="high"
            loading="eager"
            unoptimized={true}
            style={{ objectFit: "cover" }}
          />

          <motion.a 
            href="https://indiattitude.eventsair.com/smrsc-2026/registration-form"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            style={{ ...buttonContainerStyle, width: "240px", height: "45px" }} 
            className="absolute bottom-[8%] z-20"
          >
            <span style={{ ...buttonTextStyle, fontSize: "16px" }}>Register Now</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Section1;