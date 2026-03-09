'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports ---
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/footer';

const ContactUs = () => {
  // --- Form State ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  // --- Handlers ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
        
        // Hide success message after 4 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 4000);
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to connect to the server.' });
    }
  };

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

      {/* REFACTORED: Added lg:px-16 xl:px-24 2xl:px-8 to give standard laptop margins */}
      <div className="min-h-screen w-full bg-[#020617] pt-[120px] pb-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8 flex flex-col items-center relative">
        
        {/* --- SUCCESS MODAL / TOAST --- */}
        <AnimatePresence>
          {status.success && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-[100px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#E3F5F6] text-[#020617] px-6 py-4 rounded-full shadow-[0_0_40px_rgba(227,245,246,0.3)] border border-[#2A3A3B]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-manrope font-bold text-sm md:text-base">Details submitted successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-[1280px] flex flex-col items-center gap-10 md:gap-12 mx-auto"
        >
          
          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-white text-4xl md:text-[48px] lg:text-[54px] xl:text-[64px] font-semibold font-['Blauer_Nue'] text-center"
          >
            Contact Us
          </motion.h1>

          {/* Form Container */}
          <motion.div 
            variants={fadeInUp}
            className="w-full flex flex-col items-center gap-8 md:gap-10 p-6 md:p-10 lg:p-12 rounded-[24px] md:rounded-[40px] border border-white/20 bg-transparent"
          >
            <p className="text-[#E5E5E5] text-center font-manrope text-sm md:text-base leading-relaxed max-w-[800px]">
              Please complete the following information and a member of our SMRSC Executive Team will contact with you.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-white font-manrope text-sm md:text-base font-medium">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full min-h-[150px] md:min-h-[207px] bg-white/20 rounded-[5px] px-5 py-3.5 text-white font-manrope border border-transparent focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all placeholder:text-white/50 resize-y"
                />
              </div>

              {/* Error Message Display */}
              {status.error && (
                <p className="text-red-400 font-manrope text-sm text-center">{status.error}</p>
              )}

              {/* Send Button */}
              <div className="flex justify-center mt-4">
                <button 
                  type="submit"
                  disabled={status.loading}
                  className="px-10 py-3 bg-white text-black rounded-full text-sm md:text-base font-semibold font-manrope hover:bg-gray-200 transition-colors active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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