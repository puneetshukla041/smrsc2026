import React from 'react';
import { Download, FileText, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Download Brochure | SMRSC 2026',
  description: 'Download the official brochure for the 3rd Global SSI Multi-Specialty Robotic Surgery Conference.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-center px-4 py-20 font-manrope selection:bg-[#E3F5F6] selection:text-[#020617]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E3F5F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E3F5F6] animate-pulse" />
          <span className="text-[#E3F5F6] text-sm font-medium tracking-wide uppercase">3rd Edition</span>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F8FFFF] leading-tight mb-6" style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
          Dawning a New Era of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F5F6] to-white/60">
            Surgical Robotics
          </span>
        </h1>
        
        <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mb-12 font-light">
          Get complete access to the scientific agenda, international faculty list, and the latest advancements in the SSI Mantra ecosystem.
        </p>

        {/* Event Details Card */}
        <div className="w-full max-w-xl bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#E3F5F6]">
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-lg font-medium">9-11 April, 2026</p>
                <p className="text-white/50 text-sm">3 Days of Innovation</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-16 bg-white/10" />

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#E3F5F6]">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white text-lg font-medium">Bharat Mandapam</p>
                <p className="text-white/50 text-sm">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <a 
            href="/pdf/smrscpdf.pdf" 
            download="SMRSC_2026_Brochure.pdf"
            className="group relative w-full flex items-center justify-center gap-3 bg-[#E3F5F6] text-[#020617] px-8 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <FileText size={22} className="relative z-10" />
            <span className="relative z-10">Download Official Brochure</span>
            <Download size={20} className="relative z-10 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          
          <p className="text-white/40 text-sm mt-6 text-center">
            PDF Document 
          </p>
        </div>

        {/* Footer Link */}
        <Link href="/" className="text-[#E3F5F6]/70 hover:text-[#E3F5F6] transition-colors text-sm font-medium flex items-center gap-2">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
}