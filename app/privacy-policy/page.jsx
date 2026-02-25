'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to SMRSC 2026. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website and register for the conference."
    },
    {
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when registering for the conference. This includes name, email address, professional affiliation, and payment information processed through secure third-party gateways."
    },
    {
      title: "How We Use Your Information",
      content: "Your information is used to manage your registration, provide conference updates, process payments, and improve your overall experience. we do not sell or share your personal data with third parties for marketing purposes."
    },
    {
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted and transmitted via Secure Socket Layer (SSL) technology."
    },
    {
      title: "Cookies",
      content: "We use cookies to understand and save your preferences for future visits. You can choose to turn off cookies through your browser settings, though some features of the site may not function properly."
    },
    {
      title: "Contact Us",
      content: "If you have any questions regarding this privacy policy, you may contact our support team through the Contact Us page."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#02091A' }}>
      <Header />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 border-b border-white/10 pb-10"
          >
            <h1 
              className="text-white text-4xl md:text-5xl font-light tracking-tight mb-4"
              style={{ fontFamily: '"Blauer Nue", sans-serif' }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm tracking-widest uppercase font-medium">
              Last Updated: February 2026
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <h2 
                  className="text-[#CE921B] text-xl font-medium mb-4 tracking-wide"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {section.title}
                </h2>
                <div 
                  className="text-white/70 leading-relaxed font-light text-lg space-y-4"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Apple Studio Style Disclaimer Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl"
          >
            <p className="text-white/50 text-sm italic font-light leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. SMRSC reserves the right to update this policy at any time to reflect changes in our practices or for legal reasons.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;