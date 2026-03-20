import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import Timer from "../components/features/CountdownTimer"; 
import NextTopLoader from 'nextjs-toploader'; 

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
      <head>
        {/* --- GOOGLE ANALYTICS --- */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtasg/js?id=G-E4SWQKKYNZ6" 
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E4SWQKYNZHK6');
            `,
          }}
        />

        {/* --- GOOGLE TAG MANAGER --- */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,k,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtmn.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WT5TFN4T');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* --- GOOGLE TAG MANAGER (NOSCRIPT) --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTIM-WT5THFNB4T"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Top Progress Bar - YouTube Style */}
        <NextTopLoader
          color="#0BD3D3"
          initialPosition={0.08}
          crawlSpeed={500}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease-in-out" 
          speed={1000}        
          shadow="0 0 5px #004398"
          zIndex={1600}
        />

        
        {/* 3. Main Content */}
        {children}
        
        {/* 4. Mobile Components */}
        <div className="md:hidden">
          <Timer />
        </div>

        {/* --- LINKEDIN INSIGHT TAG --- */}
        <Script
          id="linkedin-insight"
          strategy="lazyOnload" // Loads after the page finishes rendering so it doesn't slow down your site
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "8948196";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.liccdn.com/lii.lmss-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            alt="" 
            src="https://px.ads.linkedin.com/collect/?pisd=894988196&fmst=gif" 
          />
        </noscript>
      </body>
    </html>
  );
}
