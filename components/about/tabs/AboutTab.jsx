'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FadeInView = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => { if (currentElement) observer.unobserve(currentElement); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutTab = () => {
  const conferenceCards = [
    { text: "National & International Renowned Faculty", src: "/images/about/section2/image1.webp" },
    { text: "Live robotic surgery in multi speciality", src: "/images/about/section2/image2.webp" },
    { text: "Live telesurgery & Teleproctoring", src: "/images/about/section2/image3.webp" },
    { text: "Exclusive academic workshops, Presentations & Showcases", src: "/images/about/section2/image4.webp" }
  ];

  const benefitCards = [
    { text: "Surgeons & Medical Professionals", src: "/images/about/benifit/image1.webp" },
    { text: "Researchers and Innovators", src: "/images/about/benifit/image2.webp" },
    { text: "Healthcare Administrators", src: "/images/about/benifit/image3.webp" },
    { text: "Student & Trainees", src: "/images/about/benifit/image4.webp" }
  ];

  const youtubeVideoId = "48CTgZ8oB_w";
  const benefitTextStyle = { color: '#E3F5F6', fontFamily: "'Manrope', sans-serif", fontWeight: 500 };

  return (
    <div className="flex flex-col w-full pb-20 px-4 md:px-10 lg:px-16 xl:px-0 mx-auto max-w-[1380px]">
      
      {/* Hero Text */}
      <FadeInView>
        <p className="w-full text-[#E3F5F6] text-xl md:text-[28px] xl:text-[32px] font-medium leading-relaxed md:leading-[40px] mb-12 md:mb-[80px] lg:mb-[100px] xl:mb-[180px]">
          SMRSC is a global multi-specialty robotic surgery conference bringing together surgeons, innovators, educators, and healthcare leaders.
        </p>
      </FadeInView>

      {/* Video Container */}
      <FadeInView delay={100}>
        <div className="relative w-full bg-black overflow-hidden shadow-2xl rounded-[20px] md:rounded-[40px] aspect-video">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`} 
            title="SMRSC Conference Video" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </FadeInView>

      {/* Heading Section */}
      <FadeInView>
        <div className="w-full mt-16 md:mt-32 lg:mt-40">
          <div className="text-[#E6E6E6] text-lg md:text-2xl font-medium mb-2">A global stage for</div>
          <h2 className="text-[#E3F5F6] text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight uppercase font-blauer">
            SURGICAL BREAKTHROUGHS
          </h2>
        </div>
      </FadeInView>

      {/* Conference Cards */}
      <div className="w-full mt-16 md:mt-32">
        <FadeInView>
          <h3 className="text-[#F8FFFF] text-2xl md:text-4xl font-medium mb-8 font-blauer">Conference at glance</h3>
        </FadeInView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {conferenceCards.map((card, index) => (
            <FadeInView key={index} delay={index * 100}>
              <div className="flex flex-col gap-4 group">
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] md:aspect-[645/459] bg-white/5">
                  <Image src={card.src} alt={card.text} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                </div>
                <div className="flex items-center p-5 md:p-6 min-h-[80px] rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-[#E3F5F6] text-lg md:text-xl font-semibold leading-tight font-blauer">{card.text}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Benefit Cards - Refined for Laptop screens */}
      <div className="w-full mt-24 md:mt-40">
        <FadeInView>
          <h3 className="text-[#F8FFFF] text-2xl md:text-4xl font-medium mb-12 font-blauer">Who will benefit</h3>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-16 xl:gap-y-24">
          {benefitCards.map((card, index) => {
            const isEven = index % 2 !== 0; 
            return (
              <FadeInView key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row items-center w-full group`}>
                  
                  {/* Image Part - More flexible sizing for Laptops */}
                  <div className={`
                    relative w-full h-[240px] 
                    md:w-[180px] md:h-[220px] 
                    lg:w-[200px] lg:h-[240px] 
                    xl:w-[228px] xl:h-[260px] 
                    rounded-[16px] overflow-hidden z-10 flex-shrink-0
                    md:absolute ${isEven ? 'md:right-0' : 'md:left-0'}
                  `}>
                    <Image src={card.src} alt={card.text} fill className="object-cover" unoptimized />
                  </div>
                  
                  {/* Text Part - Adjusted padding/margins for Laptops */}
                  <div className={`
                    w-full 
                    md:w-[90%] 
                    bg-white/5 border border-white/5 backdrop-blur-lg rounded-[16px]
                    p-6 pt-10 
                    md:p-8 
                    mt-[-30px] md:mt-0 
                    min-h-[140px] md:min-h-[180px]
                    flex items-center
                    ${isEven 
                      ? 'md:pr-[160px] lg:pr-[180px] xl:pr-[220px] md:text-left md:ml-0' 
                      : 'md:pl-[160px] lg:pl-[180px] xl:pl-[220px] md:justify-end md:text-right md:mr-0'
                    }
                  `}>
                    <p style={benefitTextStyle} className="text-xl md:text-2xl leading-snug lg:max-w-[300px]">
                      {card.text}
                    </p>
                  </div>

                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');
        .font-blauer { font-family: 'Blauer Nue', sans-serif; }
      `}</style>
    </div>
  );
};

export default AboutTab;