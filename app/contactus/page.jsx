'use client';
import React from 'react';
import { motion } from 'framer-motion';

// --- Imports ---
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

const ContactUs = () => {
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen w-full bg-[#020617] pt-[120px] pb-20 px-4 md:px-8 flex flex-col items-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-[1280px] flex flex-col items-center gap-10 md:gap-12 mx-auto"
        >
          
          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-white text-4xl md:text-[48px] lg:text-[64px] font-semibold font-['Blauer_Nue'] text-center"
          >
            Contact Us
          </motion.h1>

          {/* Form Container */}
          <motion.div 
            variants={fadeInUp}
            className="w-full flex flex-col items-center gap-8 md:gap-10 p-6 md:p-12 rounded-[24px] md:rounded-[40px] border border-white/20 bg-transparent"
          >
            {/* Instruction Text */}
            <p className="text-[#E5E5E5] text-center font-manrope text-sm md:text-base leading-relaxed max-w-[800px]">
              Please complete the following information and a member of our SMRSC Executive Team will contact with you.
            </p>

            <form className="flex flex-col gap-6 w-full">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-white font-manrope text-sm md:text-base font-medium">
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-white/20 rounded-[5px] px-5 py-3.5 text-white font-manrope border border-transparent focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all placeholder:text-white/50"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-white font-manrope text-sm md:text-base font-medium">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full bg-white/20 rounded-[5px] px-5 py-3.5 text-white font-manrope border border-transparent focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all placeholder:text-white/50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-white font-manrope text-sm md:text-base font-medium">
                  Message
                </label>
                <textarea 
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full min-h-[150px] md:min-h-[207px] bg-white/20 rounded-[5px] px-5 py-3.5 text-white font-manrope border border-transparent focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all placeholder:text-white/50 resize-y"
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-center mt-4">
                <button 
                  type="button"
                  className="px-10 py-3 bg-white text-black rounded-full text-sm md:text-base font-semibold font-manrope hover:bg-gray-200 transition-colors active:scale-95"
                >
                  Send Message
                </button>
              </div>

            </form>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div 
            variants={fadeInUp}
            className="w-full flex flex-col gap-6 mt-4"
          >
            <h2 className="text-white text-2xl md:text-[32px] font-medium font-['Blauer_Nue'] px-2">
              Get in touch
            </h2>

            <div className="w-full p-6 md:p-8 rounded-[20px] border border-white/20 bg-transparent flex flex-col md:flex-row gap-6 md:items-center justify-between">
              
              <div className="flex flex-col gap-3 text-[#E3F5F6] font-manrope text-sm md:text-base leading-relaxed opacity-90 w-full">
                <p className="font-semibold text-white text-base md:text-lg">
                  Sudhir Srivastava Innovations Pvt. Ltd. (R&D HQ – India)
                </p>
                
                <p className="max-w-[600px]">
                  404-405, 3rd Floor, iLabs Center, Udyog Vihar, Phase III, Gurugram, Haryana, India – 122016
                </p>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <p>
                    <span className="font-medium text-white">Phone:</span> +91 8130027337, +91 8130027785, 81300 27785, +91 8492010373
                  </p>
                  <p>
                    <span className="font-medium text-white">Email:</span> <a href="mailto:smrsc@ssinnovations.org" className="hover:text-white underline decoration-white/30 transition-colors">smrsc@ssinnovations.org</a>
                  </p>
                  <p>
                    <span className="font-medium text-white">Web:</span> <a href="https://www.ssinnovations.com" target="_blank" rel="noreferrer" className="hover:text-white underline decoration-white/30 transition-colors">www.ssinnovations.com</a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;