import React from 'react';

const Section2 = () => {
  return (
    <section className="relative w-full flex justify-center items-center overflow-visible">
      {/* Glow continuation from Section 1 */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          width: '80%',
          height: '100%',
          left: '50%',
          top: '0', 
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 186, 254, 0.80)',
          filter: 'blur(300px)',
          borderRadius: '100%',
        }}
      />

      {/* Main Container with Exact Figma Margins and Dimensions */}
      <div 
        className="relative z-10"
        style={{ 
          marginLeft: '114px', 
          marginRight: '114px',
          width: 'calc(100vw - 228px)',
          maxWidth: '1693px', 
          aspectRatio: '1693 / 861',
        }}
      >
        {/* Section 2 Content will be placed here exactly within the frame */}
      </div>
    </section>
  );
};

export default Section2;