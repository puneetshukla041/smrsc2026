'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Plus, Minus, ArrowRight } from 'lucide-react';

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// 🚀 1. MAKE ALL HEAVY COMPONENTS DYNAMIC
const Overview = dynamic(() => import('../../components/explore/Overview'), {
  ssr: false, 
  loading: () => <div className="min-h-[50vh] flex items-center justify-center text-white/50">Loading Overview...</div>
});
const ScheduleDay1 = dynamic(() => import('../../components/explore/ScheduleDay1'), {
  ssr: false,
  loading: () => <p className="text-white text-center py-10">Loading Day 1...</p>
});
const ScheduleDay2 = dynamic(() => import('../../components/explore/ScheduleDay2'), {
  ssr: false,
  loading: () => <p className="text-white text-center py-10">Loading Day 2...</p>
});
const ScheduleDay3 = dynamic(() => import('../../components/explore/ScheduleDay3'), {
  ssr: false,
  loading: () => <p className="text-white text-center py-10">Loading Day 3...</p>
});

// --- FAQ COMPONENT ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I find my session location at the venue?",
      answer: "Use the website’s search feature to locate sessions and access step-by-step venue navigation."
    },
    {
      question: "Can I personalise my experience?",
      answer: "Yes, you can select your specialty to view relevant sessions and faculty."
    },
    {
      question: "Can I attend sessions outside my selected specialty?",
      answer: "Yes, all attendees can explore and attend sessions across specialties."
    }
  ];

  const springTransition = { type: "spring", stiffness: 300, damping: 30, mass: 1 };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full mt-20 md:mt-24 mb-20 relative">
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

      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col w-full space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div key={index} variants={itemVariants} className="group relative cursor-pointer" onClick={() => toggleFAQ(index)}>
              <motion.div layout className={`absolute inset-0 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/[0.02] border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10'}`} />
              <div className="relative z-10 px-5 py-5 md:px-8 md:py-6 pointer-events-none">
                <div className="flex items-center justify-between w-full text-left">
                  <span className={`font-manrope text-base md:text-lg font-medium tracking-tight transition-colors duration-300 pr-4 md:pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <motion.div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
                     <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Minus size={16} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Plus size={16} strokeWidth={2.5} />
                            </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={springTransition} className="overflow-hidden">
                      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="pt-4 pb-2 text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl font-manrope">
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

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="w-full flex justify-center md:justify-end mt-10 md:mt-12">
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="group relative flex items-center gap-[10px] px-[24px] py-[12px] rounded-[40px] border border-transparent hover:border-white text-white transition-all duration-300 cursor-pointer overflow-hidden"
          style={{ background: 'rgba(0, 0, 0, 0.20)' }}
        >
          <div 
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
            style={{ background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)' }} 
          />
          <span className="relative z-10 font-manrope font-semibold text-sm tracking-wide">View all FAQs</span>
          <motion.div 
            className="relative z-10" 
            initial={{ x: 0 }} 
            whileHover={{ x: 5 }} 
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
              <ArrowRight size={18} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

const ExploreContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabParam = searchParams.get('tab') || 'overview';
  const [activeTab, setActiveTab] = useState(tabParam);
  
  // 🚀 2. DEFERRED STATE: This controls when the heavy stuff loads
  const [loadHeavyContent, setLoadHeavyContent] = useState(false);

  useEffect(() => {
    if (tabParam) setActiveTab(tabParam);
  }, [tabParam]);

  // 🚀 3. TRIGGER BACKGROUND LOAD AFTER HERO PAINTS
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLoadHeavyContent(true);
      });
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleTabChange = (id) => {
    setActiveTab(id);
    router.push(`/explore?tab=${id}`, { scroll: false });
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' }, 
    { id: 'day3', label: 'Day 3' },
  ];

  return (
    <main className="flex-grow w-full flex flex-col items-center overflow-x-hidden">
        
        {/* === 1. HERO IMAGE SECTION (RENDERS INSTANTLY) === */}
        <section className="w-full bg-transparent flex flex-col items-center">
          
          {/* --- DESKTOP VIEW --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 w-full hidden md:flex justify-center mt-20 lg:mt-[98px] mb-12 lg:mb-[65px] px-6 lg:px-8"
          >
            {/* Removed inline margins, added px-6/px-8 to parent, fluid aspect ratio */}
            <div className="relative w-full max-w-[1723px] aspect-[1723/876]">
              <Image
                src="/images/explore/hero.webp" 
                alt="Explore Hero"
                fill
                priority 
                fetchPriority="high"
                loading="eager"      
                className="object-contain"
                sizes="(max-width: 1723px) 100vw, 1723px"
              />
            </div>
          </motion.div>

          {/* --- MOBILE VIEW --- */}
          {/* Replaced fixed 350x476 with aspect ratio and max-width for fluidity */}
          <div className="md:hidden w-full flex justify-center mt-24 mb-10 px-4 sm:px-8">
              <div className="relative w-full max-w-[400px] aspect-[350/476]">
                <Image
                  src="/images/explore/mobile.png"
                  alt="Explore Mobile Hero"
                  fill
                  className="object-contain"
                  priority 
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
          </div>
        </section>

        {/* === 2. BACKGROUND LOADED CONTENT === */}
        {loadHeavyContent && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-6 lg:px-8"
          >
            
            {/* Tabs & Buttons Area */}
            {/* Flex-col on mobile so the button falls neatly under the tabs */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-6 md:gap-4">
              
              <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      px-6 md:px-8 py-2 md:py-3 rounded-full border transition-all duration-300 font-manrope text-sm font-medium tracking-wide cursor-pointer whitespace-nowrap flex-grow sm:flex-grow-0
                      ${activeTab === tab.id ? 'bg-[#0B1221] border-white text-white shadow-lg' : 'bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white'}
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Download Button takes full width on tiny mobile screens */}
              <button className="w-full md:w-auto inline-flex justify-center items-center gap-[10px] px-[24px] py-[12px] rounded-[40px] border border-[#2A3A3B] bg-[#E3F5F6] backdrop-blur-[21px] text-[#020617] font-manrope text-sm font-semibold hover:bg-white transition-all cursor-pointer">
                Download Brochure
              </button>
            </div>

            <div className="w-full pb-10 min-h-[50vh]">
              {activeTab === 'overview' && <Overview />}
              {activeTab === 'day1' && <ScheduleDay1 />}
              {activeTab === 'day2' && <ScheduleDay2 />}
              {activeTab === 'day3' && <ScheduleDay3 />}
            </div>

            {/* FAQ Section */}
            <FAQSection />

          </motion.div>
        )}
      </main>
  );
};

const ExplorePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      <Suspense fallback={<div className="min-h-screen text-white flex items-center justify-center w-full">Loading Explore Data...</div>}>
        <ExploreContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ExplorePage;