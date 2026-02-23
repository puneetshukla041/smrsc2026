'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

export default function Blog3() {
  // Shared text styles to keep code clean and match your exact properties
  const regularText = {
    color: '#03101F',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px', // 162.5%
    letterSpacing: '-0.16px',
    alignSelf: 'stretch', 
    margin: 0
  };

  const boldText = {
    ...regularText,
    fontWeight: '600', 
  };

  const extraBoldText = {
    ...regularText,
    fontWeight: '700', 
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#020b14', overflow: 'hidden' }}>
      <Header />
      
      {/* Exact Top Background Image Requested with Bottom Fade */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1920px',
        height: '1281px',
        aspectRatio: '640/427',
        // Applied the linear-gradient overlay to fade into the #020b14 background
        background: `linear-gradient(to bottom, rgba(2, 11, 20, 0) 50%, rgba(2, 11, 20, 1) 100%), url('/images/media/blogbg.png') lightgray 50% / cover no-repeat`,
        zIndex: 0
      }} />
      
      {/* Main Content Wrapper */}
      <main style={{ 
        flexGrow: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        paddingTop: '160px', // Pushes content down past the fixed header
        paddingBottom: '80px',
        zIndex: 1 // Keeps the content above the absolute background
      }}>
        
        {/* The White Card Container - Exact Properties Applied */}
        <div style={{ 
          display: 'flex', 
          width: '1380px', 
          maxWidth: '90%', // Fallback for smaller screens
          padding: '32px 80px', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FFF',
          gap: '36px',
          borderRadius: '8px', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' 
        }}>
          
          {/* Top Meta Data (Back Link & Date) */}
          <div style={{ width: '100%', maxWidth: '1193px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontFamily: 'Manrope', fontSize: '14px' }}>
            <Link href="/media" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '18px' }}>&larr;</span> <span>All Blogs</span>
            </Link>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Feb 20, 2026
            </span>
          </div>

          {/* Text Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '1193px' }}>
            
            <h1 style={{ 
              color: '#003A84', 
              fontFamily: 'Manrope, sans-serif', 
              fontSize: '32px', 
              fontStyle: 'normal', 
              fontWeight: '600', 
              lineHeight: '56px', // 175%
              textTransform: 'capitalize', 
              alignSelf: 'stretch',
              margin: 0 
            }}>
              The "Check Engine" Light
            </h1>
            
            <p style={boldText}>Why We Treat Our Cars Better Than Our Bodies</p>

            <p style={regularText}>
              Imagine you just bought your dream car. You polish it, you use the best fuel, and the second a tiny red light flickers on the dashboard, you rush it to the mechanic. You don't wait for the engine to smoke on the highway before you check the oil.
            </p>

            <p style={boldText}>So why do we wait for a heart attack to check our habits?</p>

            <p style={regularText}>
              In India, we have a strange relationship with health. We treat the body like an old battery—we use it, drain it, and ignore it until it completely dies. We call it "The Hustle." We call it "Sacrifice." But in reality, it's a <span style={boldText}>Prevention Crisis.</span>
            </p>

            <p style={boldText}>The Myth of the "Sudden" Illness</p>

            <p style={regularText}>
              We've all heard the stories: "He was perfectly fine, and then suddenly, he had a breakdown," or "She was so active, and then suddenly, the reports came back bad." Here is the truth: <span style={boldText}>Medicine has very few "sudden" surprises.</span> Most lifestyle diseases—like Diabetes, Hypertension, and even Burnout—don't crash into your life like a car accident. They move in like slow-growing weeds. They give you "Check Engine" lights for years:
            </p>

            <ul style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>That 3:00 PM energy crash you blame on "lunch."</li>
              <li>The irritability you blame on "the boss."</li>
              <li>The late-night scrolling you blame on "unwinding."</li>
            </ul>

            <p style={regularText}>These aren't just moods. They are your body's data points.</p>

            <p style={boldText}>The "Golden Decade" vs. The "Golden Hour"</p>

            <p style={regularText}>
              In movies, the hero is saved in the "Golden Hour"—that high-intensity moment in the ER with sirens and shocking paddles. It's dramatic, it's expensive, and it's scary. In medical terms, the "Golden Hour" is the window where life-saving intervention is possible. But in preventive terms, the "Golden Decade" is the window where intervention is unnecessary.
            </p>

            <p style={regularText}>Consider the reality of 2026:</p>

            <ul style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <span style={extraBoldText}>The Epidemiological Shift:</span> Non-Communicable Diseases (NCDs) like diabetes and heart disease now account for nearly 65% of all deaths in India.
              </li>
              <li>
                <span style={extraBoldText}>The Economic Drain:</span> India is projected to lose $4.58 trillion by 2030 due to NCDs and mental health conditions. To put that in perspective, cardiovascular disease alone costs our economy more than we spend on our entire education budget.
              </li>
              <li>
                <span style={extraBoldText}>The Youth Gap:</span> Nearly 25% of NCD-related deaths in India occur between the ages of 30 and 70—the very years we consider our "prime productive years."
              </li>
            </ul>

            <p style={regularText}>
              <span style={boldText}>Preventive health is the opposite. It's boring. It's quiet.</span> It's the "Golden Decade"—the ten years of small, daily decisions that ensure you never see the inside of an ER. Prevention isn't about living in a gym or eating only boiled vegetables. It's about <span style={boldText}>Micro-Interventions</span>:
            </p>

            <ul style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <span style={extraBoldText}>The 20-Minute Trade:</span> Walking for just 20 minutes a day isn't about losing weight; it's about clearing the "biological soot" out of your arteries.
              </li>
              <li>
                <span style={extraBoldText}>The Digital Sunset:</span> Putting your phone away 30 minutes before bed isn't "mindfulness"—it's giving your brain's cleaning crew (the lymphatic system) a chance to work.
              </li>
              <li>
                <span style={extraBoldText}>The "Ask Why" Check-up:</span> Don't just get a blood test because you're 40. Get it because you want to know if your "Check Engine" light is about to turn on.
              </li>
            </ul>

            <p style={boldText}>Mental Health is Physical Health (No, Really)</p>

            <p style={regularText}>
              We often treat stress as an "imaginary" problem. But your body can't tell the difference between a tiger chasing you and an angry email from your client. Both release <span style={boldText}>Cortisol.</span> If you leave that "stress tap" running 24/7, it rusts your pipes. It leads to inflammation, which leads to weight gain, which leads to heart issues. You cannot fix your heart if you don't fix your peace.
            </p>

            <p style={boldText}>The Verdict: Prevention is the Ultimate Flex</p>

            <p style={regularText}>
              In 2026, the real "status symbol" isn't how much you work; it's how little you need a doctor.
            </p>

            <p style={regularText}>
              The most sophisticated healthcare system in the world isn't a hospital with 1,000 beds. <span style={boldText}>It's a person who understands that health isn't something you "get" from a pharmacy—it's something you build in your kitchen, your bedroom, and your walk to work.</span>
            </p>

            <p style={regularText}>
              Stop waiting for the smoke. Check the oil. Your future self is either going to thank you for the habits you started today—or pay for the ones you didn't.
            </p>

            {/* Bottom Back Button matching your specs perfectly */}
            <div style={{ marginTop: '16px' }}>
              <Link href="/media" style={{ display: 'flex', width: '48px', height: '48px', padding: '20px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '50px', background: '#CE921B', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                  <path d="M9.29298 0.351648L0.293276 11.151C0.200302 11.2625 0.126545 11.3948 0.0762215 11.5405C0.0258999 11.6862 0 11.8423 0 12C0 12.1577 0.0258999 12.3138 0.0762215 12.4595C0.126545 12.6052 0.200302 12.7375 0.293276 12.849L9.29298 23.6484C9.48062 23.8735 9.7351 24 10.0005 24C10.2658 24 10.5203 23.8735 10.7079 23.6484C10.8956 23.4232 11.001 23.1178 11.001 22.7994C11.001 22.481 10.8956 22.1756 10.7079 21.9504L3.41442 13.1999L23 13.1999C23.2652 13.1999 23.5196 13.0735 23.7071 12.8485C23.8946 12.6235 24 12.3182 24 12C24 11.6818 23.8946 11.3766 23.7071 11.1515C23.5196 10.9265 23.2652 10.8001 23 10.8001L3.41442 10.8001L10.7079 2.04955C10.8956 1.8244 11.001 1.51902 11.001 1.2006C11.001 0.882183 10.8956 0.576805 10.7079 0.351648C10.5203 0.126492 10.2658 0 10.0005 0C9.7351 0 9.48062 0.126492 9.29298 0.351648Z" fill="white"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Wrapping the footer to ensure it stays above the absolute background */}
      <div style={{ zIndex: 1, position: 'relative' }}>
        <Footer />
      </div>
    </div>
  );
}