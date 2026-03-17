'use client';
import React from 'react';

const guestData = [
  {
    id: 1,
    name: 'Sri Madhusudan Sai',
    title: 'Global humanitarian and founder of a worldwide free healthcare mission',
    image: '/images/about/guest/image1.png', 
  },
  {
    id: 2,
    name: 'Dr. Frederic Moll',
    title: 'Pioneer in Surgical Robotics',
    image: '/images/about/guest/image2.png', 
  },
  {
    id: 3,
    name: 'Dr. Naresh Trehan',
    title: 'Managing Director, Medanta',
    image: '/images/about/guest/image3.png', 
  },
  {
    id: 4,
    name: 'Dr. Mylswamy Annadurai',
    title: 'Former Director, ISRO Satellite Centre',
    image: '/images/about/guest/image4.png', 
  },
  {
    id: 5,
    name: 'Dr. Ashutosh Tewari',
    title: 'Chairman, Department of Urology at the Icahn School of Medicine at Mount Sinai',
    image: '/images/about/guest/image5.png', 
  },
];

const GuestsTab = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-white bg-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-[1440px] w-full flex flex-col gap-24 md:gap-32 px-6 md:px-16 lg:px-24">
        {guestData.map((guest, index) => {
          // Alternates layout: Evens (0, 2, 4) have Image on Right, Odds (1, 3) have Image on Left
          const isImageLeft = index % 2 !== 0;

          return (
            <div 
              key={guest.id} 
              className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 ${
                !isImageLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-[85%] sm:w-[400px] md:w-[450px] lg:w-[561px] aspect-[51/62] relative flex-shrink-0">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col text-center md:text-left w-full md:max-w-[500px]">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 tracking-wide leading-tight">
                  {guest.name}
                </h3>
                <p className="text-[#F8FFFF] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                  {guest.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestsTab;
