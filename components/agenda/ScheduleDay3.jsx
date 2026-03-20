'use client';
import React from 'react';

const ScheduleDay3 = () => {
  // --- AUDI 2: MULTI SPECIALITY DATA ---
  const teleSurgeryMorning = [
    { time: "Screen 1", title: "Robotic Easophagus - Live Transmission", speaker: "- Dr. Deepak Mittal", extra: "Aadhar Hospital, Hisar, HR" },
    { time: "Screen 2", title: "Robotic Radical Hysterectomy - Live Transmission", speaker: "- Dr. Bhavani Stalin", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "Screen 3", title: "Salphingo-Oophorectomy - Telesurgery with MantrAsana", speaker: "- Dr. Priya Bhave Chittawar", extra: "Her Health Hospital, Bhopal, MP" },
    { time: "Screen 4", title: "Robotic Cystectomy - Telesurgery with MantrAsana", speaker: "- Dr. Sudhir K Rawal", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi" },
  ];

  const presentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Complex Cholecystectomy Hepato-Anteric Anastomosis", speaker: "", extra: "" },
    { time: "9:40 AM to 9:50 AM", title: "Liver Resection", speaker: "- Dr. Kumar Sonal", extra: "" },
    { time: "10:10 AM to 10:20 AM", title: "Robotic Spleenectomy", speaker: "", extra: "" },
    { time: "10:40 AM to 10:50 AM", title: "Donor Nephrectomy", speaker: "- Dr. M Ramalingam", extra: "Hindustan Hospital, Coimbatore, TN" },
    { time: "11:10 AM to 11:20 AM", title: "Kidney Transplants", speaker: "- Dr. Ritesh Mongha", extra: "Marengo Asia Hospitals, Faridabad, Haryana" },
    { time: "11:40 AM to 11:50 AM", title: "Nipple Sparing Mastectomy", speaker: "- Dr. Somashekhar SP / Dr. Anagha Zope", extra: "" },
    { time: "12:10:00 PM", title: "Tips and Tricks- Panel Discussion", speaker: "", extra: "" },
  ];

  const teleSurgeryAfternoon = [
    { time: "Screen 1", title: "Gastric Bypass Surgery (OAGB) - Telesurgery with MantrAsana", speaker: "- Dr. Mahak Bhandari", extra: "IRCAD/SAIMS" },
    { time: "Screen 2", title: "Robotic Pyeloplasty - Telesurgery with MantrAsana", speaker: "- Dr. Chandra Mohan Vaddi", extra: "Preeti Urology & Kidney Hospital, Hyderabad, Telangana" },
    { time: "Screen 3", title: "Head & Neck - Live Transmission", speaker: "- Dr. Mridul Sharma", extra: "State Cancer Institute, Guwahati" },
    { time: "Screen 4", title: "Robotic Hemicolectomy - Live Transmission", speaker: "- Dr. Kushal Agarwal", extra: "Aster CMI, Bengaluru, KA" },
  ];

  const presentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic TAPP Repair Video", speaker: "- Dr. Avinash Kumar", extra: "KGMU, Lucknow, UP" },
    { time: "2:30 PM to 2:40 PM", title: "Importance of Team Training, Participation and Selection of Cases in Robotic Urology", speaker: "- Dr. Ashish Khanna", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi" },
    { time: "2:50 PM to 3:00 PM", title: "Need of 5mm Instruments in Pediatric Surgery", speaker: "- Dr. Mohan Gundeti", extra: "University of Chicago Medicine" },
    { time: "3:10 PM to 3:20 PM", title: "Newer Imaging Techniques for Detection of Cancer", speaker: "- Dr. Manish Chand", extra: "University College London" },
    { time: "3:40:00 PM", title: "Tips and Tricks: Panel Discussion", speaker: "", extra: "" },
  ];

  // --- SUMMIT LOUNGE: CARDIAC DATA ---
  const cardiacSurgeryMorning = [
    { time: "Screen 1", title: "Robotic Aortic Valve Replacement", speaker: "- Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ" },
    { time: "Screen 2", title: "Robotic Mitral Valve Repair", speaker: "- Dr. Nitin K Rajput", extra: "Sri Sathya Sai Institute of Medical Sciences, Puttaparthi, AP" },
  ];

  const cardiacPresentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Fortis Escorts Experience with Robotic Cardiac Cases with Mantra System", speaker: "- Dr. Ritwick Raj Bhuyan", extra: "Fortis Escorts, Okhla, New Delhi" },
    { time: "9:40 AM to 9:50 AM", title: "First 100 Robotic Cardiac Cases at Manipal Hospitla Jaipur with Mantra System", speaker: "- Dr. Satish", extra: "Manipal Hospital, Jaipur, RJ" },
    { time: "10:10 AM to 10:20 AM", title: "First 50 Robotic Cardiac Cases at Malla Reddy Hospital with Mantra System", speaker: "- Dr. Harish Badami", extra: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad" },
    { time: "10:40 AM to 10:50 AM", title: "Robotic Cardiac Surgery and Its Globalization- What will help", speaker: "- Dr. Sudhir Srivastava", extra: "" },
    { time: "11:10 AM to 11:20 AM", title: "TBD", speaker: "", extra: "" },
    { time: "11:40 AM to 11:50 AM", title: "TBD", speaker: "", extra: "" },
    { time: "12:00:00", title: "Tips and Trick: Panel Discussion", speaker: "", extra: "" },
  ];

  const cardiacSurgeryAfternoon = [
    { time: "Screen 1", title: "Thoracic Case - Lung/Thymus - Local", speaker: "- Dr. Somashekhar SP", extra: "Aster CMI, Bengaluru, KA" },
    { time: "Screen 2", title: "Sinus Venosus ASD - Mantrasana", speaker: "- Dr. Sudhir Srivastava", extra: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad" },
  ];

  const cardiacPresentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic Cardiac Training of Residents in a Teaching Institution", speaker: "- Dr. Anubhav Gupta", extra: "Safdarjung Hospital" },
    { time: "2:30 PM to 2:40 PM", title: "Anesthesia Consideration in Robotic Cardiac Surgery", speaker: "- Dr. Shraddha", extra: "Medanta Medicity" },
    { time: "2:50 PM to 3:00 PM", title: "Hybrid Coronary Vasuclarization", speaker: "- Dr. MM Yusuf", extra: "Apollo Hospital, Chennai, TN" },
    { time: "3:10 PM to 3:20 PM", title: "Grafting Strategies in Robotic Re-vascularization", speaker: "- Dr. Adil Siddique", extra: "Sakra Hospital" },
    { time: "3:40:00 PM", title: "Tips and Tricks: Panel Discussions", speaker: "", extra: "" },
  ];

  // Helper Components
  const BeigeEventBar = ({ time, title, extraRight }) => (
    <div className="flex flex-col md:flex-row w-full py-3 px-4 md:px-6 justify-between items-start md:items-center rounded bg-[#E1C583] text-[#000] mb-4 gap-2 md:gap-0 mt-6">
      <div className="flex flex-col md:flex-row w-full font-medium text-[14px] md:text-sm gap-1 md:gap-0">
        <div className="w-full md:w-[150px] flex-shrink-0 font-bold md:font-medium">{time}</div>
        <div className="flex-1 font-bold md:font-medium leading-tight">{title}</div>
        {extraRight && (
          <div className="text-left md:text-right mt-1 md:mt-0 text-xs md:text-sm opacity-90 font-semibold md:font-normal">
            {extraRight}
          </div>
        )}
      </div>
    </div>
  );

  const GoldSessionHeader = ({ title }) => (
    <div className="flex min-h-[36px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-[10px] bg-[#A7781B] backdrop-blur-[2px] text-white mb-4 text-[14px] font-medium text-center">
      {title}
    </div>
  );

  const ScheduleRow = ({ time, title, speaker, extra }) => (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-6 py-4 md:py-2.5 text-[13px] text-gray-200 items-start hover:bg-white/5 transition-colors rounded-lg border-b border-white/5 md:border-none gap-1 md:gap-0">
      <div className="w-full md:w-[150px] flex-shrink-0 font-semibold text-[#CE921B] md:text-gray-200 md:font-normal">{time}</div>
      <div className="flex-1 pr-0 md:pr-4 font-medium md:font-light text-[14px] md:text-[13px] text-white leading-snug">{title}</div>
      <div className="flex flex-col md:flex-row w-full md:w-auto mt-2 md:mt-0 items-start md:items-center">
        <div className="w-full md:w-[250px] lg:w-[350px] text-left md:text-right whitespace-pre-line flex-shrink-0 text-gray-300">{speaker}</div>
        {extra && (
          <div className="w-full md:w-[150px] lg:w-[200px] text-left md:text-right flex-shrink-0 text-gray-400 text-xs mt-1 md:mt-0 italic md:not-italic">{extra}</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center animate-fadeIn pb-20 pt-10 px-4 md:px-6 bg-[#020617] min-h-screen font-sans">
      <div className="w-full max-w-[1340px] flex flex-col">
        
        {/* Top Header */}
        <div className="flex flex-col mb-8 gap-[2px]">
          <div className="flex justify-start items-center gap-2.5 w-full bg-[#E1C583] text-[#000] font-semibold text-[16px] md:text-[18px] px-4 md:px-5 py-3 md:py-[10px] rounded-t-[20px]">
            April 11'th, 2026
          </div>
          <div className="bg-[#1f3f77] text-white font-medium text-base md:text-lg flex justify-start items-center px-4 md:px-[20px] py-3 md:py-[10px] w-full rounded-b-md">
            DAY 3: AUDI 2 - MULTI SPECIALITY
          </div>
        </div>

        {/* Morning Schedule */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-2">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Live Telesurgery" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {teleSurgeryMorning.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations Unusual And Complex Cases" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {presentationsMorning.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* Afternoon Schedule */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Multi-Speciality Live Tele Surgeries" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {teleSurgeryAfternoon.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4 md:mb-6">
          {presentationsAfternoon.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        {/* Evening Events */}
        <BeigeEventBar time="4:00:00 PM" title="Awards Ceremony" />
        <BeigeEventBar time="7:00:00 PM" title="Gala Dinner" />

        {/* CARDIAC SCHEDULE HEADER */}
        <div className="bg-[#8b1818] text-white font-medium text-base md:text-lg flex justify-start items-center px-4 md:px-[20px] py-3 md:py-[10px] w-full rounded-md mt-8 mb-8">
          DAY 3: SUMMIT LOUNGE - CARDIAC
        </div>

        {/* Cardiac Morning */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {cardiacSurgeryMorning.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Video Presentations" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {cardiacPresentationsMorning.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* Cardiac Afternoon */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {cardiacSurgeryAfternoon.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4 md:mb-6">
          {cardiacPresentationsAfternoon.map((item, index) => <ScheduleRow key={index} {...item} />)}
        </div>

        <BeigeEventBar time="4:00:00 PM" title="Awards Ceremony" />
        <BeigeEventBar time="7:00:00 PM" title="Gala Dinner" />

      </div>
    </div>
  );
};

export default ScheduleDay3;