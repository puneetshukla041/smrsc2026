'use client';
import React from 'react';

const ScheduleDay1 = () => {
  // --- PLENARY DATA ---
  const plenaryData = [
    { time: "8:50:00 AM", title: "Master of Ceremony", speaker: "-Shruti Mishra" },
    { time: "9:00:00 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava" },
    { time: "9:05:00 AM", title: "SSI Movie", speaker: "" },
    { time: "9:15:00 AM", title: "Democratization of Robotic Access with SSI Mantra Globally", speaker: "-Dr. Sudhir K Rawal" },
    { time: "9:30:00 AM", title: "Past, Present and Future of Robotic Surgery", speaker: "-Dr. Frederic Moll" },
    { time: "9:45:00 AM", title: "10,000 Robotic Surgeries with SSI Mantra - What have we learnt", speaker: "-Dr. Somashekhar SP" },
    { time: "10:00:00 AM", title: "Expanding the Tele-Surgery Horizons with the MantrAsana", speaker: "-Dr. Venkatesh Munikrishnan" },
    { time: "10:15:00 AM", title: "How Robotics led to a successful program beyond metropolitan cities", speaker: "-Dr. Magan Mehrotra" },
    { time: "10:30:00 AM", title: "International Adoption of SSI Mantra - Panel", speaker: "-Dr. Rabbie Hanna, Dr. Ivan Rizal Sini, Dr. Dudy Hanafy, Dr. Pedro Luis Maldonado Munoz, Dr. Saroj Baidya\nModerator - Dr. Sudhir Srivastava" },
    { time: "10:50:00 AM", title: "How will robotic surgery decentralize and democratize access - Key Note", speaker: "-Dr. Ashutosh Tewari" },
    { time: "11:30:00 AM", title: "Inauguration Ceremony", speaker: "-Shruti Mishra" },
    { time: "11:35:00 AM", title: "Invite Dignitaries for Lamp Lighting", speaker: "-Shruti Mishra" },
    { time: "11:45:00 AM", title: "National Anthem", speaker: "-Shruti Mishra" },
    { time: "11:50:00 AM", title: "Welcome Address", speaker: "-Dr. Sudhir Srivastava" },
    { time: "12:00:00 PM", title: "Guests of Honor", speaker: "-Sri Madhusudhan Sai" },
    { time: "12:05:00 PM", title: "Guests of Honor", speaker: "-Dr. Sangita Reddy" },
    { time: "12:10:00 PM", title: "Guests of Honor", speaker: "-Dr. Naresh Trehan" },
    { time: "12:15:00 PM", title: "Guests of Honor", speaker: "-Dr. Ashutosh Tewari" },
    { time: "12:20:00 PM", title: "Guests of Honor", speaker: "-Dr. Mylswamy Annadurai" },
    { time: "12:25:00 PM", title: "Guests of Honor", speaker: "-Dr. Frederic Moll" },
  ];

  // --- MULTI-SPECIALITY DATA ---
  const teleSurgeryScreens = [
    { time: "Screen 1", title: "Urology - Case TBD - Telesurgery with MantrAsana", speaker: "-Dr. Sudhir K Rawal", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", bgClass: "bg-[#18345C]" },
    { time: "Screen 2", title: "Gynecology - Myomectomy/Hysterectomy - Telesurgery with MantrAsana", speaker: "-Dr. Leena Mehrotra", extra: "Apex Hospital, Moradabad, UP", bgClass: "bg-[#1F4174]" },
    { time: "Screen 3", title: "Colorectal - Telesurgery with MantrAsana", speaker: "-Dr. Venkatesh Munikrishnan", extra: "Apollo Hospitals, Chennai", bgClass: "bg-[#18345C]" },
    { time: "Screen 4", title: "Robotic Thyroid/Rectum/Thoracic Esophagus/Sentient Lymph Node - Live Transmission", speaker: "-Dr. Kushal Agarwal", extra: "Aster CMI Hospital, Bengaluru, KA", bgClass: "transparent" },
  ];

  const multiSpecPresentations = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic Nipple Sparing Mastectomy", speaker: "-Dr. Somashekhar SP", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "2:30 PM to 2:40 PM", title: "Robotic Pediatric Surgery", speaker: "-Dr. Manjiri Somashekhar", extra: "Aster CMI Bangalore, Aster RV Bangalore" },
    { time: "2:50 PM to 3:00 PM", title: "Robotic General Surgery", speaker: "-Dr. Deep Goel", extra: "BLK-Max Super Speciality Hospital, Delhi" },
    { time: "3:10 PM to 3:20 PM", title: "Robotic Gynecology Surgery", speaker: "-Dr. Priya Bhave Chittawar", extra: "Her Health Hospital, Bhopal, MP" },
    { time: "3:30:00 PM", title: "Panel Discussion: Tips & Tricks, Troubleshooting", speaker: "", extra: "" },
    { time: "4:15:00 PM", title: "Adjourn", speaker: "", extra: "" },
  ];

  // --- CARDIAC DATA ---
  const cardiacSurgeryScreens = [
    { time: "Screen 1", title: "LIMA Takedown - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur", bgClass: "bg-[#18345C]" },
    { time: "Screen 2", title: "BIMA - Telesurgery with MantrAsana", speaker: "-Dr. MM Yusuf", extra: "Sri Sathya Sai Institute of Higher Medical Sciences, Puttaparthi, AP", bgClass: "bg-[#1F4174]" },
  ];

  const cardiacPresentations = [
    { time: "2:00 PM to 2:10 PM", title: "Hybrid Coronary Vascularization/ Robotic MIDCAB/ CABG off pump and on pump", speaker: "-Dr. John D Puskas- Recorded Video", extra: "Emory University Hospital Midtown, Atlanta" },
    { time: "2:30 PM to 2:40 PM", title: "How to Help Evolve Robotic Cardiac Surgery", speaker: "-Dr. Yugal Kishore Mishra", extra: "Manipal Hospital, Dwarka, Delhi" },
    { time: "2:50 PM to 3:00 PM", title: "My Evolution with Robotic Mitral Valve Surgery", speaker: "-Dr. T. Sloane Guy - Virtual", extra: "Georgia Heart Institute, Gainesville, GA, USA" },
    { time: "3:30:00 PM", title: "Panel Discussion: Tips & Tricks, Troubleshooting", speaker: "", extra: "" },
    { time: "4:15:00 PM", title: "Adjourn", speaker: "", extra: "" },
  ];

  // --- REUSABLE UI COMPONENTS ---
  const BeigeEventBar = ({ time, title, extraRight }) => (
    <div className="flex flex-col md:flex-row w-full py-2.5 px-4 md:px-6 justify-between items-start md:items-center rounded bg-[#E1C583] text-[#000] mb-5">
      <div className="flex flex-col md:flex-row w-full text-[13px] md:text-[14px] font-medium items-start md:items-center">
        <div className="w-full md:w-[150px] flex-shrink-0 font-medium md:font-normal">{time}</div>
        <div className="flex-1 font-semibold">{title}</div>
        {extraRight && (
          <div className="mt-1 md:mt-0 text-xs md:text-sm text-black/80 font-medium md:font-normal">
            {extraRight}
          </div>
        )}
      </div>
    </div>
  );

  const GoldSessionHeader = ({ title }) => (
    <div className="flex min-h-[36px] px-4 py-2 justify-center items-center w-full rounded-md bg-[#A4751E] text-white mb-5 text-[14px] font-medium text-center">
      {title}
    </div>
  );

  const ScheduleRow = ({ time, title, speaker, extra, bgClass = "transparent" }) => {
    // Determines if this is a highlighted "Screen" row or a standard text row
    const isHighlighted = bgClass !== "transparent";

    return (
      <div className={`flex flex-col md:flex-row w-full px-4 md:px-6 py-3.5 text-[13px] text-gray-200 items-start ${isHighlighted ? `${bgClass} rounded-[4px] mb-[6px]` : 'hover:bg-white/5 transition-colors'}`}>
        {/* Time / Screen Column */}
        <div className="w-full md:w-[150px] flex-shrink-0 font-normal text-[#B2B8D1] md:text-gray-300 mb-1 md:mb-0">
          {time}
        </div>
        
        {/* Title Column */}
        <div className="flex-1 pr-0 md:pr-4 font-normal text-[13.5px] text-white leading-snug mb-2 md:mb-0">
          {title}
        </div>
        
        {/* Speaker Info Column - Left aligned within a right-side container */}
        <div className="w-full md:w-[280px] lg:w-[400px] flex flex-col items-start flex-shrink-0">
          <div className="text-left whitespace-pre-line text-gray-200 font-normal">
            {speaker}
          </div>
          {extra && (
            <div className="text-left text-gray-400 text-[12px] mt-0.5 leading-snug">
              {extra}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center pb-20 pt-10 px-4 md:px-6 bg-[#030914] min-h-screen font-sans">
      <div className="w-full max-w-[1340px] flex flex-col">
        
        {/* TOP HEADER */}
        <div className="flex flex-col mb-8">
          <div className="flex justify-start items-center w-full bg-[#E1C583] text-[#000] font-semibold text-[16px] md:text-[18px] px-5 py-3 rounded-t-xl">
            April 9'th, 2026
          </div>
          <div className="bg-[#10244C] text-white font-medium text-base md:text-lg flex justify-start items-center px-[20px] py-3 w-full rounded-b-xl">
            DAY 1: AUDI 2
          </div>
        </div>

        {/* MORNING PLENARY */}
        <BeigeEventBar time="7:30:00 AM" title="Registration and Continental Breakfast" />
        <GoldSessionHeader title="Plenary Session" />
        
        <div className="flex flex-col mb-8">
          {plenaryData.map((item, index) => (
            <ScheduleRow key={`plenary-${index}`} {...item} />
          ))}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />
        
        {/* AFTERNOON: MULTI-SPECIALITY */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-300 px-4 mb-2 md:mb-5">
            1:30:00 PM
          </div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          {teleSurgeryScreens.map((item, index) => (
            <ScheduleRow key={`ms-screen-${index}`} {...item} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Presentations" />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          {multiSpecPresentations.map((item, index) => (
            <ScheduleRow key={`ms-pres-${index}`} {...item} />
          ))}
        </div>

        <BeigeEventBar time="4:30:00 PM" title="Faculty Dinner at Dr. Sudhir Srivastava House" extraRight="SSI User Group" />

        {/* AFTERNOON: CARDIAC LOUNGE */}
        <div className="bg-[#8E1616] text-white font-medium text-base md:text-[17px] flex justify-start items-center px-[20px] py-3.5 w-full rounded-md mt-4 mb-8">
          DAY 1: SUMMIT LOUNGE - CARDIAC
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[12.5px] text-gray-300 md:text-gray-300 px-4 mb-2 md:mb-5">
            1:30:00- 3:30:00 PM
          </div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Cardiac - Live Tele Surgery" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full mb-8 gap-2 relative">
          {/* Cardiac Screens */}
          <div className="flex flex-col flex-1 w-full">
             {cardiacSurgeryScreens.map((item, index) => (
               <ScheduleRow key={`cardiac-screen-${index}`} {...item} />
             ))}
          </div>
          
          {/* Cardiac Sidebar Box */}
          <div className="lg:w-[240px] bg-[#11244A] rounded-[4px] p-5 text-[13px] text-gray-300 flex flex-col justify-center min-h-[100px] mt-2 lg:mt-0 mb-[6px]">
            <div className="mb-2 leading-snug"><span className="text-white font-normal">Chairperson:</span> Dr. Husam Balkhy</div>
            <div className="leading-snug"><span className="text-white font-normal">Moderators:</span> Dr. Nitin Rajput, Dr. Harish Badami, Dr. Yugal K Mishra</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Presentations" />
          </div>
        </div>

        <div className="flex flex-col mb-10">
          {cardiacPresentations.map((item, index) => (
            <ScheduleRow key={`cardiac-pres-${index}`} {...item} />
          ))}
        </div>

        <BeigeEventBar time="4:30:00 PM" title="Faculty Dinner at Dr. Sudhir Srivastava House" extraRight="SSI User Group" />

      </div>
    </div>
  );
};

export default ScheduleDay1;