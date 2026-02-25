'use client';
import React from 'react';
import Image from 'next/image';

const CommitteeTab = () => {

  // --- DATA: International Committee ---
  const internationalCommittee = [
    // Top 8 (1st and 2nd Rows)
    { name: "Dr. Mani Menon", role: "Vattikuti Urology Institute, Detroit, MI, USA", src: "/images/about/committe/5.webp" },
    { name: "Dr. Ashutosh K. Tewari", role: "Icahn School of Medicine at Mount Sinai, NY, USA", src: "/images/about/committe/6.webp" },
    { name: "Dr. Vipul Patel", role: "Global Robotics Institute, Orlando, FL, USA", src: "/images/about/committe/7.webp" },
    { name: "Dr. Pier C. Giulianotti", role: "The University of Chicago Medicine and Biological Sciences Chicago,Chicago, IL, USA", src: "/images/about/committe/8.webp" },
    { name: "Dr. Ashok K.Hemal", role: "Wake Forest Medical School & Baptist Medical Center, NC, USA", src: "/images/about/committe/9.webp" },
    { name: "Dr. Husam Balkhy", role: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", src: "/images/about/committe/10.webp" },
    { name: "Dr. T Sloane Guy", role: "Georgia Heart Institute, Gainesville, GA, USA", src: "/images/about/committe/11.webp" },
    { name: "Dr. Gianluca Torregrossa", role: "Lankenau Heart Institute, Philadelphia, PA, USA", src: "/images/about/committe/12.webp" },
    
    // Next 8 (3rd and 4th Rows)
    { name: "Dr. Frank Van Praet", role: "OLV Clinic, Aalst, Belgium", src: "/images/about/committe/13.webp" },
    { name: "Dr John D Puskas", role: "Emory University Hospital Midtown, Atlanta", src: "/images/about/committe/14.webp" },
    { name: "Dr. Bob Kiaii", role: "Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary", src: "/images/about/committe/15.webp" },
    { name: "Dr. Max Gubitz Scheibe", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/16.webp" },
    { name: "Dr. Dudy Hanafy", role: "Harapan Kita Hospital, Jakarta, Indonesia", src: "/images/about/committe/17.webp" },
    { name: "Dr. Pedro Luis Maldonado Munoz", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/18.webp" },
    { name: "Dr. Marcos Lenin Zambrano Avellan", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/19.webp" },
    { name: "Dr. Ivan Rizal Sini", role: "Bunda Group Hospitals, Jakarta, Indonesia", src: "/images/about/committe/20.webp" },

    // Last 4 Members (5th Row)
    { name: "Dr. Dieter Broering", role: "King Faisal Specialist Hospital and Research Centre, Riyadh, Saudi Arabia", src: "/images/about/committe/21.webp" },
    { name: "Dr. Constantino Castillo", role: "St. Luke's Medical Center, Philippines", src: "/images/about/committe/22.webp" },
    { name: "Dr. Rabbie Hanna", role: "Warith International Cancer Institute, Karbala, Iraq", src: "/images/about/committe/23.webp" },
    { name: "Dr. Niraj Baidya", role: "B&B Hospital, Gwarko, Nepal", src: "/images/about/committe/39.webp" },
  ];

  // --- DATA: National Committee (UPDATED: 24 - 39) ---
  const nationalCommittee = [
    { name: "Dr. Sudhir K Rawal", role: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", src: "/images/about/committe/24.webp" },
    { name: "Dr. Somashekhar SP", role: "Aster DM Healthcare", src: "/images/about/committe/25.webp" },
    { name: "Dr. Mohit Bhandari", role: "Bhandari Hospital and Research Centre, Indore", src: "/images/about/committe/26.webp" },
    { name: "Dr. Raj Gajbhiye", role: "Government Medical College, Nagpur", src: "/images/about/committe/27.webp" },
    { name: "Dr. Subhash Khanna", role: "Swagat Hospitals, Guwahati", src: "/images/about/committe/28.webp" },
    { name: "Dr. Magan Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/committe/29.webp" },
    { name: "Dr. Chandra Mohan Vaddi", role: "Preeti Urology & Kidney Hospital, Telangana, Hyderabad", src: "/images/about/committe/30.webp" },
    { name: "Dr. Venkatesh Munikrishnan", role: "Apollo Hospitals, Chennai", src: "/images/about/committe/31.webp" },
    
    // === NEWLY ADDED: 8 More Members (Rows 3 & 4) ===
    { name: "Dr. Lalitaditya Malik", role: "Manipal Hospitals, Jaipur, RJ", src: "/images/about/committe/32.webp" },
    { name: "Dr. Harish Badami", role: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad", src: "/images/about/committe/33.webp" },
    { name: "Dr. Nitin Rajput", role: "Medanta - The Medicity, Gurugram, Haryana", src: "/images/about/committe/34.webp" },
    { name: "Dr. Ritesh Mongha", role: "Marengo Asia Hospitals, Faridabad, Haryana", src: "/images/about/committe/35.webp" },
    { name: "Dr. Priya Bhave Chittawar", role: "Her Health Hospital, Bhopal, MP", src: "/images/about/committe/36.webp" },
    { name: "Dr. Leena Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/committe/37.webp" },
    { name: "Dr. Manjiri Somashekhar", role: "Aster CMI Bangalore, Aster RV Bangalore", src: "/images/about/committe/38.webp" },
    { name: "Dr. Sanjiv Haribhakti", role: "Kaizen Hospital, Ahmedabad, GJ", src: "/images/about/committe/40.webp" },
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
  
  const sectionHeadingStyle = {
    ...baseHeadingStyle,
    width: '100%', 
    marginTop: '100px', 
    marginBottom: '60px'
  };

  // 2. Image Containers
  // Top Section
  const topImageStyle = {
    position: 'relative',
    borderRadius: '12px', 
    overflow: 'hidden',
    width: '305px', 
    height: '390px',
  };

  // Grid Section 
  const gridImageStyle = {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '305px',   
    height: '390px',  
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
            <div style={descStyle}>Founder, Chairman and CEO SS Innovations International, Inc.</div>
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
                <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center, Delhi</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div style={topImageStyle}>
                <Image src="/images/about/committe/3.webp" alt="Dr. Somashekhar SP" fill className="object-contain" />
              </div>
              <div style={textWrapperStyle}>
                <div style={nameStyle}>Dr. Somashekhar SP</div>
                <div style={descStyle}>Aster DM Healthcare</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizing Secretary */}
        <div className="flex flex-col items-center flex-1">
          <h3 style={secretaryHeadingStyle}>Organizing Secretary</h3>
          <div style={topImageStyle}>
            <Image src="/images/about/committe/4.webp" alt="Dr. Vishwa Srivastava" fill className="object-contain" />
          </div>
          <div style={textWrapperStyle}>
            <div style={nameStyle}>Dr. Vishwa Srivastava</div>
            <div style={descStyle}>President & COO, SS Innovations</div>
          </div>
        </div>

      </div>

      {/* ================= SECTION 2: INTERNATIONAL COMMITTEE GRID ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px]">
        <h3 style={sectionHeadingStyle}>Scientific Organizing Committee International</h3>
        
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-12 gap-x-6 xl:gap-x-0">
          {internationalCommittee.map((member, idx) => (
            <div key={idx} className="flex flex-col items-start">
              
              <div style={gridImageStyle}>
                {/* REMOVED: hover:scale-105 transition-transform duration-500 */}
                <Image 
                  src={member.src} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top"
                />
              </div>

              <div style={textWrapperStyle}>
                <div style={nameStyle}>{member.name}</div>
                <div style={descStyle}>{member.role}</div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 3: NATIONAL COMMITTEE GRID ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px]">
        <h3 style={sectionHeadingStyle}>Scientific Committee National</h3>
        
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-12 gap-x-6 xl:gap-x-0">
          {nationalCommittee.map((member, idx) => (
            <div key={idx} className="flex flex-col items-start">
              
              <div style={gridImageStyle}>
                {/* REMOVED: hover:scale-105 transition-transform duration-500 */}
                <Image 
                  src={member.src} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top"
                />
              </div>

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