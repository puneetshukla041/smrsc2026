'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/footer';

const TermsOfUse = () => {
  const terms = [
    {
      id: "01",
      title: "Acceptance of Terms",
      content: "By accessing or using the SMRSC 2026 website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      id: "02",
      title: "Registration & Access",
      content: "Conference registration is personal and non-transferable unless explicitly authorized by the organizing committee. You are responsible for maintaining the confidentiality of any login credentials and for all activities that occur under your account."
    },
    {
      id: "03",
      title: "Intellectual Property",
      content: "The content, logos, graphics, and surgical session recordings displayed on this site are the intellectual property of SMRSC and SS Innovations. No material from this site may be copied, reproduced, or distributed without prior written consent."
    },
    {
      id: "04",
      title: "User Conduct",
      content: "Users agree not to use the site for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the site in any way that could damage, disable, or impair the website or interfere with any other party's use of the site."
    },
    {
      id: "05",
      title: "Cancellations & Refunds",
      content: "Details regarding registration cancellations and refund eligibility are subject to the specific policy outlined in the registration portal. Generally, request for refunds must be submitted in writing by the specified deadline."
    },
    {
      id: "06",
      title: "Limitation of Liability",
      content: "SMRSC and its affiliates shall not be held liable for any damages arising out of the use or inability to use the materials on this website, even if SMRSC has been notified of the possibility of such damage."
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
            className="mb-20"
          >
            <h1 
              className="text-white text-5xl md:text-6xl font-light tracking-tight mb-6"
              style={{ fontFamily: '"Blauer Nue", sans-serif' }}
            >
              Terms of Use
            </h1>
            <div className="h-1 w-20 bg-[#CE921B] rounded-full mb-8"></div>
            <p className="text-white/40 text-sm tracking-[0.2em] uppercase font-medium">
              Effective Date: February 25, 2026
            </p>
          </motion.div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 gap-16">
            {terms.map((term, index) => (
              <motion.section 
                key={term.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16 border-l border-white/10"
              >
                {/* Number Indicator */}
                <span className="absolute left-0 top-0 -translate-x-1/2 bg-[#02091A] py-1 text-[#CE921B] font-mono text-sm">
                  {term.id}
                </span>

                <h2 
                  className="text-white text-2xl font-medium mb-4 tracking-tight"
                  style={{ fontFamily: '"Blauer Nue", sans-serif' }}
                >
                  {term.title}
                </h2>
                <p 
                  className="text-white/60 leading-relaxed font-light text-lg"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {term.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Final Clause Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-32 p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.08]"
          >
            <h3 className="text-white text-xl mb-4 font-medium">Governing Law</h3>
            <p className="text-white/50 font-light leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default TermsOfUse;