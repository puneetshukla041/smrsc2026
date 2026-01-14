"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Section2 Component
 * Implements an explosive card-fan animation with enlarged card assets.
 * Added text overlays with specific styling requested by the user.
 */
const Section2 = () => {
  const sectionRef = useRef(null);

  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Explosive separation coordinates mapped to scroll [0.4, 0.7]
  const leaf1X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-450%"]);
  const leaf1Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "150%"]);

  const leaf2X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-220%"]);
  const leaf2Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-240%"]);

  const leaf3X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "220%"]);
  const leaf3Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-240%"]);

  const leaf4X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "450%"]);
  const leaf4Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "150%"]);

  // Smooth opacity curve for entrance and exit
  const opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0]);

  // Labels for the cards
  const cards = [
    { x: leaf1X, y: leaf1Y, id: 1, text: "Innovation" },
    { x: leaf2X, y: leaf2Y, id: 2, text: "Efficiency" },
    { x: leaf3X, y: leaf3Y, id: 3, text: "Security" },
    { x: leaf4X, y: leaf4Y, id: 4, text: "Scalability" },
  ];

  // Common Text Style Object based on provided specs
  const textStyle = {
    color: '#FFF',
    textAlign: 'center',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    fontFamily: 'Manrope, sans-serif',
    // Responsive font size using min() to match card scaling
    fontSize: 'min(3.2vw, 52px)', 
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.572px',
    textTransform: 'capitalize',
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen flex justify-center items-center overflow-visible bg-transparent"
    >
      
      {/* Constant Background Glow */}
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

      {/* Main Layout Wrapper (Locked to 1693px Design Stage) */}
      <div 
        className="relative z-10 flex justify-center items-center w-full"
        style={{ 
          maxWidth: '1693px', 
          aspectRatio: '1693 / 861',
          padding: '0 114px',
        }}
      >
        <div className="relative flex justify-center items-center w-full h-full">
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              style={{ 
                x: card.x,
                y: card.y,
                opacity: opacity,
                width: 'min(24vw, 400px)', 
                height: 'min(19.8vw, 330px)',
              }}
              className="absolute"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* The Card Image */}
                <img
                  src="/images/home/section2/card.png"
                  alt={`SMRSC Card Leaf ${card.id}`}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }}
                  className="absolute inset-0 pointer-events-none"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'rgba(0, 186, 254, 0.15)';
                    e.target.parentNode.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.target.parentNode.style.borderRadius = '20px';
                    e.target.parentNode.style.backdropFilter = 'blur(10px)';
                  }}
                />

                {/* The Text Overlay */}
                <div 
                  className="relative z-20 px-4 select-none pointer-events-none"
                  style={textStyle}
                >
                  {card.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;