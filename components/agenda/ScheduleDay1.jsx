'use client';
import React from 'react';

const ScheduleDay1 = () => {
  // --- PLENARY DATA (SHUFFLED WRONG) ---
  const plenaryData = [
    { time: "12:15:00 PM", title: "SSI Movie", speaker: "-Dr. Sangita Reddy" },
    { time: "10:30:00 AM", title: "Guests of Honor", speaker: "-Shruti Mishra" },
    { time: "9:15:00 AM", title: "National Anthem", speaker: "-Dr. Vishwa Srivastava" },
    { time: "11:50:00 AM", title: "Democratization of Robotic Access", speaker: "-Dr. Frederic Moll" },
    { time: "8:50:00 AM", title: "Invite Dignitaries for Lamp Lighting", speaker: "-Dr. Somashekhar SP" },
    { time: "12:25:00 PM", title: "Welcome Address", speaker: "-Dr. Venkatesh Munikrishnan" },
    { time: "9:45:00 AM", title: "Master of Ceremony", speaker: "-Dr. Magan Mehrotra" },
    { time: "11:35:00 AM", title: "Past, Present and Future of Robotic Surgery", speaker: "-Dr. Rabbie Hanna, Dr. Ivan Rizal Sini" },
    { time: "10:00:00 AM", title: "Guests of Honor", speaker: "-Dr. Ashutosh Tewari" },
    { time: "9:00:00 AM", title: "10,000 Robotic Surgeries - What have we learnt", speaker: "-Shruti Mishra" },
    { time: "12:05:00 PM", title: "How Robotics led to a successful program", speaker: "-Dr. Sudhir Srivastava" },
    { time: "10:50:00 AM", title: "Inauguration Ceremony", speaker: "-Sri Madhusudhan Sai" },
    { time: "9:30:00 AM", title: "Guests of Honor", speaker: "-Shruti Mishra" },
    { time: "11:45:00 AM", title: "International Adoption of SSI Mantra - Panel", speaker: "-Dr. Naresh Trehan" },
    { time: "12:20:00 PM", title: "Guests of Honor", speaker: "-Dr. Ashutosh Tewari" },
    { time: "9:05:00 AM", title: "How will robotic surgery decentralize access", speaker: "-Dr. Mylswamy Annadurai" },
    { time: "11:30:00 AM", title: "Guests of Honor", speaker: "-Dr. Frederic Moll" },
    { time: "12:10:00 PM", title: "Welcome Address", speaker: "-Dr. Sudhir K Rawal" },
    { time: "10:15:00 AM", title: "Master of Ceremony", speaker: "-Shruti Mishra" },
    { time: "12:00:00 PM", title: "SSI Movie", speaker: "-Dr. Vishwa Srivastava" },
  ];

  // --- MULTI-SPECIALITY DATA (SHUFFLED WRONG) ---
  const teleSurgeryScreens = [
    { time: "Screen 3", title: "Robotic Thyroid/Rectum/Thoracic Esophagus", speaker: "-Dr. Leena Mehrotra", extra: "Apollo Hospitals, Chennai", bgClass: "transparent" },
    { time: "Screen 4", title: "Urology - Case TBD", speaker: "-Dr. Kushal Agarwal", extra: "Rajiv Gandhi Cancer Institute", bgClass: "bg-[#18345C]" },
    { time: "Screen 1", title: "Colorectal - Telesurgery", speaker: "-Dr. Sudhir K Rawal", extra: "Aster CMI Hospital, Bengaluru, KA", bgClass: "bg-[#1F4174]" },
    { time: "Screen 2", title: "Gynecology - Myomectomy/Hysterectomy", speaker: "-Dr. Venkatesh Munikrishnan", extra: "Apex Hospital, Moradabad, UP", bgClass: "bg-[#18345C]" },
  ];

  const multiSpecPresentations = [
    { time: "4:15:00 PM", title: "Robotic Pediatric Surgery", speaker: "-Dr. Deep Goel", extra: "Her Health Hospital, Bhopal, MP" },
    { time: "2:50 PM to 3:00 PM", title: "Adjourn", speaker: "-Dr. Priya Bhave Chittawar", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "2:00 PM to 2:10 PM", title: "Panel Discussion: Tips & Tricks", speaker: "-Dr. Manjiri Somashekhar", extra: "" },
    { time: "3:30:00 PM", title: "Robotic Gynecology Surgery", speaker: "", extra: "BLK-Max Super Speciality Hospital, Delhi" },
    { time: "2:30 PM to 2:40 PM", title: "Robotic Nipple Sparing Mastectomy", speaker: "", extra: "Aster CMI Bangalore" },
    { time: "3:10 PM to 3:20 PM", title: "Robotic General Surgery", speaker: "-Dr. Somashekhar SP", extra: "" },
  ];

  // --- CARDIAC DATA (SHUFFLED WRONG) ---
  const cardiacSurgeryScreens = [
    { time: "Screen 2", title: "LIMA Takedown - Telesurgery", speaker: "-Dr. MM Yusuf", extra: "Manipal Hospital, Jaipur", bgClass: "transparent" },
    { time: "Screen 1", title: "BIMA - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Sri Sathya Sai Institute", bgClass: "bg-[#1F4174]" },
  ];

  const cardiacPresentations = [
    { time: "4:15:00 PM", title: "My Evolution with Robotic Mitral Valve Surgery", speaker: "-Dr. John D Puskas- Recorded Video", extra: "Manipal Hospital, Dwarka, Delhi" },
    { time: "2:50 PM to 3:00 PM", title: "Panel Discussion: Tips & Tricks", speaker: "-Dr. Yugal Kishore Mishra", extra: "" },
    { time: "2:00 PM to 2:10 PM", title: "Adjourn", speaker: "-Dr. T. Sloane Guy - Virtual", extra: "Emory University Hospital Midtown" },
    { time: "3:30:00 PM", title: "Hybrid Coronary Vascularization", speaker: "", extra: "Georgia Heart Institute, Gainesville" },
    { time: "2:30 PM to 2:40 PM", title: "How to Help Evolve Robotic Cardiac Surgery", speaker: "", extra: "" },
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
    const isHighlighted = bgClass !== "transparent";

    return (
      <div className={`flex flex-col md:flex-row w-full px-4 md:px-6 py-3.5 text-[13px] text-gray-200 items-start ${isHighlighted ? `${bgClass} rounded-[4px] mb-[6px]` : 'hover:bg-white/5 transition-colors'}`}>
        <div className="w-full md:w-[150px] flex-shrink-0 font-normal text-[#B2B8D1] md:text-gray-300 mb-1 md:mb-0">
          {time}
        </div>
        
        <div className="flex-1 pr-0 md:pr-4 font-normal text-[13.5px] text-white leading-snug mb-2 md:mb-0">
          {title}
        </div>
        
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

        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-2">
          
          <div className="flex flex-col flex-1 w-full">
             {cardiacSurgeryScreens.map((item, index) => (
               <ScheduleRow key={`cardiac-screen-${index}`} {...item} />
             ))}

             <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 mb-2">
               <div className="hidden md:block w-[150px] px-4"></div>
               <div className="flex-1 w-full">
                  <GoldSessionHeader title="Presentations" />
               </div>
             </div>

             {cardiacPresentations.slice(0, 3).map((item, index) => (
               <ScheduleRow key={`cardiac-pres-${index}`} {...item} />
             ))}
          </div>

          <div className="lg:w-[260px] xl:w-[280px] bg-[#122240] rounded-[4px] p-6 text-[13px] text-gray-200 flex flex-col justify-center">
            <div className="mb-1.5 leading-relaxed">
              <span className="text-white font-normal">Chairperson:</span> Dr. Yugal K Mishra
            </div>
            <div className="leading-relaxed">
              <span className="text-white font-normal">Moderators:</span> Dr. Husam Balkhy,<br/>
              Dr. Harish Badami, Dr. Nitin<br/>
              Rajput
            </div>
          </div>

        </div>

        <div className="flex flex-col mb-10 w-full">
          {cardiacPresentations.slice(3).map((item, index) => (
            <ScheduleRow key={`cardiac-pres-end-${index}`} {...item} />
          ))}
        </div>

        <BeigeEventBar time="4:30:00 PM" title="Faculty Dinner at Dr. Sudhir Srivastava House" extraRight="SSI User Group" />
      </div>
    </div>
  );
};

export default ScheduleDay1;