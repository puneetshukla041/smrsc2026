'use client';
import React from 'react';
import Link from 'next/link'; // Added import for redirection

// Data updated to include .png paths, text, and the link paths
const blogsData = [
  {
    id: 1,
    image: '/images/media/blog1.png',
    title: 'Are We Building, or Just Branding?',
    subtitle: 'A Hard Question for Atmanirbhar Bharat',
    link: '/media/blog1' // Added redirection path
  },
  {
    id: 2,
    image: '/images/media/blog2.png',
    title: 'When Distance Decides Survival',
    subtitle: 'How Telesurgery is Redefining Equity in Indian Healthcare',
    link: '/media/blog2' // Added redirection path
  },
  {
    id: 3,
    image: '/images/media/blog3.png',
    title: 'MantrAsana:',
    subtitle: 'The Future of Remote Surgery Begins Here',
    link: '/media/blog3' // Added redirection path
  }
];

const Blogs = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-10 pb-10 px-4 md:px-0">
      {blogsData.map((blog) => (
        <Link 
          href={blog.link}
          key={blog.id}
          // EXACT same classes - UI will not change
          className="relative w-full max-w-[434px] h-[412px] rounded-[20px] overflow-hidden shrink-0 group cursor-pointer shadow-lg flex justify-center items-end pb-[15px]"
        >
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ 
              // Using standard cover to ensure it fits the 434x412 box perfectly
              background: `url(${blog.image}) lightgray 50% / cover no-repeat`,
            }}
          />
          
          {/* Gradient Overlay Layer */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 66.65%, rgba(0, 0, 0, 0.50) 100%)'
            }}
          />
          
          {/* Text Content Layer (The Text Box) */}
          <div 
            className="relative z-10 flex flex-col items-start gap-[4px] p-[15px] rounded-[16px] w-[90%] max-w-[389px]"
            style={{ 
              background: 'rgba(9, 9, 9, 0.35)',
              // We use 90% width with max-w to keep it responsive on very small phones, 
              // but it hits your exact 389px design width on normal screens.
            }}
          >
            {/* Main Text */}
            <h3 
              className="text-[#F8FFFF] text-[18px] font-normal leading-[20px]"
              style={{ fontFamily: '"Blauer Nue", sans-serif' }}
            >
              {blog.title}
            </h3>
            
            {/* Small Text Line */}
            <p 
              className="text-[#F8FFFF] text-[14px] font-normal leading-[20px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {blog.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;