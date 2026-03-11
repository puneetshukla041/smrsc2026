'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react'; 
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/footer';

// --- FAQ Component ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer: "Major credit and debit cards, along with supported online payment gateways, are accepted during checkout."
    },
    {
      question: "I did not receive a confirmation email. What should I do?",
      answer: "Please check your spam folder. If not received, contact the support team with your transaction details."
    },

    {
      question: "Do you provide visa assistance?",
      answer: "The organizing team can provide general guidance. International attendees are advised to apply under the Tourist Visa category, subject to applicable regulations. Visa applications must be completed through official government channels."
    }
  ];

  // --- Animation Configurations ---
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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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
    <div className="w-full max-w-[1200px] mt-20 mb-20 relative">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black/0 to-transparent blur-[120px] pointer-events-none opacity-30 -z-10" />

      <motion.h2 
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 text-3xl md:text-4xl font-manrope text-white font-semibold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
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

              <div className="relative z-10 px-6 py-6 md:px-8 pointer-events-none">
                <div className="flex items-center justify-between w-full text-left">
                  <span 
                    className={`font-manrope text-lg font-medium tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
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
                        className="pt-4 pb-2 text-base leading-relaxed text-gray-300 max-w-3xl font-manrope text-left"
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
    </div>
  );
};

// --- Main Page Component ---

// Smooth fade-in animations
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVar = {
  hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatVar = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const RegisterPage = () => {
  // State for the selected radio button
  const [nationality, setNationality] = useState('indian');

  // Logic to handle redirection based on selection
  const handleContinue = () => {
    const nationalUrl = "https://indiattitude.eventsair.com/smrsc-2026/smrsc-registration-form";
    const internationalUrl = "https://indiattitude.eventsair.com/registration-for-international-delegates-smrsc-2026/registration-for-international-delegates";
    
    const targetUrl = nationality === 'indian' ? nationalUrl : internationalUrl;
    
    // Redirects user in the same tab
    window.location.href = targetUrl;
    
    // NOTE: If you prefer to open the registration in a NEW tab, comment out the line above
    // and uncomment the line below:
    // window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] overflow-x-hidden relative font-sans">
      <Header />

      {/* --- Ambient Background Glows --- */}
      <motion.div 
        variants={floatVar}
        animate="animate"
        className="fixed top-[15%] -left-[10%] sm:left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#004398] opacity-[0.2] blur-[100px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        variants={floatVar}
        animate="animate"
        transition={{ delay: 1 }}
        className="fixed bottom-[10%] -right-[10%] sm:right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#0BD3D3] opacity-[0.15] blur-[100px] rounded-full pointer-events-none z-0" 
      />

      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 relative z-10 w-full min-h-screen">
        
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full max-w-5xl"
        >
          {/* Registration Title */}
          <motion.h1 
            variants={itemVar}
            className="text-[#F8FFFF] text-center font-['Blauer_Nue'] text-[48px] sm:text-[60px] md:text-[72px] not-italic font-semibold leading-tight md:leading-[52px] mb-16"
          >
            Register Now
          </motion.h1>

          {/* Nationality Selection Card */}
          <motion.div 
            variants={itemVar}
            className="w-full max-w-[800px] flex flex-col items-center mb-16 mt-4"
          >
            {/* Selection Card */}
            <div className="w-full bg-[#EEF7F8] rounded-[16px] overflow-hidden flex flex-col shadow-2xl text-left border border-[#40C9CD]/20">
              {/* Card Header */}
              <div className="flex items-center px-[24px] py-[16px] bg-[linear-gradient(90deg,#2467A7_0%,#40C9CD_100%)]">
                <h3 className="text-white text-[16px] font-medium tracking-wide">Nationality</h3>
              </div>
              
              {/* Card Body (Radio Options) */}
              <div className="px-8 py-10 flex flex-col gap-8">
                
                {/* Option 1: Indian */}
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                    <input 
                      type="radio" 
                      name="nationality" 
                      value="indian"
                      checked={nationality === 'indian'}
                      onChange={() => setNationality('indian')}
                      className="sr-only"
                    />
                    <div className={`w-full h-full rounded-full border-[1.5px] transition-colors duration-200 flex items-center justify-center ${nationality === 'indian' ? 'border-[#CE921B]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                      {nationality === 'indian' && (
                        <motion.div 
                          layoutId="active-radio"
                          className="w-[10px] h-[10px] rounded-full bg-[#CE921B]" 
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-[#1A2E35] font-medium text-[15px]">Register as National Delegate</span>
                </label>

                {/* Option 2: International */}
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                    <input 
                      type="radio" 
                      name="nationality" 
                      value="international"
                      checked={nationality === 'international'}
                      onChange={() => setNationality('international')}
                      className="sr-only"
                    />
                    <div className={`w-full h-full rounded-full border-[1.5px] transition-colors duration-200 flex items-center justify-center ${nationality === 'international' ? 'border-[#CE921B]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                      {nationality === 'international' && (
                        <motion.div 
                          layoutId="active-radio"
                          className="w-[10px] h-[10px] rounded-full bg-[#CE921B]" 
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-[#1A2E35] font-medium text-[15px]">Register as International Delegate</span>
                </label>

              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 mt-10">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue} // Called the redirection function here
                className="group relative inline-flex justify-center items-center py-[12px] pr-[20px] pl-[24px] gap-[8px] rounded-[24px] bg-[#CE921B] hover:bg-[#E5A449] transition-all duration-300 text-white text-sm font-medium overflow-hidden shadow-[0_0_20px_rgba(206,146,27,0.2)] hover:shadow-[0_0_30px_rgba(206,146,27,0.4)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-[8px]">
                  Continue to Registration <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* --- FAQ SECTION --- */}
          <motion.div variants={itemVar} className="w-full flex justify-center mt-10">
             <FAQSection />
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;