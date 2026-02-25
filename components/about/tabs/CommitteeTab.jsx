'use client';
import React from 'react';
import Image from 'next/image';

const CommitteeTab = () => {

  // --- DATA: International Committee (per5 - per20) ---
  const internationalCommittee = [
    { name: "Dr. Mani Menon", role: "Vattikuti Urology Institute, Detroit, MI, USA", src: "/images/about/committe/5.webp" },
    { name: "Dr. Ashutosh K. Tewari", role: "Icahn School of Medicine at Mount Sinai, NY, USA", src: "/images/about/committe/6.webp" },
    { name: "Dr. Vipul Patel", role: "Global Robotics Institute, Orlando, FL, USA", src: "/images/about/committe/7.webp" },
    { name: "Dr. Pier C. Giulianotti", role: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", src: "/images/about/committe/8.webp" },
    { name: "Dr. Dudy Hanafy", role: "Harapan Kita Hospital, Jakarta, Indonesia", src: "/images/about/committe/9.webp" },
    { name: "Dr. Pedro Luis Maldonado Munoz", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/10.webp" },
    { name: "Dr. Ashok K. Hemal", role: "Wake Forest Medical School & Baptist Medical Center, NC, USA", src: "/images/about/committe/11.webp" },
    { name: "Dr. Husam Balkhy", role: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", src: "/images/about/committe/12.webp" },
    { name: "Dr. T Sloane Guy", role: "Georgia Heart Institute, Gainesville, GA, USA", src: "/images/about/committe/13.webp" },
    { name: "Dr. Gianluca Torregrossa", role: "Lankenau Heart Institute, Philadelphia, PA, USA", src: "/images/about/committe/14.webp" },
    { name: "Dr. Frank Van Praet", role: "OLV Clinic, Aalst, Belgium", src: "/images/about/committe/15.webp" },
    { name: "Dr John D Puskas", role: "Emory University Hospital Midtown, Atlanta", src: "/images/about/committe/16.webp" },
    { name: "Dr. Bob Kiaii", role: "Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary", src: "/images/about/committe/17.webp" },
    { name: "Dr. Max Gubitz Scheibe", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/18.webp" },
    { name: "Dr. Marcos Lenin Zambrano Avellan", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/19.webp" },
    { name: "Dr. Ivan Rizal Sini", role: "Bunda Group Hospitals, Jakarta, Indonesia", src: "/images/about/committe/20.webp" },
  ];

  // --- STYLES ---

  // 1. Headings
  const baseHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '40px',
    marginBottom: '24px', 
    textAlign: 'left',
  };

  const chairmanHeadingStyle = { ...baseHeadingStyle, width: '330px' };
  const coChairHeadingStyle = { ...baseHeadingStyle, width: '435px', whiteSpace: 'nowrap' };
  const secretaryHeadingStyle = { ...baseHeadingStyle, width: '330px' };
  
  const internationalHeadingStyle = {
    ...baseHeadingStyle,
    width: '100%', 
    marginTop: '100px', 
    marginBottom: '60px'
  };

  // 2. Image Containers
  // Top Section (Standard)
  const topImageStyle = {
    position: 'relative',
    borderRadius: '12px', 
    overflow: 'hidden',
    width: '305px', 
    height: '390px',
  };

  // Grid Section (Now matches Top Section Size)
  const gridImageStyle = {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '305px',   // UPDATED: Matches top images
    height: '390px',  // UPDATED: Matches top images
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', 
  };

  // 3. Text Styles
  const textWrapperStyle = {
    width: '305px', 
    marginTop: '16px', 
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };

  const nameStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px', 
  };

  const descStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px', 
    opacity: 0.8
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* ================= SECTION 1: TOP LEADERSHIP ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px] flex flex-col xl:flex-row items-start justify-between gap-12 xl:gap-8">
        
        {/* Organizing Chairman */}
        <div className="flex flex-col items-center flex-1">
          <h3 style={chairmanHeadingStyle}>Organizing Chairman</h3>
          <div style={topImageStyle}>
            <Image src="/images/about/committe/1.webp" alt="Dr. Sudhir Srivastava" fill className="object-contain" />
          </div>
          <div style={textWrapperStyle}>
            <div style={nameStyle}>Dr. Sudhir Srivastava</div>
            <div style={descStyle}>Founder, Chairman and CEO SS Innovations, INDIA</div>
          </div>
        </div>

        {/* Organizing Co-Chairpersons */}
        <div className="flex flex-col items-center flex-[1.5]">
          <h3 style={coChairHeadingStyle}>Organizing Co-Chairpersons</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col">
              <div style={topImageStyle}>
                <Image src="/images/about/committe/2.webp" alt="Dr. Sudhir K Rawal" fill className="object-contain" />
              </div>
              <div style={textWrapperStyle}>
                <div style={nameStyle}>Dr. Sudhir K Rawal</div>
                <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div style={topImageStyle}>
                <Image src="/images/about/committe/3.webp" alt="Dr. S.P. Somashekhar" fill className="object-contain" />
              </div>
              <div style={textWrapperStyle}>
                <div style={nameStyle}>Dr. S.P. Somashekhar</div>
                <div style={descStyle}>Aster CMI Hospital, Bangalore</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizing Secretary */}
        <div className="flex flex-col items-center flex-1">
          <h3 style={secretaryHeadingStyle}>Organizing Secretary</h3>
          <div style={topImageStyle}>
            <Image src="/images/about/committe/4.webp" alt="Dr. Minu Bajpai" fill className="object-contain" />
          </div>
          <div style={textWrapperStyle}>
            <div style={nameStyle}>Dr. Minu Bajpai</div>
            <div style={descStyle}>VMMC & Safdarjung Hospital, New Delhi</div>
          </div>
        </div>

      </div>

      {/* ================= SECTION 2: INTERNATIONAL COMMITTEE GRID ================= */}
      <div className="w-full px-6 xl:px-0">
        <h3 style={internationalHeadingStyle}>Scientific Organizing Committee International</h3>
        
        {/* Grid layout with uniform spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-[60px]">
          {internationalCommittee.map((member, idx) => (
            <div key={idx} className="flex flex-col items-start">
              
              {/* Image Container (Now 305px x 390px) */}
              <div style={gridImageStyle}>
                <Image 
                  src={member.src} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content (Width matched to 305px) */}
              <div style={textWrapperStyle}>
                <div style={nameStyle}>{member.name}</div>
                <div style={descStyle}>{member.role}</div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default CommitteeTab;