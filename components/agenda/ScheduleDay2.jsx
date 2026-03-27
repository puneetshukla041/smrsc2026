'use client';
import React from 'react';

const ScheduleDay2 = () => {
  const teleSurgeryMorning = [
    { time: "9:40 AM to 9:50 AM", title: "Robotic Hysterectomy/Myomectomy", speaker: "-Dr. Husam Balkhy", extra: "UCL, London, UK", bgClass: "transparent" },
    { time: "Screen 4", title: "Sacrocolopexy", speaker: "-Dr. Kushal Agarwal", extra: "Marengo Asia Hospitals", bgClass: "bg-[#1F4174]" },
    { time: "2:00 PM to 2:10 PM", title: "Robotic ASD", speaker: "-Dr. Manish Chand", extra: "Rajiv Gandhi Cancer Institute", bgClass: "bg-[#18345C]" },
    { time: "Screen 1", title: "Case to be decided", speaker: "-Dr. Magan Mehrotra", extra: "Apex Hospital", bgClass: "bg-[#1F4174]" },
  ];

  const presentationsMorning = [
    { time: "Screen 3", title: "Continence Matters", speaker: "-Dr. Somashekhar SP", extra: "Bunda Hospital, Jakarta" },
    { time: "11:30:00 AM", title: "Esophagectomy - Telesurgery", speaker: "-Dr. M Ramalingam", extra: "Aster CMI Hospital, Bengaluru, KA" },
    { time: "3:40 PM to 3:50 PM", title: "Robotic Nephrectomy", speaker: "-Dr. Amit Tandon", extra: "Aadhar Hospital, Hisar" },
    { time: "Screen 2", title: "Tips and Tricks- Panel Discussion", speaker: "-Dr Deepak Mittal/ Dr Harish Sharma", extra: "Kaizen Hospital" },
    { time: "10:10 AM to 10:20 AM", title: "Gastric Bypass Surgery", speaker: "-Dr. Amitabh Singh", extra: "Hindusthan Hospital" },
  ];

  const teleSurgeryAfternoon = [
    { time: "4:30 PM to 4:40 PM", title: "Robotic Whipples", speaker: "-Dr. Ritesh Mongha", extra: "IRCAD, Indore", bgClass: "bg-[#1F4174]" },
    { time: "Screen 1", title: "Partial Nephrectomy", speaker: "-Dr. Mohit Bhandari", extra: "Yenepoya Hospital", bgClass: "transparent" },
    { time: "10:40 AM to 10:50 AM", title: "Colorectal - Live Transmission", speaker: "-Dr. Ivan Rizal Sinai", extra: "Dr. Kamlesh Tandon Hospital", bgClass: "transparent" },
    { time: "Screen 4", title: "Robotic Bilateral Inguinal Hernia", speaker: "-Dr. Sachin Mittal", extra: "Aster CMI Hospital", bgClass: "transparent" },
  ];

  const presentationsAfternoon = [
    { time: "9:00 AM to 9:10 AM", title: "TBD", speaker: "-Dr. Leena Mehrotra", extra: "Prashanth Hospitals" },
    { time: "Screen 2", title: "Robotic Gyne Onco Experience", speaker: "-Dr. Mujeebu Rahiman M", extra: "Apex Hospital, Moradabad" },
    { time: "5:00:00 PM", title: "Challenging Robotic Reconstructive Surgeries", speaker: "-Dr. Vikrant Sharma", extra: "Meenakshi Hospital" },
    { time: "2:50 PM to 3:00 PM", title: "Hernia - Telesurgery", speaker: "-Dr. Dr. Parimuthukumar Rajappa", extra: "Marengo Asia Hospitals" },
    { time: "4:10 PM to 4:20 PM", title: "Adjourn", speaker: "", extra: "" },
    { time: "2:30 PM to 2:40 PM", title: "Utilisation of ICG", speaker: "", extra: "" },
    { time: "Screen 3", title: "Tips and Tricks: Panel Discussion", speaker: "-Dr. Somashekhar SP / Dr. Kushal Agrawal", extra: "Yenepoya Hospital, Mangalore, KA" },
    { time: "4:40:00 PM", title: "Robotic Fundoplication", speaker: "", extra: "UCL, London, UK" },
    { time: "3:10 PM to 3:20 PM", title: "TBD", speaker: "", extra: "" },
  ];

  const cardiacSurgeryMorning = [
    { time: "11:20 AM to 11:45 AM", title: "Step by Step Approach to building Robotic Mitral Valve Program", speaker: "-Dr. Anuj Kumar", extra: "Sri Sathya Sai Institute of Medical Sciences", bgClass: "bg-[#18345C]" },
    { time: "Screen 2", title: "Robotic TECAB", speaker: "-Dr. Justin Reeves/ Dr. Rus White", extra: "Manipal Hospital, Jaipur, RJ", bgClass: "bg-[#1F4174]" },
  ];

  const cardiacPresentationsMorning = [
    { time: "4:10 PM to 4:20 PM", title: "Mitral Valve Replacement", speaker: "-Dr. Lalitaditya Malik", extra: "Apollo Hospital, Chennai, TN" },
    { time: "9:50 AM to 10:00 AM", title: "Can SSI Mantra System be used for Pediatric Cardiac Surgery", speaker: "-Dr. Nitin K Rajput/ Dr. Tania", extra: "Providence Health & Services, Washington." },
    { time: "Screen 1", title: "Step by Step Approach to Robotic Cardiac Surgery", speaker: "-Dr. Arunkumar Ulaganathan", extra: "Medanta, Patna, Bihar" },
    { time: "3:40 PM to 3:50 PM", title: "Anastomotic Challenges in Robotic CABG", speaker: "-Dr. Sudhir Srivastava", extra: "Adhar Hospital, Hisar, HR" },
    { time: "10:10 AM to 10:20 AM", title: "Panel Discussions: Tips and Tricks", speaker: "-Dr. Husam Balkhy", extra: "The University of Chicago Medicine and Biological Sciences , USA" },
    { time: "2:30 PM to 2:40 PM", title: "Bilateral IMA Takedown", speaker: "-Dr. Danny Ramzy", extra: "KG Hospital, Coimbatore, TN" },
    { time: "9:00 AM to 9:10 AM", title: "Robotic Mitral Valve Repair - Live Transmission", speaker: "-Dr. Deepak Mittal", extra: "" },
  ];

  const cardiacSurgeryAfternoon = [
    { time: "10:40 AM to 10:50 AM", title: "Opportunities and Challenges in Starting Robotic Cardiac Program", speaker: "-Dr. C. S Hiremath", extra: "Medanta Medicity, Gurugram, HR", bgClass: "transparent" },
    { time: "3:10 PM to 3:20 PM", title: "Adjourn", speaker: "-Dr. MM Yusuf", extra: "Manipal Hospital, Jaipur, RJ", bgClass: "bg-[#1F4174]" },
  ];

  const cardiacPresentationsAfternoon = [
    { time: "Screen 1", title: "Use of Teleproctoring and Telesurgery", speaker: "-Dr. Husam Balkhy", extra: "Memorial Hermann Memorial City Medical Center, Houston, Texas" },
    { time: "9:40 AM to 9:50 AM", title: "Robotic ASD - Telesurgery", speaker: "-Dr. Jae Won Lee", extra: "Buchon Sejong Hospital, Seoul, South Korea" },
    { time: "2:00 PM to 2:10 PM", title: "Tips and Tricks - Panel Discussion", speaker: "-Dr. Nitin K Rajput", extra: "The University of Chicago Medicine and Biological Sciences , USA" },
    { time: "Screen 2", title: "Emergence of Robotic Cardiac Surgery", speaker: "", extra: "" },
    { time: "4:30 PM to 5:00 PM", title: "Step by Step Approach to building Robotic Revascularization Program", speaker: "", extra: "" },
    { time: "11:10 AM to 11:20 AM", title: "Robotics in Thoracic Surgery", speaker: "-Dr. Lalitaditya Malik", extra: "" },
    { time: "5:00:00 PM", title: "Cannulation and Myocardial Preservation", speaker: "", extra: "Sri Sathya Sai Hospital, Muddenhalli, Karnataka" },
    { time: "2:50 PM to 3:00 PM", title: "Robotic Aortic Valve Replacement", speaker: "", extra: "" },
  ];

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
        
        <div className="flex flex-col mb-8">
          <div className="flex justify-start items-center w-full bg-[#E1C583] text-[#000] font-semibold text-[16px] md:text-[18px] px-5 py-3 rounded-t-xl">
            April 10'th, 2026
          </div>
          <div className="bg-[#10244C] text-white font-medium text-base md:text-lg flex justify-start items-center px-[20px] py-3 w-full rounded-b-xl">
            DAY 2: AUDI 2 - MULTI SPECIALITY
          </div>
        </div>

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

        <div className="bg-[#8E1616] text-white font-medium text-base md:text-[17px] flex justify-start items-center px-[20px] py-3.5 w-full rounded-md mt-4 mb-8">
          DAY 2: SUMMIT LOUNGE - CARDIAC
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">8:30:00 AM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-2">
          <div className="flex flex-col flex-1 w-full">
            {cardiacSurgeryMorning.map((item, index) => <ScheduleRow key={`cardiac-tele-m-${index}`} {...item} />)}
            
            <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 mb-2">
              <div className="hidden md:block w-[150px] px-4"></div>
              <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
            </div>

            {cardiacPresentationsMorning.slice(0, 3).map((item, index) => <ScheduleRow key={`cardiac-pres-m-${index}`} {...item} />)}
          </div>

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

        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-4">
          <div className="flex flex-col flex-1 w-full">
            {cardiacPresentationsMorning.slice(3).map((item, index) => (
              <ScheduleRow key={`cardiac-pres-m-end-${index}`} {...item} />
            ))}
          </div>
          <div className="hidden lg:block lg:w-[260px] xl:w-[280px]"></div>
        </div>

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

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-1 mt-6">
          <div className="w-full md:w-[150px] text-[13px] text-gray-300 px-4 mb-2 md:mb-5">1:30:00 PM</div>
          <div className="flex-1 w-full"><GoldSessionHeader title="Cardiac - Live Tele Surgery" /></div>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-2">
          <div className="flex flex-col flex-1 w-full">
             {cardiacSurgeryAfternoon.map((item, index) => <ScheduleRow key={`cardiac-tele-a-${index}`} {...item} />)}
             
             <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 mb-2">
               <div className="hidden md:block w-[150px] px-4"></div>
               <div className="flex-1 w-full"><GoldSessionHeader title="Presentations" /></div>
             </div>
             
             {cardiacPresentationsAfternoon.slice(0, 3).map((item, index) => <ScheduleRow key={`cardiac-pres-a-${index}`} {...item} />)}
          </div>

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

        <div className="flex flex-col lg:flex-row w-full items-stretch gap-2 mb-10">
          <div className="flex flex-col flex-1 w-full">
            {cardiacPresentationsAfternoon.slice(3).map((item, index) => (
              <ScheduleRow key={`cardiac-pres-a-end-${index}`} {...item} />
            ))}
          </div>
          <div className="hidden lg:block lg:w-[260px] xl:w-[280px]"></div>
        </div>

      </div>
    </div>
  );
};

export default ScheduleDay2;