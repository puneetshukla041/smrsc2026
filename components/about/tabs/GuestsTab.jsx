'use client';
import React from 'react';

const guestData = [
  {
    id: 1,
    name: 'Dr. Frederic Moll',
    title: 'Pioneer in Surgical Robotics',
    image: '/images/about/guest/image1.png', 
    alignLeft: true,
  },
  {
    id: 2,
    name: 'Dr. Mylswamy Annadurai',
    title: 'Former Director, ISRO Satellite Centre',
    image: '/images/about/guest/image2.png', 
    alignLeft: false,
  },
  {
    id: 3,
    name: 'Dr. Naresh Trehan',
    title: 'Managing Director, Medanta',
    image: '/images/about/guest/image3.png', 
    alignLeft: true,
  },
];

const GuestsTab = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Navigation Links (maintained from original design) */}
      <div className="w-full flex justify-start items-center gap-2 mb-20 px-10">
        {["About SMRSC", "Organizing Committee", "Chief Guests", "Faculty"].map((tab, index) => (
          <button 
            key={tab} 
            className={`px-4 py-1.5 rounded-full text-sm border ${index === 2 ? 'bg-white text-dark-blue border-white' : 'border-neutral-700 text-neutral-400'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-[1440px] w-full flex flex-col gap-24 md:gap-32 px-10 md:px-24">
        {guestData.map((guest) => (
          <div 
            key={guest.id} 
            className={`flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 ${
              !guest.alignLeft ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Container with precise fixed dimensions (width: 561px, height: 682px) */}
            <div className="w-[561px] h-[682px] aspect-[51/62] relative flex-shrink-0">
              <img 
                src={guest.image} 
                alt={guest.name} 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Text Container */}
            <div className={`flex flex-col text-center ${guest.alignLeft ? 'md:text-left' : 'md:text-right'} w-full md:w-[480px]`}>
              <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide leading-tight">
                {guest.name}
              </h3>
              <p className="text-[#A1A1AA] text-xl md:text-2xl font-light leading-relaxed">
                {guest.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestsTab;