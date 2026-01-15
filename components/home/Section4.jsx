// components/Section4.tsx
import React from 'react';

const Section4 = () => {
  return (
    <section 
      id="section4" 
      /* h-screen: standard height on mobile (default)
         md:h-[150vh]: 1.5x height on tablets and laptops
      */
      className="h-screen md:h-[150vh] w-full bg-background"
    />
  );
};

export default Section4;