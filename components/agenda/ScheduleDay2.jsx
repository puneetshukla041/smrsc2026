'use client';
import React from 'react';

const ScheduleDay2 = () => {
  // --- AUDI 2: MULTI SPECIALITY DATA ---
  const teleSurgeryMorning = [
    { time: "Screen 1", title: "Colorectal - Live Transmission", speaker: "-Dr Deepak Mittal/ Dr Harish Sharma", extra: "Aadhar Hospital, Hisar" },
    { time: "Screen 2", title: "Esophagectomy - Telesurgery with MantrAsana /Live Transmission", speaker: "-Dr. Somashekhar SP / Dr. Kushal Agrawal", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "Screen 3", title: "Partial Nephrectomy - Telesurgery with MantrAsana", speaker: "-Dr. Amitabh Singh", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi" },
    { time: "Screen 4", title: "Hernia - Telesurgery with MantrAsana", speaker: "-Dr. Magan Mehrotra", extra: "Apex Hospital, Moradabad, UP" },
  ];

  const presentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Case to be decided", speaker: "-Dr. Kushal Agarwal", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "9:40 AM to 9:50 AM", title: "Robotic Whipples", speaker: "-Dr. Sanjiv Haribhakti", extra: "Kaizen Hospital, Ahmedabad" },
    { time: "10:10 AM to 10:20 AM", title: "Challenging Robotic Reconstructive Surgeries Using SSI Mantra", speaker: "-Dr. M Ramalingam", extra: "Hindusthan Hospital, Coimbatore, TN" },
    { time: "10:40 AM to 10:50 AM", title: "Robotics in General Surgery a Necessity", speaker: "-Dr. Sachin Mittal", extra: "Marengo Asia Hospitals, Faridabad, Haryana" },
    { time: "11:30:00 AM", title: "Tips and Tricks- Panel Discussion", speaker: "", extra: "" },
  ];

  const teleSurgeryAfternoon = [
    { time: "Screen 1", title: "Gastric Bypass Surgery - Telesurgery with MantrAsana", speaker: "-Dr. Mohit Bhandari", extra: "IRCAD, Indore" },
    { time: "Screen 2", title: "Robotic Nephrectomy - Live Transmission", speaker: "-Dr. Ritesh Mongha", extra: "Marengo Asia Hospitals, Faridabad, Haryana" },
    { time: "Screen 3", title: "Robotic Hysterectomy/Myomectomy - Live Transmission", speaker: "-Dr. Amit Tandon", extra: "Dr. Kamlesh Tandon Hospital, Agra" },
    { time: "Screen 4", title: "TBD", speaker: "-Dr. Mujeebu Rahiman M", extra: "Yenepoya Hospital, Mangalore" },
  ];

  const presentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Robotic Gyne Onco Experience", speaker: "-Dr. Somashekhar SP", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "2:30 PM to 2:40 PM", title: "Utilisation of ICG Versus Spectral Imaging (Plenary)", speaker: "-Dr. Manish Chand", extra: "UCL, London, UK" },
    { time: "2:50 PM to 3:00 PM", title: "TBD", speaker: "-Dr. Ivan Rizal Sinai", extra: "Bunda Hospital, Jakarta" },
    { time: "3:10 PM to 3:20 PM", title: "Continence Matters, Urethrovesical Anastomosis", speaker: "-Dr. Mujeebu Rahiman M", extra: "Yenepoya Hospital, Mangalore, KA" },
    { time: "3:40 PM to 3:50 PM", title: "Robotic Fundoplication", speaker: "-Dr. Vikrant Sharma", extra: "Meenakshi Hospital, Ghaziabad, UP" },
    { time: "4:10 PM to 4:20 PM", title: "Robotic Bilateral Inguinal Hernia", speaker: "-Dr. Dr. Parimuthukumar Rajappa", extra: "Prashanth Hospitals, Chennai, TN" },
    { time: "4:30 PM to 4:40 PM", title: "Sacrocolopexy", speaker: "-Dr. Leena Mehrotra", extra: "Apex Hospital, Moradabad, UP" },
    { time: "4:40:00 PM", title: "Tips and Tricks: Panel Discussion", speaker: "", extra: "" },
    { time: "5:00:00 PM", title: "Adjourn", speaker: "", extra: "" },
  ];

  // --- SUMMIT LOUNGE: CARDIAC DATA ---
  const cardiacSurgeryMorning = [
    { time: "Screen 1", title: "Robotic ASD - Telesurgery with MantrAsana", speaker: "-Dr. Nitin K Rajput/ Dr. Tania", extra: "Sri Sathya Sai Institute of Medical Sciences, Puttaparthi, AP" },
    { time: "Screen 2", title: "Mitral Valve Replacement - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ" },
  ];

  const cardiacPresentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Step by Step Approach to Robotic Cardiac Surgery", speaker: "-Dr. Husam Balkhy", extra: "The University of Chicago Medicine and Biological Sciences , USA" },
    { time: "9:40 AM to 9:50 AM", title: "Use of Teleproctoring and Telesurgery in Robotic Cardiac Surgery", speaker: "-Dr. Sudhir Srivastava", extra: "" },
    { time: "9:50 AM to 10:00 AM", title: "Bilateral IMA Takedown", speaker: "-Dr. MM Yusuf", extra: "Apollo Hospital, Chennai, TN" },
    { time: "10:10 AM to 10:20 AM", title: "Emergence of Robotic Cardiac Surgery in East Africa", speaker: "-Dr. Justin Reeves/ Dr. Rus White", extra: "Providence Health & Services, Washington." },
    { time: "10:40 AM to 10:50 AM", title: "Robotics in Thoracic Surgery", speaker: "-Dr. Deepak Mittal", extra: "Adhar Hospital, Hisar, HR" },
    { time: "11:10 AM to 11:20 AM", title: "Robotic Aortic Valve Replacement", speaker: "-Dr. Husam Balkhy", extra: "The University of Chicago Medicine and Biological Sciences , USA" },
    { time: "11:20 AM to 11:45 AM", title: "Tips and Tricks - Panel Discussion", speaker: "", extra: "" },
  ];

  const cardiacSurgeryAfternoon = [
    { time: "Screen 1", title: "Robotic Mitral Valve Repair - Live Transmission", speaker: "-Dr. Nitin K Rajput", extra: "Medanta Medicity, Gurugram, HR" },
    { time: "Screen 2", title: "Robotic TECAB - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ" },
  ];

  const cardiacPresentationsAfternoon = [
    { time: "2:00 PM to 2:10 PM", title: "Step by Step Approach to building Robotic Revascularization Program", speaker: "-Dr. Danny Ramzy", extra: "Memorial Hermann Memorial City Medical Center, Houston, Texas" },
    { time: "2:30 PM to 2:40 PM", title: "Step by Step Approach to building Robotic Mitral Valve Program", speaker: "-Dr. Jae Won Lee", extra: "Buchon Sejong Hospital, Seoul, South Korea" },
    { time: "2:50 PM to 3:00 PM", title: "Anastomotic Challenges in Robotic CABG and Potential Solutions", speaker: "-Dr. Husam Balkhy", extra: "The University of Chicago Medicine and Biological Sciences , USA" },
    { time: "3:10 PM to 3:20 PM", title: "Cannulation and Myocardial Preservation in Robotic Surgery - Challenges, Tips and Tricks", speaker: "-Dr. Arunkumar Ulaganathan", extra: "KG Hospital, Coimbatore, TN" },
    { time: "3:40 PM to 3:50 PM", title: "Opportunities and Challenges in Starting Robotic Cardiac Program in Tier-II City", speaker: "-Dr. Anuj Kumar", extra: "Medanta, Patna, Bihar" },
    { time: "4:10 PM to 4:20 PM", title: "Can SSI Mantra System be used for Pediatric Cardiac Surgery", speaker: "-Dr. C. S Hiremath", extra: "Sri Sathya Sai Hospital, Muddenhalli, Karnataka" },
    { time: "4:30 PM to 5:00 PM", title: "Panel Discussions: Tips and Tricks", speaker: "", extra: "" },
    { time: "5:00:00 PM", title: "Adjourn", speaker: "", extra: "" },
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
            April 10'th, 2026
          </div>
          <div className="bg-[#1f3f77] text-white font-medium text-base md:text-lg flex justify-start items-center px-4 md:px-[20px] py-3 md:py-[10px] w-full rounded-b-md">
            DAY 2: AUDI 2 - MULTI SPECIALITY
          </div>
        </div>

        {/* Morning Schedule */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-2">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {teleSurgeryMorning.map((item, index) => <ScheduleRow key={`ms-tele-m-${index}`} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4 md:mb-2">
          {presentationsMorning.map((item, index) => <ScheduleRow key={`ms-pres-m-${index}`} {...item} />)}
        </div>

        {/* Plenary Keynote Before Lunch */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-2">
          <div className="w-full md:w-[150px] text-[13px] text-[#CE921B] md:text-gray-200 px-4 font-semibold md:font-normal">11:45: AM to 12:30 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Plenary Keynote (Audi-2 & Summit Room)" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          <ScheduleRow 
            time="" 
            title="My Journey from Bihar to Bollywood and Hollywood" 
            speaker="-Ms. Neetu Chandra Srivastava" 
            extra="Brand Ambassador SSI, Indian Actress & Producer" 
          />
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* Afternoon Schedule */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          {teleSurgeryAfternoon.map((item, index) => <ScheduleRow key={`ms-tele-a-${index}`} {...item} />)}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-10">
          {presentationsAfternoon.map((item, index) => <ScheduleRow key={`ms-pres-a-${index}`} {...item} />)}
        </div>

        {/* CARDIAC SCHEDULE HEADER */}
        <div className="bg-[#8b1818] text-white font-medium text-base md:text-lg flex justify-start items-center px-4 md:px-[20px] py-3 md:py-[10px] w-full rounded-md mt-6 mb-8">
          DAY 2: SUMMIT LOUNGE - CARDIAC
        </div>

        {/* Cardiac Morning */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col mb-8 md:mb-6 relative">
          <div className="flex flex-col w-full lg:w-[calc(100%-250px)]">
            {cardiacSurgeryMorning.map((item, index) => <ScheduleRow key={`cardiac-tele-m-${index}`} {...item} />)}
          </div>
          {/* Cardiac Morning Right Sidebar */}
          <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[240px] bg-[#11244A] rounded-lg p-4 text-[13px] text-gray-200 flex-col justify-center">
            <div className="mb-2"><span className="text-white font-medium">Chairperson:</span> Dr. Anubhav Gupta</div>
            <div><span className="text-white font-medium">Moderators:</span> Dr. Bijoy Kutty, Dr. Ritwick Raj Bhuyan, Dr. Dhiren Shah, Dr. K.R Balakrishnan</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4 md:mb-2">
          {cardiacPresentationsMorning.map((item, index) => <ScheduleRow key={`cardiac-pres-m-${index}`} {...item} />)}
        </div>

        {/* Plenary Keynote Before Lunch (Cardiac Session also shares this) */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-2">
          <div className="w-full md:w-[150px] text-[13px] text-[#CE921B] md:text-gray-200 px-4 font-semibold md:font-normal">11:45: AM to 12:30 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Plenary Keynote (Audi-2 & Summit Room)" /></div>
        </div>
        <div className="flex flex-col mb-8 md:mb-6">
          <ScheduleRow 
            time="" 
            title="My Journey from Bihar to Bollywood and Hollywood" 
            speaker="-Ms. Neetu Chandra Srivastava" 
            extra="Brand Ambassador SSI, Indian Actress & Producer" 
          />
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />

        {/* Cardiac Afternoon */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 md:text-gray-200 px-4 font-semibold md:font-normal">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col mb-8 md:mb-6 relative">
          <div className="flex flex-col w-full lg:w-[calc(100%-250px)]">
             {cardiacSurgeryAfternoon.map((item, index) => <ScheduleRow key={`cardiac-tele-a-${index}`} {...item} />)}
          </div>
          {/* Cardiac Afternoon Right Sidebar */}
          <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[240px] bg-[#11244A] rounded-lg p-4 text-[13px] text-gray-200 flex-col justify-center">
            <div className="mb-2"><span className="text-white font-medium">Chairperson:</span> Dr. Jae Won Lee</div>
            <div><span className="text-white font-medium">Moderators:</span> Dr. Sudhir Srivastava, Dr. C. S Hiremath, Dr. Z.S Meherwal</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-3 md:gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-10">
          {cardiacPresentationsAfternoon.map((item, index) => <ScheduleRow key={`cardiac-pres-a-${index}`} {...item} />)}
        </div>

      </div>
    </div>
  );
};

export default ScheduleDay2;