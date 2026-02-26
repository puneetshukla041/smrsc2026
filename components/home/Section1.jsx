"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    border: "1px solid rgba(255, 255, 255, 0.8)",
    background: "linear-gradient(180deg, #E5B648 0%, #C8890C 100%), radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%)",
    backdropFilter: "blur(21px)",
    cursor: "pointer",
    boxShadow: "0px 8px 32px rgba(200, 137, 12, 0.3)",
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

  const arrowStyle = {
    display: "flex",
    width: "56px",
    height: "56px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100px",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(16px)",
    color: "#FFF",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip pt-32 pb-8 md:pt-[140px] md:pb-12">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

      {/* Background Glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
            width: '1500px',
            height: '850px',
            borderRadius: '100%',
            background: 'radial-gradient(circle, rgba(102, 199, 235, 1) 0%, rgba(102, 199, 235, 0.6) 60%, transparent 100%)',
            filter: 'blur(250px)',
            mixBlendMode: 'screen',
        }}
      />

      {/* DESKTOP VIEW */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto hidden md:flex flex-col items-center gap-4 px-10 xl:px-24">
        <div className="relative w-full flex justify-center items-center">
          
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide} 
            style={{ ...arrowStyle, left: "10px" }} 
            className="hidden lg:flex xl:-left-[80px] xl:absolute"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>

          <div 
            className="relative w-full max-w-[1100px] xl:max-w-[1300px] overflow-hidden shadow-2xl" 
            style={{ aspectRatio: "175 / 89", borderRadius: "200px 8px 200px 8px" }}
          >
            <div 
              className="flex w-full h-full"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)" 
              }}
            >
              {desktopImages.map((src, index) => (
                <div key={index} className="relative w-full h-full flex-shrink-0 flex justify-center items-center">
                  <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "200px 8px 200px 8px" }}>
                    <Image
                      src={src}
                      alt={`SMRSC 2026 Hero ${index + 2}`}
                      fill
                      // IMPORTANT: Set priority for the first few images to load them ASAP
                      priority={index <= 1} 
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index <= 1 ? "eager" : "lazy"}
                      unoptimized={true}
                      style={{ objectFit: "cover" }}
                    />
                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>

                  {index === 0 && (
                    <motion.a 
                      href="/register" 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }} 
                      style={buttonContainerStyle} 
                      className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20"
                    >
                      <span style={buttonTextStyle}>Register Now</span>
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide} 
            style={{ ...arrowStyle, right: "10px" }} 
            className="hidden lg:flex xl:-right-[80px] xl:absolute"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </div>

        <div className="flex gap-3 z-20 mt-2">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === index ? "w-10 bg-white shadow-[0_0_10px_white]" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="relative z-10 w-full flex md:hidden justify-center px-6">
        <div
          style={{ width: "350px", height: "592px", aspectRatio: "81 / 137", borderRadius: "4px 100px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}
          className="relative flex justify-center shadow-2xl"
        >
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
            href="/register" 
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