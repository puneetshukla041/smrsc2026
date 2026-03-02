'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// --- FAQ Component Matching Previous Designs ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I find my session hall inside the venue?",
      answer: "You can use the website’s search feature to locate your session and access step-by-step directions within the venue."
    },
    {
      question: "Are taxis and ride-sharing services available?",
      answer: "Yes, app-based cab services and taxis are widely available throughout New Delhi."
    },
    {
      question: "Which visa category should I apply under?",
      answer: "International participants are advised to apply under the Tourist Visa category, subject to eligibility and applicable regulations."
    },
    {
      question: "Does SMRSC provide hotel bookings?",
      answer: "Attendees are responsible for booking accommodation directly with hotels. "
    }
  ];

  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full max-w-[1380px] mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 relative">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black/0 to-transparent blur-[120px] pointer-events-none opacity-30 -z-10" />

      <motion.h2 
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 md:mb-16 text-[28px] md:text-3xl lg:text-4xl font-manrope text-white font-semibold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col w-full space-y-4"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <motion.div
                layout
                className={`absolute inset-0 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/[0.02] border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10'}`}
              />

              <div className="relative z-10 px-5 py-5 md:px-8 md:py-6 pointer-events-none">
                <div className="flex items-center justify-between w-full text-left">
                  <span 
                    className={`font-manrope text-base md:text-lg font-medium tracking-tight transition-colors duration-300 pr-4 md:pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
                  >
                    {faq.question}
                  </span>
                  
                  <motion.div 
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}`}
                  >
                     <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="minus"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Minus size={16} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="plus"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Plus size={16} strokeWidth={2.5} />
                            </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={springTransition}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 0.7 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="pt-4 pb-2 text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl font-manrope text-left"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center md:justify-end mt-10 md:mt-12"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <span className="relative z-10 font-manrope font-semibold text-sm tracking-wide">View all FAQs</span>
          <motion.div
            className="relative z-10"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
              <ArrowRight size={18} />
          </motion.div>
          
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_infinite] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent z-0" />
        </motion.button>
      </motion.div>
    </div>
  );
};

// --- Main Layout Component ---
export default function VisitLayout({ children }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const tabs = [
    { label: 'Venue', path: '/visit/venue' },
    { label: 'Hotels', path: '/visit/hotels' },
    { label: 'Tourism', path: '/visit/places' } 
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24 pb-20 flex flex-col items-center overflow-x-hidden">
        
        {/* === 1. HERO IMAGE === */}
        <div className="w-full flex justify-center">
          
          {/* --- DESKTOP VIEW --- */}
          <div className="hidden md:flex relative w-full justify-center px-6 lg:px-8 mt-4 lg:mt-8 shadow-2xl">
            <div 
              className="relative w-full max-w-[1693px] aspect-[1693/833] overflow-hidden"
              style={{ borderRadius: '8px clamp(50px, 10vw, 200px)' }} // Makes the unique corner cut responsive
            >
              <Image
                src="/images/visit/hero.webp"
                alt="SMRSC Venue"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="md:hidden w-full flex justify-center mt-4 mb-6 px-4 sm:px-8">
              <div className="relative w-full max-w-[400px] aspect-[350/476]">
                <Image
                  src="/images/visit/mobile.png"
                  alt="SMRSC Venue Mobile"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
          </div>

        </div>

        {/* === 2. NAVIGATION BUTTONS === */}
        {/* Removed fixed left padding and added responsive centering/wrapping */}
        <div className="w-full max-w-[1380px] mx-auto flex flex-wrap justify-center md:justify-start gap-3 md:gap-[15px] mt-8 lg:mt-[100px] px-4 md:px-6 lg:px-8 mb-10 lg:mb-12">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              style={{
                background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
              }}
              className={`
                flex w-[120px] md:w-[150px] px-4 md:px-6 py-2 md:py-3 justify-center items-center gap-[10px] shrink-0
                rounded-[40px] border cursor-pointer
                text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300
                ${isActive(tab.path) 
                  ? 'border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'border-white/30 text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* === 3. DYNAMIC CHILD CONTENT === */}
        {/* Added wrapper to keep content from hitting screen edges on ultra-wide or mobile */}
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
          {children}
        </div>

        {/* === 4. FAQ SECTION ADDED HERE === */}
        <FAQSection />

      </main>

      <Footer />
    </div>
  );
}