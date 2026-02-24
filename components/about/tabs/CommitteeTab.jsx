'use client';
import React from 'react';
import Image from 'next/image';

const CommitteeTab = () => {
  // Data for the top organizing committee based on the image provided
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
    <div className="w-full animate-in fade-in duration-700 min-h-[50vh] pb-20 px-4 md:px-10">
      
      {/* Organizing Committee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start justify-center max-w-[1400px] mx-auto pt-10">
        {organizingCommittee.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <h3 style={baseHeadingStyle} className="h-[64px] flex items-end justify-center">
              {member.title}
            </h3>
            
            {/* Image Container with fixed 300x301 dimensions */}
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