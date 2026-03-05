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

  // --- DATA: National Committee ---
  const nationalCommittee = [
    { name: "Dr. Sudhir K Rawal", role: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", src: "/images/about/committe/24.webp" },
    { name: "Dr. Somashekhar SP", role: "Aster DM Healthcare", src: "/images/about/committe/25.webp" },
    { name: "Dr. Mohit Bhandari", role: "Bhandari Hospital and Research Centre, Indore", src: "/images/about/committe/26.webp" },
    { name: "Dr. Raj Gajbhiye", role: "Government Medical College, Nagpur", src: "/images/about/committe/27.webp" },
    { name: "Dr. Subhash Khanna", role: "Swagat Hospitals, Guwahati", src: "/images/about/committe/28.webp" },
    { name: "Dr. Magan Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/committe/29.webp" },
    { name: "Dr. Chandra Mohan Vaddi", role: "Preeti Urology & Kidney Hospital, Telangana, Hyderabad", src: "/images/about/committe/30.webp" },
    { name: "Dr. Venkatesh Munikrishnan", role: "Apollo Hospitals, Chennai", src: "/images/about/committe/31.webp" },
    
    // NEWLY ADDED: 8 More Members (Rows 3 & 4)
    { name: "Dr. Lalitaditya Malik", role: "Manipal Hospitals, Jaipur, RJ", src: "/images/about/committe/32.webp" },
    { name: "Dr. Harish Badami", role: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad", src: "/images/about/committe/33.webp" },
    { name: "Dr. Nitin Rajput", role: "Medanta - The Medicity, Gurugram, Haryana", src: "/images/about/committe/34.webp" },
    { name: "Dr. Ritesh Mongha", role: "Marengo Asia Hospitals, Faridabad, Haryana", src: "/images/about/committe/35.webp" },
    { name: "Dr. Priya Bhave Chittawar", role: "Her Health Hospital, Bhopal, MP", src: "/images/about/committe/36.webp" },
    { name: "Dr. Leena Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/committe/37.webp" },
    { name: "Dr. Manjiri Somashekhar", role: "Aster CMI Bangalore, Aster RV Bangalore", src: "/images/about/committe/38.webp" },
    { name: "Dr. Sanjiv Haribhakti", role: "Kaizen Hospital, Ahmedabad, GJ", src: "/images/about/committe/40.webp" },
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 font-manrope">
      
      {/* Container wrapper for centering and safe padding */}
      <div className="w-full max-w-[1380px] mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16">
        
        {/* ================= SECTION 1: TOP LEADERSHIP ================= */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-12 xl:gap-8 justify-items-center">
          
          {/* Organizing Chairman (Left) */}
          <div className="flex flex-col items-center w-full max-w-[300px]">
            <h3 className="text-[#F8FFFF] font-['Blauer_Nue'] text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-6 text-center w-full xl:min-h-[76px] flex items-end justify-center">
              Organizing Chairman
            </h3>
            <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-white/5">
              <Image src="/images/about/committe/1.webp" alt="Dr. Sudhir Srivastava" fill className="object-cover object-top" />
            </div>
            <div className="w-full mt-4 flex flex-col gap-1 text-center">
              <div className="text-white text-[16px] font-semibold leading-[24px]">Dr. Sudhir Srivastava</div>
              <div className="text-white/80 text-[12px] font-normal leading-[16px]">Founder, Chairman and CEO SS Innovations International, Inc.</div>
            </div>
          </div>

          {/* Organizing Co-Chairpersons (Center) - Spans 2 Columns */}
          <div className="flex flex-col items-center w-full xl:col-span-2">
            <h3 className="text-[#F8FFFF] font-['Blauer_Nue'] text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-6 text-center w-full xl:min-h-[76px] flex items-end justify-center">
              Organizing Co-Chairpersons
            </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 xl:gap-8 justify-items-center">
              {/* Co-Chair 1 */}
              <div className="flex flex-col items-center w-full max-w-[300px]">
                <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-white/5">
                  <Image src="/images/about/committe/2.webp" alt="Dr. Sudhir K Rawal" fill className="object-cover object-top" />
                </div>
                <div className="w-full mt-4 flex flex-col gap-1 text-center">
                  <div className="text-white text-[16px] font-semibold leading-[24px]">Dr. Sudhir K Rawal</div>
                  <div className="text-white/80 text-[12px] font-normal leading-[16px]">Rajiv Gandhi Cancer Institute and Research Center, Delhi</div>
                </div>
              </div>
              
              {/* Co-Chair 2 */}
              <div className="flex flex-col items-center w-full max-w-[300px]">
                <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-white/5">
                  <Image src="/images/about/committe/3.webp" alt="Dr. Somashekhar SP" fill className="object-cover object-top" />
                </div>
                <div className="w-full mt-4 flex flex-col gap-1 text-center">
                  <div className="text-white text-[16px] font-semibold leading-[24px]">Dr. Somashekhar SP</div>
                  <div className="text-white/80 text-[12px] font-normal leading-[16px]">Aster DM Healthcare</div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizing Secretary (Right) */}
          <div className="flex flex-col items-center w-full max-w-[300px]">
            <h3 className="text-[#F8FFFF] font-['Blauer_Nue'] text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-6 text-center w-full xl:min-h-[76px] flex items-end justify-center">
              Organizing Secretary
            </h3>
            <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-white/5">
              <Image src="/images/about/committe/4.webp" alt="Dr. Vishwa Srivastava" fill className="object-cover object-top" />
            </div>
            <div className="w-full mt-4 flex flex-col gap-1 text-center">
              <div className="text-white text-[16px] font-semibold leading-[24px]">Dr. Vishwa Srivastava</div>
              <div className="text-white/80 text-[12px] font-normal leading-[16px]">President & COO, SS Innovations</div>
            </div>
          </div>
        </div>


        {/* ================= SECTION 2: INTERNATIONAL COMMITTEE GRID ================= */}
        <div className="w-full mt-20 md:mt-24">
          <h3 className="text-[#F8FFFF] font-['Blauer_Nue'] text-[28px] md:text-[32px] font-medium leading-tight mb-10 text-center md:text-left">
            Scientific Organizing Committee International
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 justify-items-center md:justify-items-start">
            {internationalCommittee.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start w-full max-w-[305px] group">
                <div className="relative w-full aspect-[305/390] rounded-[12px] overflow-hidden drop-shadow-lg bg-white/5">
                  <Image 
                    src={member.src} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full mt-4 flex flex-col gap-1 text-center md:text-left">
                  <div className="text-white text-[16px] font-semibold leading-[24px]">{member.name}</div>
                  <div className="text-white/80 text-[12px] font-normal leading-[16px]">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 3: NATIONAL COMMITTEE GRID ================= */}
        <div className="w-full mt-20 md:mt-24">
          <h3 className="text-[#F8FFFF] font-['Blauer_Nue'] text-[28px] md:text-[32px] font-medium leading-tight mb-10 text-center md:text-left">
            Scientific Committee National
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 justify-items-center md:justify-items-start">
            {nationalCommittee.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start w-full max-w-[305px] group">
                <div className="relative w-full aspect-[305/390] rounded-[12px] overflow-hidden drop-shadow-lg bg-white/5">
                  <Image 
                    src={member.src} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full mt-4 flex flex-col gap-1 text-center md:text-left">
                  <div className="text-white text-[16px] font-semibold leading-[24px]">{member.name}</div>
                  <div className="text-white/80 text-[12px] font-normal leading-[16px]">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommitteeTab;