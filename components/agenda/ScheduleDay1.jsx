'use client';
import React from 'react';

const ScheduleDay1 = () => {
  const plenaryData = [
    { time: "8:50:00 AM", title: "Master of Ceremony", speaker: "- Shruti Mishra" },
    { time: "9:00:00 AM", title: "Welcome Address", speaker: "- Dr. Vishwa Srivastava" },
    { time: "9:05:00 AM", title: "SSI Movie", speaker: "" },
    { time: "9:15:00 AM", title: "Democratization of Robotic Access with SSI Mantra Globally", speaker: "- Dr. Sudhir K Rawal" },
    { time: "9:30:00 AM", title: "Past, Present and Future of Robotic Surgery", speaker: "- Dr. Frederic Moll" },
    { time: "9:45:00 AM", title: "10,000 Robotic Surgeries with SSI Mantra - What have we learnt", speaker: "- Dr. Somashekhar SP" },
    { time: "10:00:00 AM", title: "Expanding the Tele-Surgery Horizons with the MantrAsana", speaker: "- Dr. Venkatesh Munikrishnan" },
    { time: "10:15:00 AM", title: "How Robotics led to a successful program beyond metropolitan cities", speaker: "- Dr. Magan Mehrotra" },
    { time: "10:30:00 AM", title: "International Adoption of SSI Mantra - Panel", speaker: "- Dr. Rabbie, Dr. Iwan, Dr. Dudi, Philippines , Dr. Pedro, Dr. Saroj Baidya\nModerator - Dr. Sudhir Srivastava" },
    { time: "10:50:00 AM", title: "How will robotic surgery decentralize and democratize access - Key Note", speaker: "- Dr. Ashutosh Tewari" },
    { time: "11:30:00 AM", title: "Inauguration Ceremony", speaker: "- Shruti Mishra" },
    { time: "11:35:00 AM", title: "Invite Dignitaries for Lamp Lighting", speaker: "- Shruti Mishra" },
    { time: "11:45:00 AM", title: "National Anthem", speaker: "- Shruti Mishra" },
    { time: "11:50:00 AM", title: "Welcome Address", speaker: "- Dr. Sudhir Srivastava" },
    { time: "12:00:00 PM", title: "Guests of Honor", speaker: "- Sadhguru Madhusudhan Sai" },
    { time: "12:05:00 PM", title: "Guests of Honor", speaker: "- Dr. Sangeeta Reddy" },
    { time: "12:10:00 PM", title: "Guests of Honor", speaker: "- Dr. Naresh Trehan" },
    { time: "12:15:00 PM", title: "Guests of Honor", speaker: "- Dr. Ashutosh Tewari" },
    { time: "12:20:00 PM", title: "Guests of Honor", speaker: "- Dr. Mylswamy Annadurai" },
    { time: "12:25:00 PM", title: "Guests of Honor", speaker: "- Dr. Frederic Moll" },
  ];

  const teleSurgeryData = [
    { time: "1:30:00 PM", title: "Urology - Case TBD", speaker: "- Dr. Sudhir Rawal", extra: "RGCI" },
    { time: "", title: "Gynecology - Myomectomy/Hysterectomy", speaker: "- Dr. Leena Mehrotra", extra: "Apex Moradabad" },
    { time: "", title: "Colorectal", speaker: "- Dr. Venkatesh Munikrishnan", extra: "" },
    { time: "", title: "Robotic Thyroid/Rectum/Thoracic Esophagus/Sentient Lymph Node", speaker: "- Dr. Kushal Agarwal", extra: "Aster CMI" },
    { time: "", title: "Robotic Nipple Sparing Mastectomy", speaker: "- Dr. Somashekhar", extra: "Aster CMI" },
    { time: "", title: "Robotic Pediatric Surgery", speaker: "- Dr. Manjiri Somashekhar", extra: "" },
    { time: "", title: "Robotic General Surgery", speaker: "- Dr. Deep Goel", extra: "" },
    { time: "", title: "Robotic Gynecology Surgery", speaker: "- Dr. Priya Bhave", extra: "" },
    { time: "3:30:00 PM", title: "Panel Discussion: Tips & Tricks, Troubleshooting", speaker: "", extra: "" },
    { time: "4:15:00 PM", title: "Adjourn", speaker: "", extra: "" },
  ];

  const cardiacSurgeryData = [
    { time: "Screen 1", title: "Mitral Valve Replacement - Telesurgery", speaker: "- Dr. Harish Badami", extra: "Malla Reddy Hospital, Hyderabad" },
    { time: "Screen 2", title: "TECAB- Telesurgery", speaker: "- Dr. Lalit Malik", extra: "Manipal Hospital, Jaipur" },
  ];

  const presentationsData = [
    { time: "14:00:00 PM", title: "Hybrid Coronary Vascularization/ Robotic MIDCAB/ CABG off pump and on pump", speaker: "- Dr. John Puskas- Recorded Video", extra: "" },
    { time: "14:10:00 PM", title: "Bilateral IMA Takedown", speaker: "- Dr. MM Yusuf", extra: "Apollo Hospital, Chennai" },
    { time: "14:20:00 PM", title: "My Evolution with Robotic Mitral Valve Surgery", speaker: "- Dr. T. Sloane Guy", extra: "" },
  ];

  // Helper Components matching your requested CSS
  const BeigeEventBar = ({ time, title, extraRight }) => (
    <div style={{
      display: 'flex',
      width: '100%',
      padding: '4px 0',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '4px',
      background: '#E1C583',
      color: '#000',
      marginBottom: '16px'
    }}>
      <div className="flex w-full px-6 font-medium text-[13px] md:text-sm">
        <div className="w-[120px] md:w-[150px]">{time}</div>
        <div className="flex-1">{title}</div>
        {extraRight && <div className="text-right">{extraRight}</div>}
      </div>
    </div>
  );

  const GoldSessionHeader = ({ title }) => (
    <div style={{
      display: 'flex',
      height: '36px',
      padding: '8px 10px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      alignSelf: 'stretch',
      borderRadius: '10px',
      background: '#A7781B',
      backdropFilter: 'blur(2px)',
      color: '#fff',
      marginBottom: '16px',
      fontSize: '14px',
      fontWeight: '500'
    }}>
      {title}
    </div>
  );

  const ScheduleRow = ({ time, title, speaker, extra }) => (
    <div className="flex w-full px-4 md:px-6 py-2.5 text-[12px] md:text-[13px] text-gray-200 items-start hover:bg-white/5 transition-colors rounded-lg">
      <div className="w-[100px] md:w-[150px] flex-shrink-0">{time}</div>
      <div className="flex-1 pr-4 font-light">{title}</div>
      <div className="w-[180px] md:w-[350px] text-right whitespace-pre-line flex-shrink-0 text-gray-300">{speaker}</div>
      {extra !== undefined && (
        <div className="hidden md:block w-[200px] text-right flex-shrink-0 text-gray-400 text-xs">{extra}</div>
      )}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center animate-fadeIn pb-20 pt-10 px-4 md:px-6 bg-[#020617] min-h-screen font-sans">
      
      <div className="w-full max-w-[1340px] flex flex-col overflow-x-auto">
        
        {/* Top Header Match */}
        <div className="flex flex-col mb-8 gap-[2px]">
          <div style={{
            borderRadius: '20px 20px 0 0',
            background: '#E1C583',
            display: 'flex',
            padding: '10px 20px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            color: '#000',
            fontWeight: '600',
            fontSize: '18px'
          }}>
            April 9'th, 2026
          </div>
          <div className="bg-[#1f3f77] text-white font-medium text-lg flex justify-start items-center px-[20px] py-[10px] w-full rounded-b-md">
            DAY 1: AUDI 2
          </div>
        </div>

        {/* Morning Schedule */}
        <BeigeEventBar time="7:30:00 AM" title="Registration and Continental Breakfast" />
        <GoldSessionHeader title="Plenary Session" />
        
        <div className="flex flex-col mb-6">
          {plenaryData.map((item, index) => (
            <ScheduleRow key={index} {...item} />
          ))}
        </div>

        <BeigeEventBar time="12:30:00 PM" title="Lunch" />
        <GoldSessionHeader title="Live Tele Surgery-Multi-Speciality" />

        <div className="flex flex-col mb-6">
          {teleSurgeryData.map((item, index) => (
            <ScheduleRow key={index} {...item} />
          ))}
        </div>

        <BeigeEventBar time="4:30:00 PM" title="Faculty Dinner at SPS House" extraRight="SSI User Group" />

        {/* Afternoon / Cardiac Schedule */}
        <div className="bg-[#1f3f77] text-white font-medium text-lg flex justify-start items-center px-[20px] py-[10px] w-full rounded-md mt-6 mb-8">
          DAY 1: SUMMIT LOUNGE - CARDIAC
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-4">
          <div className="w-full md:w-[150px] text-[13px] text-gray-200 px-4">
            13:30:00 - 15:30:00 PM
          </div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Cardiac - Live Tele Surgery From MantrAsana" />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          {cardiacSurgeryData.map((item, index) => (
            <ScheduleRow key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 gap-4">
          <div className="hidden md:block w-[150px]"></div>
          <div className="flex-1 w-full">
             <GoldSessionHeader title="Presentations" />
          </div>
        </div>

        <div className="flex flex-col mb-10">
          {presentationsData.map((item, index) => (
            <ScheduleRow key={index} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScheduleDay1;