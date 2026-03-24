'use client';
import React from 'react';

const ScheduleDay3 = () => {
  // --- AUDI 2: MULTI SPECIALITY DATA ---
  const teleSurgeryMorning = [
    { time: "Screen 1", title: "Robotic Easophagus - Live Transmission", speaker: "-Dr. Deepak Mittal", extra: "Aadhar Hospital, Hisar, HR", bgClass: "transparent" },
    { time: "Screen 2", title: "Robotic Radical Hysterectomy - Live Transmission", speaker: "-Dr. Bhavani Stalin", extra: "Aster CMI Hospital, Bengaluru, KA", bgClass: "transparent" },
    { time: "Screen 3", title: "Salphingo-Oophorectomy - Telesurgery with MantrAsana", speaker: "-Dr. Priya Bhave Chittawar", extra: "Her Health Hospital, Bhopal, MP", bgClass: "bg-[#1F4174]" },
    { time: "Screen 4", title: "Robotic Cystectomy - Telesurgery with MantrAsana", speaker: "-Dr. Sudhir K Rawal", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", bgClass: "bg-[#18345C]" },
  ];

  const presentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Complex Cholecystectomy Hepato-Anteric Anastomosis", speaker: "", extra: "" },
    { time: "9:40 AM to 9:50 AM", title: "Robotic Spleenectomy", speaker: "-Dr. Kumar Sonal", extra: "Ruban Hospital, Patna, Bihar" },
    { time: "10:10 AM to 10:20 AM", title: "Liver Resection", speaker: "", extra: "" },
    { time: "10:40 AM to 10:50 AM", title: "Donor Nephrectomy", speaker: "-Dr. M Ramalingam", extra: "Hindusthan Hospital, Coimbatore, TN" },
    { time: "11:10 AM to 11:20 AM", title: "Kidney Transplants", speaker: "-Dr. Ritesh Mongha", extra: "Marengo Asia Hospitals, Faridabad, Haryana" },
    { time: "11:40 AM to 11:50 AM", title: "Nipple Sparing Mastectomy", speaker: "-Dr. Anagha Zope", extra: "" },
    { time: "12:10:00 PM", title: "Tips and Tricks- Panel Discussion", speaker: "", extra: "" },
  ];

  const teleSurgeryAfternoon = [
    { time: "Screen 1", title: "Gastric Bypass Surgery (OAGB) - Telesurgery with MantrAsana", speaker: "-Dr. Mahak Bhandari", extra: "IRCAD/SAIMS", bgClass: "bg-[#1F4174]" },
    { time: "Screen 2", title: "Robotic Pyeloplasty - Telesurgery with MantrAsana", speaker: "-Dr. Chandra Mohan Vaddi", extra: "Preeti Urology & Kidney Hospital, Hyderabad, Telangana", bgClass: "bg-[#1F4174]" },
    { time: "Screen 3", title: "Head & Neck - Live Transmission", speaker: "-Dr. Mridul Sharma", extra: "State Cancer Institute, Guwahati", bgClass: "transparent" },
    { time: "Screen 4", title: "Robotic Hemicolectomy - Live Transmission", speaker: "-Dr. Kushal Agarwal", extra: "Aster CMI, Bengaluru, KA", bgClass: "transparent" },
  ];

  const presentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic TAPP Repair Video", speaker: "-Dr. Avinash Kumar", extra: "King George's Medical University, Lucknow, UP" },
    { time: "2:30 PM to 2:40 PM", title: "Importance of Team Training, Participation and Selection of Cases in Robotic Urology", speaker: "-Dr. Ashish Khanna", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi" },
    { time: "2:50 PM to 3:00 PM", title: "Need of 5mm Instruments in Pediatric Surgery", speaker: "-Dr. Mohan Gundeti", extra: "University of Chicago Medicine" },
    { time: "3:10 PM to 3:20 PM", title: "Newer Imaging Techniques for Detection of Cancer", speaker: "-Dr. Manish Chand", extra: "University College London" },
    { time: "3:20 PM to 3:30 AM", title: "Role of Robotic Training in Post Graduate Program", speaker: "-Dr. Hemant Atri", extra: "ESIC Hospital, Faridabad" },
    { time: "3:40:00 PM", title: "Tips and Tricks: Panel Discussion", speaker: "", extra: "" },
  ];

  // --- SUMMIT LOUNGE: CARDIAC DATA ---
  const cardiacSurgeryMorning = [
    { time: "Screen 1", title: "Robotic Aortic Valve Replacement", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ", bgClass: "transparent" },
    { time: "Screen 2", title: "Robotic Mitral Valve Repair", speaker: "-Dr. Nitin K Rajput", extra: "Sri Sathya Sai Institute of Medical Sciences, Puttaparthi, AP", bgClass: "transparent" },
  ];

  const cardiacPresentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Fortis Escorts Experience with Robotic Cardiac Cases with Mantra System", speaker: "-Dr. Ritwick Raj Bhuyan", extra: "Fortis Escorts, Okhla, New Delhi" },
    { time: "9:40 AM to 9:50 AM", title: "First 100 Robotic Cardiac Cases at Manipal Hospital Jaipur with Mantra System", speaker: "-Dr. Satish", extra: "Manipal Hospital, Jaipur, RJ" },
    { time: "10:10 AM to 10:20 AM", title: "First 50 Robotic Cardiac Cases at Malla Reddy Hospital with Mantra System", speaker: "-Dr. Harish Badami", extra: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad" },
    { time: "10:40 AM to 10:50 AM", title: "Robotic Cardiac Surgery and Its Globalization- What will help", speaker: "-Dr. Sudhir Srivastava", extra: "" },
    { time: "11:10 AM to 11:20 AM", title: "TBD", speaker: "", extra: "" },
    { time: "11:40 AM to 11:50 AM", title: "TBD", speaker: "", extra: "" },
    { time: "12:00:00", title: "Tips and Trick: Panel Discussion", speaker: "", extra: "" },
  ];

  const cardiacSurgeryAfternoon = [
    { time: "Screen 1", title: "Thoracic Case - Lung/Thymus - Local", speaker: "-Dr. Somashekhar SP", extra: "Aster CMI, Bengaluru, KA", bgClass: "transparent" },
    { time: "Screen 2", title: "Sinus Venosus ASD - Mantrasana", speaker: "-Dr. Sudhir Srivastava", extra: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad", bgClass: "bg-[#1F4174]" },
  ];

  const cardiacPresentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic Cardiac Training of Residents in a Teaching Institution", speaker: "-Dr. Anubhav Gupta", extra: "Safdarjung Hospital" },
    { time: "2:30 PM to 2:40 PM", title: "Anesthesia Consideration in Robotic Cardiac Surgery", speaker: "-Dr. Shraddha", extra: "Medanta Medicity, gurugram, HR" },
    { time: "2:50 PM to 3:00 PM", title: "Hybrid Coronary Vasuclarization", speaker: "-Dr. MM Yusuf", extra: "Apollo Hospital, Chennai, TN" },
    { time: "3:10 PM to 3:20 PM", title: "Grafting Strategies in Robotic Re-vascularization", speaker: "-Dr. Adil Siddique", extra: "Sakra Hospital" },
    { time: "3:40:00 PM", title: "Tips and Tricks: Panel Discussions", speaker: "", extra: "" },
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
        {/* Time / Screen Column */}
        <div className="w-full md:w-[150px] flex-shrink-0 font-normal text-[#B2B8D1] md:text-gray-300 mb-1 md:mb-0">
          {time}
        </div>
        
        {/* Title Column */}
        <div className="flex-1 pr-0 md:pr-4 font-normal text-[13.5px] text-white leading-snug mb-2 md:mb-0">
          {title}
        </div>
        
        {/* Speaker Info Column */}
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
            April 11'th, 2026
          </div>
          <div className="bg-[#10244C] text-white font-medium text-base md:text-lg flex justify-start items-center px-[20px] py-3 w-full rounded-b-xl">
            DAY 3: AUDI 2 - MULTI SPECIALITY
          </div>
        </div>

        {/* MORNING MULTI-SPECIALITY */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" /></div>
        </div>
        <div className="flex flex-col mb-8">
          {teleSurgeryMorning.map((item, index) => <ScheduleRow key={`ms-tele-m-${index}`} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations Unusual And Complex Cases" /></div>
        </div>
        <div className="flex flex-col mb-4">
          {presentationsMorning.map((item, index) => <ScheduleRow key={`ms-pres-m-${index}`} {...item} />)}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* AFTERNOON MULTI-SPECIALITY */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" /></div>
        </div>
        <div className="flex flex-col mb-8">
          {teleSurgeryAfternoon.map((item, index) => <ScheduleRow key={`ms-tele-a-${index}`} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-10">
          {presentationsAfternoon.map((item, index) => <ScheduleRow key={`ms-pres-a-${index}`} {...item} />)}
        </div>

        <BeigeEventBar time="4:00:00 PM" title="Awards Ceremony" />
        <BeigeEventBar time="7:00:00 PM" title="Gala Dinner" />

        {/* CARDIAC SCHEDULE HEADER */}
        <div className="bg-[#8E1616] text-white font-medium text-base md:text-[17px] flex justify-start items-center px-[20px] py-3.5 w-full rounded-md mt-4 mb-8">
          DAY 3: SUMMIT LOUNGE - CARDIAC
        </div>

        {/* MORNING CARDIAC */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full mb-8 gap-2 relative">
          <div className="flex flex-col flex-1 w-full">
            {cardiacSurgeryMorning.map((item, index) => <ScheduleRow key={`cardiac-tele-m-${index}`} {...item} />)}
          </div>
          <div className="lg:w-[240px] bg-[#11244A] rounded-[4px] p-5 text-[13px] text-gray-300 flex flex-col justify-center min-h-[100px] mt-2 lg:mt-0 mb-[6px]">
            <div className="mb-2 leading-snug"><span className="text-white font-normal">Chairperson:</span> Dr. Kunal Sarkar</div>
            <div className="leading-snug"><span className="text-white font-normal">Moderators:</span> Dr. Anil Mulpur, Dr. S.K Agarwal, Dr. Ajay Kaul</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Video Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4">
          {cardiacPresentationsMorning.map((item, index) => <ScheduleRow key={`cardiac-pres-m-${index}`} {...item} />)}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* AFTERNOON CARDIAC */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full mb-8 gap-2 relative">
          <div className="flex flex-col flex-1 w-full">
             {cardiacSurgeryAfternoon.map((item, index) => <ScheduleRow key={`cardiac-tele-a-${index}`} {...item} />)}
          </div>
          <div className="lg:w-[240px] bg-[#11244A] rounded-[4px] p-5 text-[13px] text-gray-300 flex flex-col justify-center min-h-[100px] mt-2 lg:mt-0 mb-[6px]">
            <div className="mb-2 leading-snug"><span className="text-white font-normal">Chairperson:</span> Dr. Devendra Saxena</div>
            <div className="leading-snug"><span className="text-white font-normal">Moderators:</span> Dr. Arul Furtado, Dr. MM Yusuf, Dr. Vivek Jawali, Dr. A.G.K Gokhale, Dr. Milind Hote</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="hidden md:block w-[150px] px-4"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-10">
          {cardiacPresentationsAfternoon.map((item, index) => <ScheduleRow key={`cardiac-pres-a-${index}`} {...item} />)}
        </div>

        <BeigeEventBar time="4:00:00 PM" title="Awards Ceremony" />
        <BeigeEventBar time="7:00:00 PM" title="Gala Dinner" />

      </div>
    </div>
  );
};

export default ScheduleDay3;