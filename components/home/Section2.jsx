import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Section2 Component
 * Implements an explosive card-fan animation with enlarged card assets.
 * Updated text content to match the provided image: 
 * Digital ID, Secure Vault, Global Network, Smart Assets.
 */
const Section2 = () => {
  const sectionRef = useRef(null);

  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Explosive separation coordinates mapped to scroll [0.4, 0.7]
  // leaf1: Bottom Left
  const leaf1X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-450%"]);
  const leaf1Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "150%"]);

  // leaf2: Top Left
  const leaf2X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-220%"]);
  const leaf2Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-240%"]);

  // leaf3: Top Right
  const leaf3X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "220%"]);
  const leaf3Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-240%"]);

  // leaf4: Bottom Right
  const leaf4X = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "450%"]);
  const leaf4Y = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "150%"]);

  // Smooth opacity curve for entrance and exit
  const opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0]);

  // Labels updated to match the image content
  const cards = [
    { x: leaf1X, y: leaf1Y, id: 1, text: "Global Network" }, // Bottom Left
    { x: leaf2X, y: leaf2Y, id: 2, text: "Digital ID" },      // Top Left
    { x: leaf3X, y: leaf3Y, id: 3, text: "Secure Vault" },    // Top Right
    { x: leaf4X, y: leaf4Y, id: 4, text: "Smart Assets" },    // Bottom Right
  ];

  // Common Text Style Object based on provided specs
  const textStyle = {
    color: '#FFF',
    textAlign: 'center',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    fontFamily: 'Manrope, sans-serif',
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
      className="relative w-full h-[200vh] flex justify-center items-center overflow-visible bg-black"
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        {/* Background Glow */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            width: '80%',
            height: '100%',
            left: '50%',
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 186, 254, 0.35)',
            filter: 'blur(150px)',
            borderRadius: '100%',
          }}
        />

        {/* Main Layout Wrapper */}
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
                      e.target.parentNode.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.parentNode.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                      e.target.parentNode.style.borderRadius = '24px';
                      e.target.parentNode.style.backdropFilter = 'blur(16px)';
                      e.target.parentNode.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.4)';
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
      </div>
    </section>
  );
};

// Main Export Component
export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <div className="h-[50vh] flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Scroll Down</h1>
        <p className="text-gray-400">Experience the fan-out animation</p>
      </div>

      <Section2 />

      <div className="h-[100vh]" />
    </div>
  );
}