'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react'; 
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

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
      question: "Is reimbursement available for international surgeons?",
      answer: "International surgeons are be eligible for reimbursement of up to USD 5,000, covering travel and accommodation expenses. Reimbursements are subject to prior approval by the organizing committee and submission of valid supporting documentation in accordance with event policy guidelines."
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

const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVar = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
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

      <main className="flex-grow flex flex-col items-center pt-32 px-4 sm:px-6 relative z-10 w-full">
        
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full max-w-5xl"
        >
          {/* Registration Title */}
          <motion.h1 
            variants={itemVar}
            className="text-white font-semibold text-5xl sm:text-6xl md:text-[72px] tracking-tight mb-16"
          >
           Register Now
          </motion.h1>

          {/* Pricing Tables Container */}
          <motion.div variants={itemVar} className="w-full flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
            
            {/* Indian Delegates Card */}
            <div className="flex-1 bg-[#091124] rounded-[20px] overflow-hidden border border-[#23355A] shadow-xl text-left">
              <div className="bg-gradient-to-r from-[#3269B8] to-[#40C9CD] px-6 py-5">
                <h3 className="text-white text-[17px] font-medium tracking-wide">Indian Delegates Registration (INR)</h3>
              </div>
              <div className="px-6 pb-2">
                <div className="flex justify-between items-center py-5 border-b border-[#1E2E4E] text-white text-[15px]">
                  <span className="opacity-90">Surgeons</span>
                  <span className="font-medium">Rs. 5000.00</span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-[#1E2E4E] text-white text-[15px]">
                  <span className="opacity-90">Students</span>
                  <span className="font-medium">Rs. 1000.00</span>
                </div>
                <div className="flex justify-between items-center py-5 text-white text-[15px]">
                  <span className="opacity-90">Medical staff</span>
                  <span className="font-medium">Rs. 1000.00</span>
                </div>
              </div>
            </div>

            {/* International Delegates Card */}
            <div className="flex-1 bg-[#091124] rounded-[20px] overflow-hidden border border-[#23355A] shadow-xl text-left">
              <div className="bg-gradient-to-r from-[#3269B8] to-[#40C9CD] px-6 py-5">
                <h3 className="text-white text-[17px] font-medium tracking-wide">International Delegates Registration (USD)</h3>
              </div>
              <div className="px-6 pb-2">
                <div className="flex justify-between items-center py-5 border-b border-[#1E2E4E] text-white text-[15px]">
                  <span className="opacity-90">Surgeons</span>
                  <span className="font-medium">$ 5000.00</span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-[#1E2E4E] text-white text-[15px]">
                  <span className="opacity-90">Students</span>
                  <span className="font-medium">$ 1000.00</span>
                </div>
                <div className="flex justify-between items-center py-5 text-white text-[15px]">
                  <span className="opacity-90">Medical staff</span>
                  <span className="font-medium">$ 1000.00</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Continue Button */}
          <motion.button 
            variants={itemVar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D1923A] hover:bg-[#E5A449] transition-colors text-white text-sm font-medium px-8 py-3 rounded-full flex items-center gap-2 mb-10"
          >
            Continue <ArrowRight size={16} strokeWidth={2.5} />
          </motion.button>

          {/* --- FAQ SECTION --- */}
          <motion.div variants={itemVar} className="w-full flex justify-center">
             <FAQSection />
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;