import React from 'react';

const Section4 = () => {
  return (
    <section
      id="section4"
      className="h-screen md:h-[130vh] w-full bg-[#020617] flex items-start justify-center pt-20 px-6"
    >
      <div className="max-w-[1380px] w-full flex flex-col gap-2">
        {/* Sub-heading */}
        <h3
          style={{
            color: '#E6E6E6',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '32px',
          }}
          className="flex flex-col justify-center"
        >
          A movement that started with a vision is now reshaping
        </h3>

        {/* Main Heading */}
        <h2
          style={{
            color: '#E3F5F6',
            fontFamily: '"Blauer Nue", sans-serif',
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '86px',
          }}
          className="uppercase tracking-tight"
        >
          THE FUTURE OF ROBOTIC SURGERY
        </h2>
      </div>
    </section>
  );
};

export default Section4;