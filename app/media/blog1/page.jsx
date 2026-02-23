'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

export default function Blog1() {
  // Shared text styles to keep code clean and match your exact properties
  const regularText = {
    color: '#03101F',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px', // 162.5%
    letterSpacing: '-0.16px',
    margin: 0
  };

  const boldText = {
    ...regularText,
    fontWeight: '600',
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#020b14', overflow: 'hidden' }}>
      <Header />
      
      {/* Exact Top Background Image Requested */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1920px',
        height: '1281px',
        aspectRatio: '640/427',
        background: `url('/images/media/blogbg.png') lightgray 50% / cover no-repeat`,
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
          borderRadius: '8px', // Optional: adds a slight curve to the corners of the white box if needed
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' // Optional: helps separate the white box from the dark background
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
              margin: 0 
            }}>
              Are We Building, Or Just Branding?
            </h1>
            
            <p style={boldText}>A Hard Question for Atmanirbhar Bharat</p>

            <p style={regularText}>
              There is a quiet, resonant pride that comes with the words Made in India. It is a phrase that carries the weight of history and the ambition of a nation that no longer wants to be seen merely as a massive consumer market—but as a global maker. But as we accelerate toward a <span style={boldText}>$5 trillion economy</span>, an uncomfortable question has begun to surface: <span style={boldText}>When we say "Made in India," do we mean engineered in India—or merely assembled here?</span> The difference isn't semantic. It is structural. It is the difference between a nation that owns its future and one that merely rents its progress.
            </p>

            <p style={boldText}>The "Costume" of Self-Reliance</p>

            <p style={regularText}>
              In several high-technology sectors, a pattern is emerging. Advanced systems arrive at our shores largely complete—sometimes fully built, sometimes in semi-knocked-down (SKD) kits. A logo changes. A housing is redesigned. Final assembly takes place domestically. We see record-breaking production numbers, yet the "depth" of that manufacturing remains thin. Consider the electronics sector: while mobile phone production has skyrocketed <span style={boldText}>28x since 2014</span> (reaching <span style={boldText}>₹5.5 lakh crore in FY25</span>), much of this growth is driven by final-stage assembly.
            </p>

            <p style={regularText}>
              On paper, these products qualify as indigenous. <span style={boldText}>In spirit, do they?</span>
            </p>

            <p style={regularText}>
              While dependence on finished imports has dropped, our reliance on foreign "brains"—the integrated circuits and core components—remains acute. For instance, imports of integrated circuits touched <span style={boldText}>$5.46 billion in the first half of 2025 alone</span>, with a staggering <span style={boldText}>88% sourced from a single neighbor</span>. This isn't an argument against global trade. No country develops in a vacuum; technology transfer and partnerships are the fuel of economic evolution. But when import-dependence begins to wear the costume of self-reliance, the line between progress and perception blurs, we aren't just building products; we are building vulnerabilities.
            </p>

            <p style={regularText}>
              Atmanirbhar Bharat was never meant to be a branding exercise. It was meant to be a capability revolution.
            </p>

            <p style={boldText}>The Hard Path vs. The Easy Label</p>

            <p style={regularText}>
              Real self-reliance is inconvenient. It is slow, expensive, and demands a high tolerance for public failure. Rebranding imported systems is the "easy" path to hitting quarterly production targets, but building core architecture is what creates lasting power.
            </p>

            <p style={regularText}>Consider the "Power of the Blueprint":</p>
            
            <ul style={{ ...regularText, paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <span style={boldText}>The R&D Gap:</span> India’s Gross Expenditure on R&D (GERD) remains stuck at roughly <span style={boldText}>0.64% of GDP</span>, significantly lower than the <span style={boldText}>2.5% to 5%</span> range of innovation-led economies like the US, Israel, or South Korea.
              </li>
              <li>
                <span style={boldText}>The IP Ownership:</span> While patent filings in India have surged by <span style={boldText}>44% over the last five years</span>, a significant portion of patents granted are still to non-resident entities.
              </li>
            </ul>

            <p style={regularText}>
              If the <span style={boldText}>firmware</span> is written elsewhere..<br/>
              If the <span style={boldText}>critical components</span> are sourced elsewhere...<br/>
              If the <span style={boldText}>Design IP</span> is owned elsewhere...<br/>
              ...then the <span style={boldText}>strategic control</span> sits elsewhere. The product may carry an Indian badge, but it does not carry Indian sovereignty. <span style={boldText}>Blueprints are power.</span>
            </p>

            <p style={boldText}>
              A Crisis of Confidence?<br/>
              <span style={regularText}>This raises a question not of policy, but of confidence.</span><br/>
              <span style={regularText}>India sends missions to the Moon at a fraction of global costs. We built the world’s most sophisticated digital public infrastructure. We are the world's pharmaceutical backbone.</span>
            </p>

            <p style={boldText}>
              So why, in advanced technology, do we still default to celebrating assembly as innovation?
            </p>

            <p style={regularText}>
              It isn't a lack of intelligence or scale. What our engineers often lack is <span style={boldText}>ecosystem patience</span>—the willingness of capital and policy to back long-gestation "deep tech" instead of chasing the quick wins of white-labeling. Currently, medium and high-technology activities account for only about <span style={boldText}>46.3% of India's total manufacturing value added</span>. To become a global leader, that number needs to reflect original design, not just high-tech assembly.
            </p>

            <p style={boldText}>Beyond the Slogan</p>

            <p style={regularText}>
              The danger is subtle: if rebranded imports become our new "normal," we risk signaling to the next generation that our ambition ends at modification. We risk falling into a "Middle-Income Trap" where we provide the labor, but others provide the ideas.
            </p>

            <p style={regularText}>
              Atmanirbhar Bharat cannot become a slogan that tolerates technological dependency under domestic packaging. Self-reliance isn't about isolationism; it’s about <span style={boldText}>negotiating from a position of strength</span>. And strength only comes from design ownership.
            </p>

            <p style={regularText}>
              The next decade will define India's identity: will we be a true originator of high-complexity systems, or remains a sophisticated assembler with world-class branding?
            </p>

            <p style={regularText}>
              The real test of our progress isn't how many products carry the Indian flag. It is how many products begin as a spark in an Indian engineer’s mind—and end as a global benchmark.
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