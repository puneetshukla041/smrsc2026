'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

export default function Blog2() {
  // Shared text styles to keep code clean and match your exact properties
  const regularText = {
    color: '#03101F',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px', // 162.5%
    letterSpacing: '-0.16px',
    alignSelf: 'stretch', // Added from the Layout section in your screenshot
    margin: 0
  };

  const boldText = {
    ...regularText,
    fontWeight: '600', // Matches "$5 trillio..." from your screenshot
  };

  const extraBoldText = {
    ...regularText,
    fontWeight: '700', // Added to match "The IP Own..." from your screenshot
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
        background: `linear-gradient(to bottom, rgba(2, 11, 20, 0) 50%, rgba(2, 11, 20, 1) 100%), url('/images/media/blogbg2.webp') lightgray 50% / cover no-repeat`,
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
              When Distance Decides Survival
            </h1>
            
            <p style={boldText}>How Telesurgery Is Redefining Equity in Indian Healthcare</p>

            <p style={regularText}>
              In India, a medical emergency is rarely just about biology. It is a <span style={boldText}>geography crisis.</span>
            </p>

            <p style={regularText}>
              If you live in South Delhi or Central Mumbai, you are minutes away from some of the world’s finest surgical consoles. But if you are in a Tier 2 city like Ranchi or a Tier 3 town like Alwar, your access to a world-class oncologist or a cardiac specialist isn't a matter of right—it’s a matter of a 400km journey.
            </p>

            <p style={regularText}>
              In a country where <span style={boldText}>70% of specialists live in urban hubs serving only 30% of the population</span>, the "geographic lottery" has been a death sentence for decades. But as of 2026, we are witnessing the "democratization of the scalpel."
            </p>

            <p style={boldText}>The 1:811 Mask: Why Averages Lie</p>

            <p style={regularText}>
              India’s doctor-to-population ratio has reached a historic high. As of early 2026, the government reports a ratio of <span style={boldText}>1:811</span>, comfortably surpassing the WHO benchmark of 1:1000. This "national average" hides a brutal reality. Rural districts—home to nearly <span style={boldText}>65% of our people</span>—still face a massive specialist deficit. While we have more doctors than ever, we haven't solved their distribution. This is where the old model of "moving the patient to the expert" fails. We need a new model: <span style={boldText}>moving the expert's dexterity to the patient.</span>
            </p>

            <p style={boldText}>Telesurgery: Disconnecting Expertise from Presence</p>

            <p style={regularText}>
              Telesurgery is no longer a "future" concept; it is a 2026 reality. It is the ultimate bridge for a nation where distance has traditionally dictated destiny. By utilizing high-speed, low-latency 5G/6G networks and indigenous robotic systems, a surgeon in a metro can now operate on a patient in a district hospital hundreds of kilometers away.
            </p>

            <p style={regularText}>Why 2026 is the Turning Point:</p>

            <ul style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <span style={boldText}>The SSI Mantra:</span> India’s own surgical robot, the SSI Mantra, has already performed over <span style={boldText}>150 robotic telesurgeries by early 2026</span>, including a world-first cardiac procedure spanning 10,000 km from France to India. The delay? Practically imperceptible.
              </li>
              <li>
                <span style={boldText}>The "MantraM" Effect:</span> 2026 has seen the rollout of "Robotic Surgery on Wheels"—mobile units that travel to underserved communities, bringing a "smart" operating room to the patient's doorstep.
              </li>
              <li>
                <span style={boldText}>Cost-Effectiveness:</span> Unlike imported systems costing upwards of ₹15 crore, Indian-engineered robots are slashing the cost of "Super-Specialty" care by nearly 50%, making it a standard of care rather than an elite luxury.
              </li>
            </ul>

            <p style={boldText}>From "Centralized" to "Connected" Care</p>

            <p style={regularText}>
              The shift from 2020 to 2026 has been psychological as much as technological. We are moving from a <span style={boldText}>Centralization Model</span> (where the patient travels) to a <span style={boldText}>Connected Care Model</span> (where expertise travels).
            </p>

            <p style={boldText}>The "Last Mile" of Trust</p>

            <p style={regularText}>
              While the tech is ready, the ecosystem is still maturing. For telesurgery to save every Tier 3 town, three pillars must stand firm:
            </p>

            <ol style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <span style={boldText}>Network Redundancy:</span> A dropped connection in surgery is a catastrophe. 2026 is seeing the rise of "surgical fiber loops" with triple-redundancy.
              </li>
              <li>
                <span style={boldText}>The "Phygital" Hybrid:</span> Telesurgery doesn't replace local doctors; it augments them. The local general surgeon becomes the "eyes and hands" on the ground, while the remote specialist provides the "precision."
              </li>
              <li>
                <span style={boldText}>Regulatory Sovereignty:</span> With over 150 successful robotic telesurgeries completed in India by early 2026, the National Medical Commission is finally codifying guidelines that turn this innovation into a nationwide standard.
              </li>
            </ol>

            <p style={boldText}>Equity over Geography</p>

            <p style={regularText}>
              The next decade will define whether India becomes a nation where high-precision care is a luxury of the few or a right of the many. The goal of Atmanirbhar healthcare isn't to build more 1,000-bed hospitals in Bangalore. It is to ensure that a child in a village in Bihar has access to the same world-class neurosurgeon as a CEO in Mumbai, then we have done more than just build a healthcare system. We have achieved Healthcare Equity.
            </p>

            <p style={boldText}>
              The scalpel is now digital. The distance is now zero.
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