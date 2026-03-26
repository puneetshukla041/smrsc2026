import React from 'react';
import { Download, FileText, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Download Brochure | SMRSC 2026',
  description: 'Download the official brochure for the 3rd Global SSI Multi-Specialty Robotic Surgery Conference.',
};

export default function DownloadPage() {
  return (
    // Added overflow-hidden to prevent the background blur from causing horizontal scrolling on mobile
    <div className="relative min-h-screen w-full bg-[#020617] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20 font-manrope selection:bg-[#E3F5F6] selection:text-[#020617]">
      
      {/* Background ambient glow - Scaled down for mobile to prevent performance issues */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E3F5F6]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#E3F5F6] animate-pulse" />
          <span className="text-[#E3F5F6] text-xs md:text-sm font-medium tracking-wide uppercase">3rd Edition</span>
        </div>

        {/* Main Headings - Fluid typography scaling */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F8FFFF] leading-tight mb-4 md:mb-6" style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
          Dawning a New Era of <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F5F6] to-white/60">
            Surgical Robotics
          </span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-xl md:max-w-2xl mb-8 md:mb-12 font-light">
          Get complete access to the scientific agenda, international faculty list, and the latest advancements in the SSI Mantra ecosystem.
        </p>

        {/* Event Details Card - Adjusted mobile paddings */}
        <div className="w-full max-w-full sm:max-w-lg md:max-w-xl bg-white/[0.03] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 backdrop-blur-xl mb-10 md:mb-12 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-8 md:mb-10 w-full">
            
            {/* Date */}
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-3 w-full md:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-[#E3F5F6]">
                <Calendar size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-base md:text-lg font-medium">9-11 April, 2026</p>
                <p className="text-white/50 text-xs md:text-sm">3 Days of Innovation</p>
              </div>
            </div>

            {/* Responsive Divider: Horizontal on mobile, Vertical on desktop */}
            <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-white/10" />

            {/* Location */}
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-3 w-full md:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-[#E3F5F6]">
                <MapPin size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-base md:text-lg font-medium">Bharat Mandapam</p>
                <p className="text-white/50 text-xs md:text-sm">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <a 
            href="/pdf/smrscpdf.pdf" 
            download="SMRSC_2026_Brochure.pdf"
            className="group relative w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-[#E3F5F6] text-[#020617] px-6 py-4 md:px-8 md:py-5 rounded-2xl sm:rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden sm:block" />
            
            <div className="flex items-center gap-2 z-10">
              <FileText size={20} className="md:w-[22px] md:h-[22px]" />
              <span className="text-center">Download Official Brochure</span>
            </div>
            
            <Download size={18} className="z-10 sm:ml-1 group-hover:translate-y-1 transition-transform duration-300 md:w-[20px] md:h-[20px] hidden sm:block" />
          </a>
          
          <p className="text-white/40 text-xs md:text-sm mt-5 md:mt-6 text-center">
            PDF Document • Secure Download
          </p>
        </div>

        {/* Footer Link */}
        <Link href="/" className="text-[#E3F5F6]/70 hover:text-[#E3F5F6] transition-colors text-xs md:text-sm font-medium flex items-center gap-2">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
}