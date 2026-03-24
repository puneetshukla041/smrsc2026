'use client';
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  // --- Styles ---
  const addressStyle = {
    color: '#FFF',
    fontFamily: "'Sora', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '32px', /* 228.571% */
  };

  const linkStyle = {
    color: '#FFF',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    cursor: 'pointer',
    display: 'block', // Ensure links take up space
  };

  const bottomLinkStyle = {
    color: '#E9E9E9',
    fontFamily: "'Sora', sans-serif",
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '32px',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    color: '#E9E9E9',
    fontFamily: "'Sora', sans-serif",
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '24px', 
    marginTop: '20px',
  };

  return (
    // Replaced the massive lg:px-[270px] with standard responsive padding. 
    // Added bg-[#020617] just in case it sits outside the main layout background.
    <footer className="w-full bg-[#020617] pt-12 lg:pt-[100px] pb-[32px] border-t border-white/10 flex justify-center">
      
      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Sora:wght@300&display=swap');
      `}</style>

      {/* Inner wrapper constrains the max width and handles side margins */}
      <div className="w-full max-w-[1440px] px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-8 mx-auto flex flex-col">
        
        {/* === TOP SECTION === */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 xl:gap-12 mb-16">
          
          {/* 1. Logo Column */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <img 
              src="/logos/header.png" 
              alt="SMRSC Logo" 
              className="w-[120px] h-auto brightness-200"
            />
          </div>

          {/* 2. Address Column */}
          <div style={addressStyle} className="w-full lg:max-w-[360px] xl:max-w-[394px]">
            <p>Sudhir Srivastava Innovations Pvt. Ltd. (R&D HQ – India)</p>
            <p className="mt-2">404-405, 3rd Floor, iLabs Center, Udyog Vihar, Phase III, Gurugram, Haryana, India – 122016</p>
            <p className="mt-2 break-words">Phone: +91 8130027337 | +91 8130027785 | +91 8492010373</p>
            <p className="break-words">Email: smrsc@ssinnovations.org</p>
            <p className="break-words">Web: www.ssinnovations.com</p>
          </div>

          {/* Links Container - Swapped to a standard flex row instead of lg:contents */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap justify-start lg:justify-end gap-16 sm:gap-24 lg:gap-12 xl:gap-20 w-full lg:w-auto">
            
            {/* 3. Links Column 1 */}
            <div className="flex flex-col gap-1 min-w-[120px]">
              <Link href="/about" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                About SMRSC
              </Link>
              <Link href="/explore" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Explore Event
              </Link>
              <Link href="/visit/venue" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Venue
              </Link>
              
              {/* UPDATED: Brochure link does not redirect */}
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                style={linkStyle} 
                className="hover:text-[#E3F5F6] transition-colors cursor-default opacity-80"
                title="Coming Soon"
              >
                Brochure
              </a>
            </div>

            {/* 4. Links Column 2 */}
            <div className="flex flex-col gap-1 min-w-[120px]">
              <Link href="/media" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Media
              </Link>
              {/* UPDATED: Register Now Link */}
              <a 
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle} 
                className="hover:text-[#E3F5F6] transition-colors"
              >
                Register now
              </a>
              <Link href="/contactus" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Contact us
              </Link>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* === BOTTOM SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/SSINNOVATIONS_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E3F5F6] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
            </a>
            <a href="https://www.instagram.com/ssinnovations?igsh=cnFlMjJvdTdtMTg5" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E3F5F6] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/ssinnovationsgroup/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E3F5F6] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:smrsc@ssinnovations.org" className="text-white hover:text-[#E3F5F6] transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center">
              <Link href="/cookies" style={bottomLinkStyle} className="hover:text-white">Cookies</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="/privacy-policy" style={bottomLinkStyle} className="hover:text-white">Privacy Policy</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="/contactus" style={bottomLinkStyle} className="hover:text-white">Contact us</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="/terms-of-use" style={bottomLinkStyle} className="hover:text-white">Terms of use</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center w-full mt-4 md:mt-0">
          <p style={copyrightStyle} className="text-center">
            © Copyright SMRSC 2026 | All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;