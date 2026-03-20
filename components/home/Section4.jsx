"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Section4 = () => {
  const facultyMembers = [
    { id: 1, name: "Dr. Sudhir Srivastava", role: "Founder, Chairman and CEO SS Innovations, INDIA", image: "/images/home/section4/image6.png" },
    { id: 2, name: "Dr. Husam Balkhy", role: "The University of Chicago Medicine and Biological Sciences Chicago, USA", image: "/images/home/section4/image2.png" },
    { id: 4, name: "Dr. Ashutosh K. Tewari ", role: "Icahn School of Medicine at Mount Sinai, NY, USA", image: "/images/home/section4/image5.png" },
    { id: 3, name: "Dr. Ashok K.Hemal", role: "Wake Forest Medical School & Baptist Medical Center, NC, USA", image: "/images/about/committe/9.webp" },
    { id: 5, name: "Dr. Sudhir K Rawal", role: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "/images/home/section4/per1.png" },
    { id: 6, name: "Dr. Somashekhar SP", role: "Aster DM Healthcare", image: "/images/home/section4/per2.png" },
    { id: 7, name: "Dr. Magan Mehrotra", role: "Apex Hospital, Moradabad, UP", image: "/images/home/section4/per3.png" },
    { id: 8, name: "Dr. Lalitaditya Malik", role: "Manipal Hospitals, Jaipur, RJ", image: "/images/home/section4/per4.png" },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild.offsetWidth; 
      const newIndex = Math.round(scrollLeft / (cardWidth + 32));
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth;
        scrollRef.current.scrollTo({ left: index * (cardWidth + 32), behavior: 'smooth' });
        setActiveIndex(index);
    }
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

  const facultyHeadingStyle = { color: '#F8FFFF', fontFamily: '"Blauer Nue", sans-serif', fontStyle: 'normal', fontWeight: 500 };
  const docNameStyle = { color: '#FFF', fontFamily: '"Blauer Nue", sans-serif', fontSize: '1rem', fontStyle: 'normal', fontWeight: 500, lineHeight: '1.5rem' };
  const docDescStyle = { color: '#FFF', fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1rem', opacity: 0.8 };

  // Removed hardcoded font-size to handle it responsively via Tailwind
  const alphabetStyle = {
    color: '#E1C583',
    fontFamily: 'Roba',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1',
    textTransform: 'uppercase',
    opacity: 0.8,
    filter: 'blur(5.449999809265137px)',
    margin: 0,
    padding: 0,
    userSelect: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <motion.section 
      id="section4" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.15 }} 
      variants={containerVariants} 
      // Removed md:h-[130vh] so it formats natively based on screen size, preventing laptop overlaps
      className="relative overflow-hidden min-h-screen w-full bg-[#020617] flex flex-col items-center justify-center py-20 md:py-24 px-6 md:px-12 gap-12 lg:gap-16"
    >
      <style>{`
        @font-face {
          font-family: 'Roba';
          src: url('/fonts/Roba-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* --- Golden Leaf 'O' Background --- */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          style={containerStyle} 
          className="absolute right-[-40px] md:right-[-60px] top-[10%] md:top-[15%]"
        >
          {/* Made the 'O' scale down for laptops (lg) so it doesn't swallow the content */}
          <span style={alphabetStyle} className="text-[300px] md:text-[400px] lg:text-[500px]">O</span>
        </motion.div>
      </div>

      {/* Added responsive scaling to text sizes for lg (laptops) vs xl (desktops) */}
      <motion.div variants={itemVariants} className="relative z-10 max-w-[1380px] w-full flex flex-col gap-4 md:gap-2 text-center md:text-left">
        <h3 style={{ color: '#E6E6E6', fontFamily: 'Manrope, sans-serif', fontStyle: 'normal', fontWeight: 500 }} className="text-[20px] leading-[28px] md:text-[28px] lg:text-[32px] md:leading-[32px] flex flex-col justify-center">A movement that started with a vision is now reshaping</h3>
        <h2 style={{ color: '#E3F5F6', fontFamily: '"Blauer Nue", sans-serif', fontStyle: 'normal', fontWeight: 600 }} className="uppercase tracking-tight text-[32px] leading-[40px] md:text-[50px] lg:text-[64px] md:leading-[60px] lg:leading-[86px]">THE FUTURE OF ROBOTIC SURGERY</h2>
      </motion.div>

      <div className="relative z-10 max-w-[1380px] w-full flex flex-col gap-8 md:gap-10 items-center md:items-stretch">
        <motion.h4 variants={itemVariants} style={facultyHeadingStyle} className="text-[2rem] leading-[2.5rem] md:text-[2.25rem] md:leading-[2.5rem] self-start">Our Faculty</motion.h4>

        {/* CRITICAL FIX: Changed from flex-wrap to CSS Grid for md and lg breakpoints. 
          This ensures cards shrink perfectly to fit 2-across on small laptops and 4-across on big screens.
          Mobile keeps the horizontal snap slider.
        */}
        <div ref={scrollRef} onScroll={handleScroll} className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide gap-6 lg:gap-x-8 lg:gap-y-12 w-full pb-4 md:pb-0">
          {facultyMembers.map((member) => (
            // Changed card width from fixed w-[280px] to full width of grid cell on desktop
            <motion.div key={member.id} variants={itemVariants} className="flex flex-col gap-4 group cursor-pointer items-center md:items-start shrink-0 snap-center w-[280px] md:w-full">
              
              {/* Used aspect-[20/23] purely so height computes automatically based on scaled width */}
              <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-gray-800 w-full aspect-[20/23]">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 320px" className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${(member.id === 1 || member.id === 2) ? 'scale-110' : ''}`} unoptimized={true} loading="eager" />
              </div>

              <div className="flex flex-col gap-1 w-full text-center md:text-left px-2 md:px-0">
                <h5 style={docNameStyle}>{member.name}</h5>
                <p style={docDescStyle}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-2">
            {facultyMembers.map((_, index) => (
                <button key={index} onClick={() => scrollTo(index)} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} aria-label={`Go to faculty member ${index + 1}`} />
            ))}
        </div>

        <motion.div variants={itemVariants} className="flex justify-center mt-4 md:mt-8">
          <MotionLink href="/about?tab=Faculty" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-200 transition-colors cursor-pointer active:scale-95 no-underline">
            <span className="text-[#020617] font-medium font-['Manrope'] text-sm">View all Faculty</span>
            <ArrowRight className="text-[#020617] w-4 h-4" />
          </MotionLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section4;