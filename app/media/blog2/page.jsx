'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

export default function Blog2() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', width: '100%', maxWidth: '1380px', margin: '0 auto', padding: '32px 80px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '36px', background: '#FFF' }}>
        
        <div style={{ width: '100%', maxWidth: '1193px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontFamily: 'Manrope', fontSize: '14px' }}>
          <Link href="/media" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
            <span>&larr; All Blogs</span>
          </Link>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Feb 20, 2026
          </span>
        </div>

        <div style={{ width: '100%', maxWidth: '1193px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ color: '#003A84', fontFamily: 'Manrope', fontSize: '32px', fontStyle: 'normal', fontWeight: '600', lineHeight: '56px', textTransform: 'capitalize', margin: 0 }}>
            The "Check Engine" Light
          </h1>
          
          <p style={{ color: '#03101F', fontFamily: 'Manrope', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: '26px', letterSpacing: '-0.16px', margin: 0 }}>
            Why We Treat Our Cars Better Than Our Bodies
          </p>

          <p style={{ color: '#03101F', fontFamily: 'Manrope', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '-0.16px', margin: 0 }}>
            Imagine you just bought your dream car. You polish it, you use the best fuel, and the second a tiny red light flickers on the dashboard, you rush it to the mechanic. You don't wait for the engine to smoke on the highway before you check the oil.
          </p>

          <p style={{ color: '#03101F', fontFamily: 'Manrope', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: '26px', letterSpacing: '-0.16px', margin: 0 }}>So why do we wait for a heart attack to check our habits?</p>

          <p style={{ color: '#03101F', fontFamily: 'Manrope', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', letterSpacing: '-0.16px', margin: 0 }}>
            In India, we have a strange relationship with health. We treat the body like an old battery—we use it, drain it, and ignore it until it completely dies. We call it "The Hustle." We call it "Sacrifice." But in reality, it's a <span style={{ fontWeight: '600' }}>Prevention Crisis</span>.
          </p>

          <div style={{ marginTop: '20px' }}>
            <Link href="/media" style={{ display: 'flex', width: '48px', height: '48px', padding: '20px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '50px', background: '#CE921B', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                <path d="M9.29298 0.351648L0.293276 11.151C0.200302 11.2625 0.126545 11.3948 0.0762215 11.5405C0.0258999 11.6862 0 11.8423 0 12C0 12.1577 0.0258999 12.3138 0.0762215 12.4595C0.126545 12.6052 0.200302 12.7375 0.293276 12.849L9.29298 23.6484C9.48062 23.8735 9.7351 24 10.0005 24C10.2658 24 10.5203 23.8735 10.7079 23.6484C10.8956 23.4232 11.001 23.1178 11.001 22.7994C11.001 22.481 10.8956 22.1756 10.7079 21.9504L3.41442 13.1999L23 13.1999C23.2652 13.1999 23.5196 13.0735 23.7071 12.8485C23.8946 12.6235 24 12.3182 24 12C24 11.6818 23.8946 11.3766 23.7071 11.1515C23.5196 10.9265 23.2652 10.8001 23 10.8001L3.41442 10.8001L10.7079 2.04955C10.8956 1.8244 11.001 1.51902 11.001 1.2006C11.001 0.882183 10.8956 0.576805 10.7079 0.351648C10.5203 0.126492 10.2658 0 10.0005 0C9.7351 0 9.48062 0.126492 9.29298 0.351648Z" fill="white"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}