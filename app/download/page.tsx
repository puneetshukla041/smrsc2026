import React from 'react';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-10 text-center flex flex-col items-center gap-6 border border-gray-100">
        
        {/* Document Icon */}
        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl tracking-tight text-gray-900 font-medium">
          SMRSC 2026 Brochure
        </h1>
        
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          Dawning a New Era of Surgical Robotics. Download the complete scientific program and guide to the 3rd Global SSI Multi-Specialty Robotic Surgery Conference.
        </p>

        {/* Download Button */}
        <a 
          href="/pdf/smrscpdf.pdf" 
          download="SMRSC_2026_Brochure.pdf"
          className="mt-4 w-full bg-black text-white py-3.5 px-6 rounded-2xl text-[15px] font-medium hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>Download PDF</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        
        {/* Back Link */}
        <Link href="/" className="text-[#0066cc] text-sm mt-2 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}