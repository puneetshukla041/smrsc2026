'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const events = [
  // Column 1 (Left)
  { id: 1, src: "/images/pastevent/24/image1.webp", title: "Inaugural lamp lighting by distinguished guests." },
  { id: 4, src: "/images/pastevent/24/image4.webp", title: "Live robotic surgery telecast in the conference." },
  { id: 7, src: "/images/pastevent/24/image7.webp", title: "Dr. Sudhir Srivastava demonstrating live telesurgery." },
  { id: 10, src: "/images/pastevent/24/image10.webp", title: "Delegates experiencing the SSI Mantra system hands-on." },
  
  // Column 2 (Center - Offset)
  { id: 2, src: "/images/pastevent/24/image2.webp", title: "Dr. Sudhir Srivastava addressing delegates at SMRSC." },
  { id: 5, src: "/images/pastevent/24/image5.webp", title: "Keynote address by distinguished guests." },
  { id: 8, src: "/images/pastevent/24/image8.webp", title: "Honoring guest speakers at SMRSC." },
  { id: 11, src: "/images/pastevent/24/image11.webp", title: "Delegates engaged in sessions at the SMRSC." },
  
  // Column 3 (Right)
  { id: 3, src: "/images/pastevent/24/image3.webp", title: "Unveiling of Mantra highlights at SMRSC 2024." },
  { id: 6, src: "/images/pastevent/24/image6.webp", title: "Cultural musical performance." },
  { id: 9, src: "/images/pastevent/24/image9.webp", title: "Expert faculty engaged in scientific discussions." },
  { id: 12, src: "/images/pastevent/24/image12.webp", title: "Session led by expert faculty." },
];

const EventCard = ({ item }) => (
  <div className="flex flex-col items-center w-full max-w-[385px] mx-auto">
    {/* Image Container - Using aspect ratio for responsive scaling */}
    <div className="relative w-full aspect-[385/361] rounded-[16px] overflow-hidden bg-gray-800">
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 385px"
        unoptimized={true}     // ⚡ ZERO BUFFERING
        loading="eager"        // ⚡ FORCES DOWNLOAD
        fetchPriority="low"    // ⚡ BACKGROUND PRIORITY
      />
    </div>

    {/* Text Container */}
    <div 
      className="mt-4 md:mt-6 text-white w-full px-2"
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      }}
    >
      {item.title}
    </div>
  </div>
);

const SMRSC2024 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const col1 = events.filter((_, i) => i < 4); 
  const col2 = events.filter((_, i) => i >= 4 && i < 8);
  const col3 = events.filter((_, i) => i >= 8);

  const videoId = "QZwgLY869GA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-full flex flex-col items-center py-12 md:py-20 overflow-x-hidden px-4 md:px-8">
      
      <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center">
        
        {/* --- Image Grid Section --- */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full gap-12 lg:gap-[50px] xl:gap-[100px] mb-20 lg:mb-[150px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-[220px] w-full lg:w-1/3">
            {col1.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Column 2 (Offset on Desktop) */}
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-[220px] w-full lg:w-1/3 lg:pt-[220px]">
            {col2.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-[220px] w-full lg:w-1/3">
            {col3.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* --- YouTube Video Section --- */}
        <div className="w-full flex flex-col gap-6 md:gap-8">
          <h2 
            className="text-2xl md:text-3xl lg:text-[36px]"
            style={{ 
              color: '#F8FFFF', 
              fontFamily: '"Blauer Nue", sans-serif', 
              fontStyle: 'normal', 
              fontWeight: 500, 
              lineHeight: '1.2' 
            }}
          >
            SMRSC 2024 Highlights
          </h2>

          <div 
            className="relative w-full aspect-video rounded-[12px] md:rounded-[20px] overflow-hidden shadow-2xl group cursor-pointer"
            style={{
              background: isPlaying 
                ? 'black' 
                : `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-1 w-8 h-8 md:w-10 md:h-10"
                  >
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                title="SMRSC 2024 Highlights" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="w-full h-full rounded-[12px] md:rounded-[20px]"
              ></iframe>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SMRSC2024;