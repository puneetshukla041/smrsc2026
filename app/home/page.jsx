import React from 'react';
// Importing sections from the components/home folder
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import Section4  from '@/components/home/Section4';


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Section1 />
      <Section2/> 
      <Section3/>
      <Section4/>

    </div>
  );
};

export default HomePage;