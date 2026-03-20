'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CleanSection = () => {
  // Use index 1 as the starting point because index 0 is now the clone of the last image
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const desktopImages = [
    "/images/home/section1/image2.webp",
    "/images/home/section1/image3.webp",
    "/images/home/section1/image5.png",
    "/images/home/section1/image6.webp",
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
  ];

  const realCount = desktopImages.length;
  // Create an array that has a clone of the last image at the beginning, and a clone of the first at the end
  const trackIndices = [realCount - 1, ...Array.from({ length: realCount }, (_, i) => i), 0];

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (idx) => {
    setIsAnimating(true);
    setCurrentIndex(idx + 1);
  };

  // This function resets the slider position without animation to create the "infinite loop" illusion
  const handleTransitionEnd = () => {
    if (currentIndex === realCount + 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(realCount);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  const responsiveBorderRadius = "clamp(80px, 12vw, 200px) 8px clamp(80px, 12vw, 200px) 8px";

  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip pt-32 pb-8 md:pt-[140px] md:pb-12">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

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

      <div className="relative z-10 w-full max-w-[1920px] mx-auto hidden md:flex flex-col items-center gap-4 px-10 xl:px-24">
        
        <div className="relative w-full max-w-[850px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1300px] flex justify-center items-center transition-all duration-300">
          
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide} 
            style={arrowStyle} 
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 left-2 lg:-left-12 xl:-left-20"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>

          <div 
            className="relative w-full overflow-hidden shadow-2xl transition-all duration-300" 
            style={{ aspectRatio: "175 / 89", borderRadius: responsiveBorderRadius }}
          >
            <div 
              className="flex w-full h-full"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isAnimating ? "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)" : "none" 
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {trackIndices.map((realIdx, index) => {
                const src = desktopImages[realIdx];
                return (
                  <div key={index} className="relative w-full h-full flex-shrink-0 flex justify-center items-center group">
                    <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: responsiveBorderRadius }}>
                      <Image
                        src={src}
                        alt={`SMRSC 2026 Hero ${realIdx}`}
                        fill
                        priority={index <= 2} 
                        unoptimized={true}
                        style={{ objectFit: "cover" }}
                      />
                      {realIdx === 0 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      )}
                      
                      {/* Play Button Specific to 5.webp */}
                      {src.includes("/images/5.webp") && (
                        <a 
                          href="https://youtu.be/48CTgZ8oB_w" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-all z-20 cursor-pointer"
                          aria-label="Play Video"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="w-[72px] h-[72px] md:w-24 md:h-24 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10 md:w-12 md:h-12 ml-1">
                              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </a>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide} 
            style={arrowStyle} 
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 right-2 lg:-right-12 xl:-right-20"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </div>

        <div className="flex gap-3 z-20 mt-2">
          {desktopImages.map((_, index) => {
            // Determine which dot is active considering the clones
            let activeIndex = currentIndex - 1;
            if (currentIndex === realCount + 1) activeIndex = 0;
            if (currentIndex === 0) activeIndex = realCount - 1;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeIndex === index ? "w-10 bg-white shadow-[0_0_10px_white]" : "w-2.5 bg-white/30"
                }`}
              />
            )
          })}
        </div>
      </div>

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
        </div>
      </div>
    </section>
  );
};

const HeavySection = () => {
  const arr = [
    "/images/home/section1/image2.webp",
    "/images/home/section1/image3.webp",
    "/images/home/section1/image5.png",
    "/images/home/section1/image6.webp",
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
  ];

  const realCount = arr.length;
  const trackIndices = [realCount - 1, ...Array.from({ length: realCount }, (_, i) => i), 0];

  const [s, _s] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const r = useRef(0);
  const [d, _d] = useState([]);
  const [m, _m] = useState("");
  
  const w = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const isM = w < 768;

  const n = () => { setIsAnimating(true); _s((p) => p + 1); };
  const p = () => { setIsAnimating(true); _s((prev) => prev - 1); };

  const handleTransitionEnd = () => {
    if (s === realCount + 1) {
      setIsAnimating(false);
      _s(1);
    } else if (s === 0) {
      setIsAnimating(false);
      _s(realCount);
    }
  };

  useEffect(() => {
    r.current = s;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      _s((pr) => pr + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const f = async () => {
      const t = new Array(arr.length).fill("");
      _d([...t]);

      setTimeout(() => {
        _m("/images/home/section1/mobileimg.png");
      }, 3500);

      for (let i = 0; i < arr.length; i++) {
        await new Promise((res) => setTimeout(res, 2000));
        t[i] = arr[i];
        _d([...t]);
      }
    };
    f();
  }, []);

  const aS = {
    display: "flex", width: "56px", height: "56px", justifyContent: "center",
    alignItems: "center", borderRadius: "100px", background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.15)", backdropFilter: "blur(16px)",
    color: "#FFF", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  const rB = "clamp(80px, 12vw, 200px) 8px clamp(80px, 12vw, 200px) 8px";

  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip pt-32 pb-8 md:pt-[140px] md:pb-12">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
            width: '1500px', height: '850px', borderRadius: '100%',
            background: 'radial-gradient(circle, rgba(102, 199, 235, 1) 0%, rgba(102, 199, 235, 0.6) 60%, transparent 100%)',
            filter: 'blur(250px)', mixBlendMode: 'screen',
        }}
      />

      {!isM ? (
        <div className="relative z-10 w-full max-w-[1920px] mx-auto hidden md:flex flex-col items-center gap-4 px-10 xl:px-24">
          <div className="relative w-full max-w-[850px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1300px] flex justify-center items-center transition-all duration-300">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={p} style={aS} 
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 left-2 lg:-left-12 xl:-left-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>

            <div className="relative w-full overflow-hidden shadow-2xl transition-all duration-300 bg-white/5" style={{ aspectRatio: "175 / 89", borderRadius: rB }}>
              <div 
                className="flex w-full h-full" 
                style={{ 
                  transform: `translateX(-${s * 100}%)`, 
                  transition: isAnimating ? "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)" : "none" 
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {trackIndices.map((realIdx, i) => {
                  const loadedSrc = d[realIdx];
                  
                  return (
                    <div key={i} className="relative w-full h-full flex-shrink-0 flex justify-center items-center group">
                      <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black/20" style={{ borderRadius: rB }}>
                        {loadedSrc ? (
                          <>
                            <Image src={loadedSrc} alt={`Hero ${realIdx}`} fill loading="lazy" style={{ objectFit: "cover" }} unoptimized={true}/>
                            
                            {/* Play Button Specific to 5.webp in HeavySection too */}
                            {loadedSrc.includes("/images/5.webp") && (
                              <a 
                                href="https://youtu.be/48CTgZ8oB_w" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-all z-20 cursor-pointer"
                                aria-label="Play Video"
                              >
                                <motion.div 
                                  whileHover={{ scale: 1.1 }} 
                                  whileTap={{ scale: 0.9 }}
                                  className="w-[72px] h-[72px] md:w-24 md:h-24 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-300"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10 md:w-12 md:h-12 ml-1">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                  </svg>
                                </motion.div>
                              </a>
                            )}
                          </>
                        ) : (
                          <span className="text-white/30 animate-pulse text-xl"></span>
                        )}
                        {realIdx === 0 && <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }} whileTap={{ scale: 0.9 }} onClick={n} style={aS} className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 right-2 lg:-right-12 xl:-right-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>

          <div className="flex gap-3 z-20 mt-2">
            {arr.map((_, idx) => {
              let activeIndex = s - 1;
              if (s === realCount + 1) activeIndex = 0;
              if (s === 0) activeIndex = realCount - 1;

              return (
                <button 
                  key={idx} 
                  onClick={() => { setIsAnimating(true); _s(idx + 1); }} 
                  className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === idx ? "w-10 bg-white shadow-[0_0_10px_white]" : "w-2.5 bg-white/30"}`} 
                />
              )
            })}
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full flex md:hidden justify-center px-6">
          <div style={{ width: "350px", height: "592px", aspectRatio: "81 / 137", borderRadius: "4px 100px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }} className="relative flex justify-center items-center shadow-2xl bg-black/20">
            {m ? (
              <Image src={m} alt="Hero Mobile" fill loading="lazy" style={{ objectFit: "cover" }} />
            ) : (
               <span className="text-white/30 animate-pulse text-sm"></span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default function Section1() {
  const [useHeavySection, setUseHeavySection] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const switchDate = new Date("2026-04-02T00:00:00").getTime();
    
    if (Date.now() >= switchDate) {
      setUseHeavySection(true);
    }
  }, []);

  if (!mounted) return null; 

  return useHeavySection ? <HeavySection /> : <CleanSection />;
}