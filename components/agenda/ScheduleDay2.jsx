'use client';
import React from 'react';

const ScheduleDay2 = () => {
  // --- AUDI 2: MULTI SPECIALITY DATA ---
  const teleSurgeryMorning = [
    { time: "Screen 1", title: "Colorectal - Live Transmission", speaker: "-Dr Deepak Mittal/ Dr Harish Sharma", extra: "Aadhar Hospital, Hisar", bgClass: "transparent" },
    { time: "Screen 2", title: "Esophagectomy - Telesurgery with MantrAsana /Live Transmission", speaker: "-Dr. Somashekhar SP / Dr. Kushal Agrawal", extra: "Aster CMI Hospital, Bengaluru, KA", bgClass: "bg-[#1F4174]" },
    { time: "Screen 3", title: "Partial Nephrectomy - Telesurgery with MantrAsana", speaker: "-Dr. Amitabh Singh", extra: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", bgClass: "bg-[#18345C]" },
    { time: "Screen 4", title: "Hernia - Telesurgery with MantrAsana", speaker: "-Dr. Magan Mehrotra", extra: "Apex Hospital, Moradabad, UP", bgClass: "bg-[#1F4174]" },
  ];

  const presentationsMorning = [
    { time: "9:00 AM to 9:10 AM", title: "Case to be decided", speaker: "-Dr. Kushal Agarwal", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "9:40 AM to 9:50 AM", title: "Robotic Whipples", speaker: "-Dr. Sanjiv Haribhakti", extra: "Kaizen Hospital, Ahmedabad" },
    { time: "10:10 AM to 10:20 AM", title: "Challenging Robotic Reconstructive Surgeries Using SSI Mantra", speaker: "-Dr. M Ramalingam", extra: "Hindusthan Hospital, Coimbatore, TN" },
    { time: "10:40 AM to 10:50 AM", title: "Robotics in General Surgery a Necessity", speaker: "-Dr. Sachin Mittal", extra: "Marengo Asia Hospitals, Faridabad, Haryana" },
    { time: "11:30:00 AM", title: "Tips and Tricks- Panel Discussion", speaker: "", extra: "" },
  ];

  const teleSurgeryAfternoon = [
    { time: "Screen 1", title: "Gastric Bypass Surgery - Telesurgery with MantrAsana", speaker: "-Dr. Mohit Bhandari", extra: "IRCAD, Indore", bgClass: "bg-[#1F4174]" },
    { time: "Screen 2", title: "Robotic Nephrectomy - Live Transmission", speaker: "-Dr. Ritesh Mongha", extra: "Marengo Asia Hospitals, Faridabad, Haryana", bgClass: "transparent" },
    { time: "Screen 3", title: "Robotic Hysterectomy/Myomectomy - Live Transmission", speaker: "-Dr. Amit Tandon", extra: "Dr. Kamlesh Tandon Hospital, Agra", bgClass: "transparent" },
    { time: "Screen 4", title: "TBD", speaker: "-Dr. Mujeebu Rahiman M", extra: "Yenepoya Hospital, Mangalore", bgClass: "transparent" },
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
    { time: "Screen 1", title: "Robotic ASD - Telesurgery with MantrAsana", speaker: "-Dr. Nitin K Rajput/ Dr. Tania", extra: "Sri Sathya Sai Institute of Medical Sciences, Puttaparthi, AP", bgClass: "bg-[#18345C]" },
    { time: "Screen 2", title: "Mitral Valve Replacement - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ", bgClass: "bg-[#1F4174]" },
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
    { time: "Screen 1", title: "Robotic Mitral Valve Repair - Live Transmission", speaker: "-Dr. Nitin K Rajput", extra: "Medanta Medicity, Gurugram, HR", bgClass: "transparent" },
    { time: "Screen 2", title: "Robotic TECAB - Telesurgery with MantrAsana", speaker: "-Dr. Lalitaditya Malik", extra: "Manipal Hospital, Jaipur, RJ", bgClass: "bg-[#1F4174]" },
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
            April 10'th, 2026
          </div>
          <div className="bg-[#10244C] text-white font-medium text-base md:text-lg flex justify-start items-center px-[20px] py-3 w-full rounded-b-xl">
            DAY 2: AUDI 2 - MULTI SPECIALITY
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
          <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
        </div>
        <div className="flex flex-col mb-4">
          {presentationsMorning.map((item, index) => <ScheduleRow key={`ms-pres-m-${index}`} {...item} />)}
        </div>

        {/* PLENARY KEYNOTE (BEFORE LUNCH) */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-4">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">11:45: AM to 12:30 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Plenary Keynote (Audi-2 & Summit Room)" /></div>
        </div>
        <div className="flex flex-col mb-8">
          <ScheduleRow 
            time="" 
            title="My Journey from Bihar to Bollywood and Hollywood" 
            speaker="-Ms. Neetu Chandra Srivastava" 
            extra="Brand Ambassador SSI, Indian Actress & Producer" 
          />
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
{/* CARDIAC SCHEDULE HEADER */}
        <div className="bg-[#8E1616] text-white font-medium text-base md:text-[17px] flex justify-start items-center px-[20px] py-3.5 w-full rounded-md mt-4 mb-8">
          DAY 2: SUMMIT LOUNGE - CARDIAC
        </div>

        {/* MORNING CARDIAC */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        {/* Morning Split Layout: Left (Screens & Pres) | Right (Chairperson Card) */}
        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-2">
          {/* Left Column */}
          <div className="flex flex-col flex-1 w-full">
            {cardiacSurgeryMorning.map((item, index) => <ScheduleRow key={`cardiac-tele-m-${index}`} {...item} />)}
            
            {/* Presentations Header inside Left Column */}
            <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 mb-2">
              <div className="hidden md:block w-[150px] px-4"></div>
              <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
            </div>

            {/* First 3 Presentations */}
            {cardiacPresentationsMorning.slice(0, 3).map((item, index) => <ScheduleRow key={`cardiac-pres-m-${index}`} {...item} />)}
          </div>

          {/* Right Column */}
          <div className="lg:w-[260px] xl:w-[280px] bg-[#122240] rounded-[4px] p-6 text-[13px] text-gray-200 flex flex-col justify-center">
            <div className="mb-1.5 leading-relaxed">
              <span className="text-white font-normal">Chairperson:</span> Dr. Anubhav Gupta
            </div>
            <div className="leading-relaxed">
              <span className="text-white font-normal">Moderators:</span> Dr. Bijoy Kutty,<br/>
              Dr. Ritwick Raj Bhuyan,<br/>
              Dr. Dhiren Shah,<br/>
              Dr. K.R Balakrishnan
            </div>
          </div>
        </div>

        {/* Remaining Morning Presentations */}
        <div className="flex flex-col mb-4">
          {cardiacPresentationsMorning.slice(3).map((item, index) => <ScheduleRow key={`cardiac-pres-m-end-${index}`} {...item} />)}
        </div>


        {/* PLENARY KEYNOTE (CARDIAC REPEAT) */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-4">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">11:45: AM to 12:30 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Plenary Keynote (Audi-2 & Summit Room)" /></div>
        </div>
        <div className="flex flex-col mb-8">
          <ScheduleRow 
            time="" 
            title="My Journey from Bihar to Bollywood and Hollywood" 
            speaker="-Ms. Neetu Chandra Srivastava" 
            extra="Brand Ambassador SSI, Indian Actress & Producer" 
          />
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />


        {/* AFTERNOON CARDIAC */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        {/* Afternoon Split Layout: Left (Screens & Pres) | Right (Chairperson Card) */}
        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-2">
          {/* Left Column */}
          <div className="flex flex-col flex-1 w-full">
             {cardiacSurgeryAfternoon.map((item, index) => <ScheduleRow key={`cardiac-tele-a-${index}`} {...item} />)}
             
             {/* Presentations Header inside Left Column */}
             <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 mb-2">
               <div className="hidden md:block w-[150px] px-4"></div>
               <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
             </div>
             
             {/* First 3 Presentations */}
             {cardiacPresentationsAfternoon.slice(0, 3).map((item, index) => <ScheduleRow key={`cardiac-pres-a-${index}`} {...item} />)}
          </div>

          {/* Right Column */}
          <div className="lg:w-[260px] xl:w-[280px] bg-[#122240] rounded-[4px] p-6 text-[13px] text-gray-200 flex flex-col justify-center">
            <div className="mb-1.5 leading-relaxed">
              <span className="text-white font-normal">Chairperson:</span> Dr. Jae Won Lee
            </div>
            <div className="leading-relaxed">
              <span className="text-white font-normal">Moderators:</span> Dr. Sudhir Srivastava,<br/>
              Dr. C. S Hiremath,<br/>
              Dr. Z.S Meherwal
            </div>
          </div>
        </div>

    {/* Remaining Afternoon Presentations (Aligned with above) */}
        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-10">
          
          {/* Left Column (Maintains the exact same width as the section above) */}
          <div className="flex flex-col flex-1 w-full">
            {cardiacPresentationsAfternoon.slice(3).map((item, index) => (
              <ScheduleRow key={`cardiac-pres-a-end-${index}`} {...item} />
            ))}
          </div>

          {/* Right Column Spacer (Invisible block that matches the Chairperson card width to force alignment) */}
          <div className="hidden lg:block lg:w-[260px] xl:w-[280px]"></div>
          
        </div>

      </div>
    </div>
  );
};

export default ScheduleDay2;