"use client";
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section2 Component - Ultra-Deep Cinematic Edition
 * - Cards: Exact coordinates preserved with an added "floating" idle state.
 * - Title: "Clinical Outcomes" pushed to the extreme bottom.
 * - Physics: Heavy, luxurious spring movements.
 * - Animation Logic: Triggers once on scroll down, persists on scroll up.
 */
const Section2 = () => {
  const cards = [
    { id: 1, value: "7800+", label: "Surgeries", x: -450, y: 150 },
    { id: 2, value: "165+", label: "Mantra Installations", x: -250, y: -200 },
    { id: 3, value: "1400+", label: "Robotic Surgeons Trained", x: 250, y: -200 },
    { id: 4, value: "120+", label: "Telesurgeries", x: 450, y: 150 },
  ];

  // --- STYLES ---

  const numericStyle = {
    color: '#FFF',
    textAlign: 'center',
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.3), 0 4px 4px rgba(0, 0, 0, 0.25)',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '52px',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.572px',
    textTransform: 'capitalize',
  };

  const labelStyle = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.198px',
    textTransform: 'capitalize',
  };

  const titleStyle = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '64px',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.704px',
    textTransform: 'capitalize',
  };

  // --- ANIMATION VARIANTS ---

  const lotusVariants = {
    hidden: { x: 0, y: 0, scale: 0.5, opacity: 0 },
    visible: (i) => ({
      x: cards[i].x,
      y: cards[i].y,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 35, // Softer for more "cinematic" weight
        damping: 12,
        mass: 1.5,
        delay: i * 0.15,
      }
    })
  };

  // Floating idle animation after the bloom is finished
  const floatTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.2, // Appears just as the last card settles
      }
    }
  };

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-visible bg-transparent">
      
      {/* BACKGROUND GLOW */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          width: '80%',
          height: '100%',
          left: '50%',
          top: '0', 
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 186, 254, 0.80)',
          filter: 'blur(350px)',
          borderRadius: '100%',
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* DATA CARDS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {cards.map((card, i) => (
            <motion.div 
              key={card.id}
              custom={i}
              variants={lotusVariants}
              initial="hidden"
              whileInView="visible"
              // Setting once: true ensures animation doesn't reset when scrolling up
              viewport={{ once: true, amount: 0.2 }}
              animate={{
                // Adds a gentle float after the bloom
                y: [cards[i].y, cards[i].y - 15, cards[i].y],
              }}
              transition={{
                y: floatTransition,
              }}
              style={{ 
                width: '400px', 
                height: '330px',
                position: 'absolute',
                willChange: 'transform'
              }}
              className="flex items-center justify-center pointer-events-auto"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/images/home/section2/card.png"
                  alt={card.label}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  className="absolute inset-0 pointer-events-none"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentNode;
                    parent.style.background = 'rgba(0, 186, 254, 0.15)';
                    parent.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    parent.style.borderRadius = '24px';
                    parent.style.backdropFilter = 'blur(15px)';
                  }}
                />

                <div className="relative z-20 flex flex-col items-center justify-center px-4 select-none pointer-events-none">
                  <div style={numericStyle}>{card.value}</div>
                  <div style={labelStyle}>{card.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAXIMUM DEPTH TITLE "Clinical Outcomes" */}
        <motion.div
          style={titleStyle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          // Setting once: true ensures title stays visible once revealed
          viewport={{ once: true, amount: 0.9 }}
          className="mt-[620px] z-30 select-none"
        >
          Clinical Outcomes
        </motion.div>

      </div>
    </section>
  );
};

export default Section2;