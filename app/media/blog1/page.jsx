'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

// --- Raw Blog Data with Markdown-like Bold syntax (**) ---
const rawBlogData = [
  { text: "Are We Building, Or Just Branding?", type: 'h1' },
  { text: "**A Hard Question for Atmanirbhar Bharat**", type: 'p' },
  { text: "There is a quiet, resonant pride that comes with the words Made in India. It is a phrase that carries the weight of history and the ambition of a nation that no longer wants to be seen merely as a massive consumer market—but as a global maker. But as we accelerate toward a **$5 trillion economy**, an uncomfortable question has begun to surface: **When we say \"Made in India,\" do we mean engineered in India—or merely assembled here?** The difference isn't semantic. It is structural. It is the difference between a nation that owns its future and one that merely rents its progress.", type: 'p' },
  { text: "**The \"Costume\" of Self-Reliance**", type: 'p' },
  { text: "In several high-technology sectors, a pattern is emerging. Advanced systems arrive at our shores largely complete—sometimes fully built, sometimes in semi-knocked-down (SKD) kits. A logo changes. A housing is redesigned. Final assembly takes place domestically. We see record-breaking production numbers, yet the \"depth\" of that manufacturing remains thin. Consider the electronics sector: while mobile phone production has skyrocketed **28x since 2014** (reaching **₹5.5 lakh crore in FY25**), much of this growth is driven by final-stage assembly.", type: 'p' },
  { text: "On paper, these products qualify as indigenous. **In spirit, do they?**", type: 'p' },
  { text: "While dependence on finished imports has dropped, our reliance on foreign \"brains\"—the integrated circuits and core components—remains acute. For instance, imports of integrated circuits touched **$5.46 billion in the first half of 2025 alone**, with a staggering **88% sourced from a single neighbor**. This isn't an argument against global trade. No country develops in a vacuum; technology transfer and partnerships are the fuel of economic evolution. But when import-dependence begins to wear the costume of self-reliance, the line between progress and perception blurs, we aren't just building products; we are building vulnerabilities.", type: 'p' },
  { text: "Atmanirbhar Bharat was never meant to be a branding exercise. It was meant to be a capability revolution.", type: 'p' },
  { text: "**The Hard Path vs. The Easy Label**", type: 'p' },
  { text: "Real self-reliance is inconvenient. It is slow, expensive, and demands a high tolerance for public failure. Rebranding imported systems is the \"easy\" path to hitting quarterly production targets, but building core architecture is what creates lasting power.", type: 'p' },
  { text: "Consider the \"Power of the Blueprint\":", type: 'p' },
  { text: "**The R&D Gap:** India’s Gross Expenditure on R&D (GERD) remains stuck at roughly **0.64% of GDP**, significantly lower than the **2.5% to 5%** range of innovation-led economies like the US, Israel, or South Korea.", type: 'li' },
  { text: "**The IP Ownership:** While patent filings in India have surged by **44% over the last five years**, a significant portion of patents granted are still to non-resident entities.", type: 'li' },
  { text: "If the **firmware** is written elsewhere..", type: 'p' },
  { text: "If the **critical components** are sourced elsewhere...", type: 'p' },
  { text: "If the **Design IP** is owned elsewhere...", type: 'p' },
  { text: "...then the **strategic control** sits elsewhere. The product may carry an Indian badge, but it does not carry Indian sovereignty. **Blueprints are power.**", type: 'p' },
  { text: "**A Crisis of Confidence?**", type: 'p' },
  { text: "This raises a question not of policy, but of confidence.", type: 'p' },
  { text: "India sends missions to the Moon at a fraction of global costs. We built the world’s most sophisticated digital public infrastructure. We are the world's pharmaceutical backbone.", type: 'p' },
  { text: "**So why, in advanced technology, do we still default to celebrating assembly as innovation?**", type: 'p' },
  { text: "It isn't a lack of intelligence or scale. What our engineers often lack is **ecosystem patience**—the willingness of capital and policy to back long-gestation \"deep tech\" instead of chasing the quick wins of white-labeling. Currently, medium and high-technology activities account for only about **46.3% of India's total manufacturing value added**. To become a global leader, that number needs to reflect original design, not just high-tech assembly.", type: 'p' },
  { text: "**Beyond the Slogan**", type: 'p' },
  { text: "The danger is subtle: if rebranded imports become our new \"normal,\" we risk signaling to the next generation that our ambition ends at modification. We risk falling into a \"Middle-Income Trap\" where we provide the labor, but others provide the ideas.", type: 'p' },
  { text: "Atmanirbhar Bharat cannot become a slogan that tolerates technological dependency under domestic packaging. Self-reliance isn't about isolationism; it’s about **negotiating from a position of strength**. And strength only comes from design ownership.", type: 'p' },
  { text: "The next decade will define India's identity: will we be a true originator of high-complexity systems, or remains a sophisticated assembler with world-class branding?", type: 'p' },
  { text: "The real test of our progress isn't how many products carry the Indian flag. It is how many products begin as a spark in an Indian engineer’s mind—and end as a global benchmark.", type: 'p' }
];

export default function Blog1() {
  // Shared styles
  const regularText = {
    color: '#03101F',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '-0.16px',
    margin: 0
  };

  const boldText = {
    ...regularText,
    fontWeight: '600',
  };

  const h1Style = {
    color: '#003A84', 
    fontFamily: 'Manrope, sans-serif', 
    fontSize: '32px', 
    fontStyle: 'normal', 
    fontWeight: '600', 
    lineHeight: '56px', 
    textTransform: 'capitalize', 
    margin: 0 
  };

  // Helper to parse **bold** syntax instantly
  const renderTextWithBold = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) => {
      const isBold = index % 2 !== 0; // Everything between the ** will be at odd indices
      return (
        <span key={index} style={isBold ? boldText : undefined}>
          {part}
        </span>
      );
    });
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#020b14', overflow: 'hidden' }}>
      <Header />
      
      {/* Absolute Background Image */}
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
        paddingTop: '260px', // Exact 260px from the top header
        paddingBottom: '80px',
        zIndex: 1 
      }}>
        
        {/* The White Card Container */}
        <div 
          style={{ 
            position: 'relative',
            display: 'flex', 
            width: '1380px', 
            margin: '0 270px', // Exact 270px margin on left and right
            maxWidth: 'calc(100% - 40px)', // Fallback to ensure it doesn't break on small screens
            padding: '32px 80px', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FFF',
            gap: '36px',
            borderRadius: '8px', 
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >

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
            
            {rawBlogData.map((block, index) => {
              if (block.type === 'h1') {
                return <h1 key={index} style={h1Style}>{renderTextWithBold(block.text)}</h1>;
              }
              if (block.type === 'li') {
                return (
                  <div key={index} style={{ display: 'flex', gap: '8px', paddingLeft: '24px' }}>
                    <span style={regularText}>•</span>
                    <div style={regularText}>{renderTextWithBold(block.text)}</div>
                  </div>
                );
              }
              return <p key={index} style={regularText}>{renderTextWithBold(block.text)}</p>;
            })}

            {/* Bottom Back Button */}
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

      <div style={{ zIndex: 1, position: 'relative' }}>
        <Footer />
      </div>
    </div>
  );
}