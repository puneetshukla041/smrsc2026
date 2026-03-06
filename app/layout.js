import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Timer from "../components/ui/CountdownTimer"; 
import SmoothScroll from "../components/common/SmoothScroll"; 
import GlobalPreloader from "../components/common/GlobalPreloader";
import NextTopLoader from 'nextjs-toploader'; // <-- Import the loader

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMRSC 2026",
  description: "Third global SS Innovations multi specialty robotic surgery conference",
  icons: {
    icon: "/logos/ssilogo.png",
    shortcut: "/logos/ssilogo.png",
    apple: "/logos/ssilogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#020617]`}>
        
      {/* Top Progress Bar - YouTube Style (Ultra Smooth Fade-Out) */}
        <NextTopLoader
          color="#0BD3D3"
          initialPosition={0.08}
          crawlSpeed={500}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease-in-out" /* <-- Smoothly ramps the animation up and down */
          speed={1000}         /* <-- 1000ms (1 full second). This forces the fade-out to be slow and graceful! */
          shadow="0 0 5px #004398"
          zIndex={1600}
        />

        {/* 1. Start Preloading Immediately */}
        <GlobalPreloader />

        {/* 2. Initialize Smooth Scroll */}
        <SmoothScroll />
        
        {/* 3. Main Content - Wrapped with responsive laptop margins */}
        <main className="flex-grow w-full flex flex-col items-center overflow-x-hidden">
          {/* This inner div ensures max-width and laptop padding globally */}
          <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-8">
            {children}
          </div>
        </main>
        
        {/* 4. Mobile Components */}
        <div className="md:hidden">
          <Timer />
        </div>
      </body>
    </html>
  );
}