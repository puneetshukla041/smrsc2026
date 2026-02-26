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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Top Progress Bar - YouTube Style */}
        <NextTopLoader
          color="#0BD3D3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Hidden to match YouTube's clean look
          easing="ease"
          speed={200}
          shadow="0 0 10px #0BD3D3,0 0 5px #0BD3D3"
          zIndex={1600}
        />

        {/* 1. Start Preloading Immediately */}
        <GlobalPreloader />

        {/* 2. Initialize Smooth Scroll */}
        <SmoothScroll />
        
        {/* 3. Main Content */}
        {children}
        
        {/* 4. Mobile Components */}
        <div className="md:hidden">
          <Timer />
        </div>
      </body>
    </html>
  );
}