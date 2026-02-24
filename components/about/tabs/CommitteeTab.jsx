'use client';
import React from 'react';
import Image from 'next/image';

const CommitteeTab = () => {
  const organizingCommittee = [
    {
      title: "Organizing Chairman",
      name: "Dr. Sudhir Srivastava",
      role: "Founder, Chairman and CEO SS Innovations International, Inc.",
      src: "/images/about/committe/1.webp"
    },
    {
      title: "Organizing Co-Chairperson",
      name: "Dr. Sudhir K Rawal",
      role: "Rajiv Gandhi Cancer Institute and Research Center, Delhi",
      src: "/images/about/committe/2.webp"
    },
    {
      title: "Organizing Co-Chairperson",
      name: "Dr. Somashekhar SP",
      role: "Aster DM Healthcare",
      src: "/images/about/committe/3.webp"
    },
    {
      title: "Organizing Secretary",
      name: "Dr. Vishwa Srivastava",
      role: "President & COO, SS Innovations",
      src: "/images/about/committe/4.webp"
    }
  ];

  const baseHeadingStyle = { 
    color: '#F8FFFF', 
    fontFamily: '"Blauer Nue", sans-serif', 
    fontSize: '24px', 
    fontStyle: 'normal', 
    fontWeight: 500, 
    lineHeight: '32px', 
    marginBottom: '20px', 
    textAlign: 'center' 
  };
  
  const textWrapperStyle = { marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'center' };
  const nameStyle = { color: '#FFF', fontFamily: 'Manrope, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '24px' };
  const descStyle = { color: '#FFF', fontFamily: 'Manrope, sans-serif', fontSize: '13px', fontWeight: 400, lineHeight: '18px', opacity: 0.8 };

  return (
    // 1. Applied xl:px-[270px] to lock in the exact 270px gap from the screen edges on large monitors.
    <div className="w-full animate-in fade-in duration-700 min-h-[50vh] pb-20 px-4 lg:px-10 xl:px-[270px]">
      
      {/* 2. Switched to flex + justify-between. Removed max-w-[1400px] and mx-auto.
          This forces item 1 to the far left, item 4 to the far right, and evenly spaces 2 and 3. */}
      <div className="flex flex-col xl:flex-row flex-wrap justify-between items-start w-full pt-10 gap-y-10">
        {organizingCommittee.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center w-full xl:w-auto">
            <h3 style={baseHeadingStyle} className="h-[64px] flex items-end justify-center">
              {member.title}
            </h3>
            
            {/* Image Container */}
            <div className="relative rounded-[16px] overflow-hidden shadow-lg" style={{ width: '300px', height: '301px' }}>
              <Image 
                src={member.src} 
                alt={member.name} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                unoptimized={true} 
                priority={true}
              />
            </div>

            <div style={textWrapperStyle} className="max-w-[300px]">
              <div style={nameStyle}>{member.name}</div>
              <div style={descStyle}>{member.role}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default CommitteeTab;