"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  const [s, _s] = useState(0);
  const r = useRef(0);
  const [d, _d] = useState([]);
  const [m, _m] = useState("");
  
  const w = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const isM = w < 768;

  const arr = [
    "/images/home/section1/image2.webp",
    "/images/home/section1/image3.webp",
    "/images/home/section1/image4.webp",
    "/images/home/section1/image5.png",
    "/images/home/section1/image6.webp",
  ];

  const n = () => _s((p) => (p === arr.length - 1 ? 0 : p + 1));
  const p = () => _s((prev) => (prev === 0 ? arr.length - 1 : prev - 1));

  useEffect(() => {
    r.current = s;
  });

  useEffect(() => {
    setInterval(() => {
      _s((pr) => (pr === arr.length - 1 ? 0 : pr + 1));
    }, 5000);
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
        _d(t);
      }
    };
    f();
  }, []);

  const bC = {
    display: "flex", width: "280px", height: "51px", padding: "12px 24px",
    justifyContent: "center", alignItems: "center", gap: "10px",
    borderRadius: "40px", border: "1px solid rgba(255, 255, 255, 0.8)",
    background: "linear-gradient(180deg, #E5B648 0%, #C8890C 100%), radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%)",
    backdropFilter: "blur(21px)", cursor: "pointer",
    boxShadow: "0px 8px 32px rgba(200, 137, 12, 0.3)", textDecoration: "none",
  };

  const bT = {
    color: "#FFF", fontFamily: "Manrope, sans-serif", fontSize: "18px",
    fontWeight: "600", lineHeight: "20px", whiteSpace: "nowrap",
  };

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
              <div className="flex w-full h-full" style={{ transform: `translateX(-${s * 100}%)`, transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)" }}>
                {arr.map((_, i) => (
                  <div key={Math.random()} className="relative w-full h-full flex-shrink-0 flex justify-center items-center">
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black/20" style={{ borderRadius: rB }}>
                      {d[i] ? (
                        <Image src={d[i]} alt={`Hero ${i}`} fill loading="lazy" style={{ objectFit: "cover" }} />
                      ) : (
                        <span className="text-white/30 animate-pulse text-xl"></span>
                      )}
                      {i === 0 && <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />}
                    </div>
                    {i === 0 && (
                      <motion.a href="/register" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={bC} className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20">
                        <span style={bT}>Register Now</span>
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }} whileTap={{ scale: 0.9 }} onClick={n} style={aS} className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 right-2 lg:-right-12 xl:-right-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>

          <div className="flex gap-3 z-20 mt-2">
            {arr.map((_, i) => (
              <button key={i} onClick={() => _s(i)} className={`h-2.5 rounded-full transition-all duration-500 ${s === i ? "w-10 bg-white shadow-[0_0_10px_white]" : "w-2.5 bg-white/30"}`} />
            ))}
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
            <motion.a href="/register" style={{ ...bC, width: "240px", height: "45px" }} className="absolute bottom-[8%] z-20">
              <span style={{ ...bT, fontSize: "16px" }}>Register Now</span>
            </motion.a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section1;