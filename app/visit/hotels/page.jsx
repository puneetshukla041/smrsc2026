'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/footer';

const hotels = [
  {
    id: 1,
    name: 'The Oberoi, New Delhi',
    distance: '2.6 km',
    rating: '5',
    link: 'https://www.oberoihotels.com/hotels-in-delhi/',
    image: '/images/visit/hotel1.png',
  },
  {
    id: 2,
    name: 'The Lodhi',
    distance: '2.7 km',
    rating: '5',
    link: 'https://www.lhw.com/hotel/Lodhi-New-Delhi-India',
    image: '/images/visit/hotel2.png',
  },
  {
    id: 3,
    name: 'The LaLit',
    distance: '3 km',
    rating: '5',
    link: 'https://www.thelalit.com/the-lalit-delhi/',
    image: '/images/visit/hotel3.png',
  },
  {
    id: 4,
    name: 'Le Meridien, New Delhi',
    distance: '4 km',
    rating: '5',
    link: 'https://www.marriott.com/en-us/hotels/delmd-le-meridien-new-delhi/overview/',
    image: '/images/visit/hotel4.png',
  },
  {
    id: 5,
    name: 'Shangri-La Eros New Delhi',
    distance: '5 km',
    rating: '5',
    link: 'https://www.shangri-la.com/newdelhi/erosshangrila/',
    image: '/images/visit/hotel5.png',
  },
  {
    id: 6,
    name: 'Taj Mahal, New Delhi',
    distance: '5 km',
    rating: '5',
    link: 'https://www.tajhotels.com/en-in/hotels/taj-mahal-new-delhi',
    image: '/images/visit/hotel6.png',
  },
  {
    id: 7,
    name: 'The Imperial, New Delhi',
    distance: '4 km',
    rating: '5',
    link: 'https://www.theimperialindia.com/accommodations/',
    image: '/images/visit/hotel7.png',
  },
  {
    id: 8,
    name: 'The Claridges, New Delhi',
    distance: '5 km',
    rating: '5',
    link: 'https://www.claridges.com/the-claridges-new-delhi/',
    image: '/images/visit/hotel8.png',
  },
  {
    id: 9,
    name: 'Crowne Plaza, New Delhi',
    distance: '6 km',
    rating: '5',
    link: 'https://www.ihg.com/crowneplaza/hotels/us/en/new-delhi/deldd/hoteldetail',
    image: '/images/visit/hotel9.png',
  },
  {
    id: 10,
    name: 'The Metropolitan Hotel & Spa',
    distance: '5 km',
    rating: '4',
    link: 'https://www.hotelmetdelhi.com/',
    image: '/images/visit/hotel10.png',
  },
  {
    id: 11,
    name: 'The Park, New Delhi',
    distance: '5 km',
    rating: '5',
    link: 'https://www.theparkhotels.com/new-delhi/',
    image: '/images/visit/hotel11.png',
  },
];

const HotelsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 bg-[#020617] text-white w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-8 py-10 flex flex-col items-center">
          
          {/* --- Section Title --- */}
          <div className="w-full max-w-[1344px] mb-8 md:mb-12">
             <h2 className="text-3xl md:text-4xl font-semibold font-manrope">
               Stay nearby
            </h2>
          </div>

          {/* --- Hotels Grid --- */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 w-full max-w-[1344px] mb-20">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex flex-col sm:flex-row w-full lg:w-[calc(50%-12px)] xl:max-w-[660px] p-6 gap-6 rounded-[20px] border border-white/10 bg-[#0f172a] transition-all hover:bg-white/5"
              >
                {/* Image */}
                <div className="relative shrink-0 w-full sm:w-auto flex justify-center">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    width={187}
                    height={175}
                    className="w-full sm:w-[187px] h-[200px] sm:h-[175px] rounded-[16px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col w-full h-full justify-between">
                  <div>
                    <h3 className="font-manrope text-[24px] md:text-[26px] font-semibold leading-tight text-white mb-3">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4 font-manrope">
                      <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span>{hotel.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FACC15" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* See More Button */}
                  <div className="flex justify-end mt-4 sm:mt-0">
                    <a 
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold font-manrope hover:bg-gray-200 transition-colors"
                    >
                      See More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Need Help Section --- */}
          <div className="w-full max-w-[1344px] flex flex-col gap-6 mb-20">
            
            {/* Title */}
            <h2 className="text-[#F8FFFF] text-[28px] md:text-[36px] font-semibold leading-normal font-['Blauer_Nue'] w-full max-w-[472px]">
              Need help? We’re here.
            </h2>

            {/* Content Box */}
            <div className="w-full p-6 md:p-8 rounded-[20px] border border-white/10 bg-transparent">
              <div className="flex flex-col gap-6 text-[#F8FFFF] font-manrope text-[16px] md:text-[18px] font-normal leading-[24px]">
                
                <p>
                  Our team can assist with hotel bookings and accommodation-related queries for SMRSC 2026 attendees.
                </p>

                <div>
                  <p>Phone: +91 8130027337, +91 8492010373</p>
                  <p>Mon - Fri, 8:30 to 17:30</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotelsPage;