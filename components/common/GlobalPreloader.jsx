'use client';

import { useEffect } from 'react';

// This is the master list of all your assets updated to match your directory listing
const ASSETS_TO_PRELOAD = [
  // --- FONTS ---
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",

  // --- EXPLORE PAGE ---
  "/images/explore/hero.webp",
  "/images/explore/image1.webp",
  "/images/explore/image2.webp",
  "/images/explore/image3.webp",
  "/images/explore/image4.webp",
  "/images/explore/image5.webp",
  "/images/explore/image6.webp",
  "/images/explore/image7.webp",
  "/images/explore/image8.webp",
  "/images/explore/mobile.png",

  // --- HOME PAGE ---
  "/images/home/section1/image2.webp",
  "/images/home/section1/mobileimg.png",
  "/images/home/section2/card.webp",
  "/images/home/section2/image1.webp",
  "/images/home/section2/image2.webp",
  "/images/home/section2/image3.webp",
  "/images/home/section2/image4.webp",
  "/images/home/section3/image1.webp",
  "/images/home/section3/image2.webp",
  "/images/home/section3/image3.webp",
  "/images/home/section3/image4.webp",
  "/images/home/section3/image5.webp",
  "/images/home/section3/image6.webp",
  "/images/home/section3/image7.webp",
  "/images/home/section3/mob1.webp",
  "/images/home/section3/mob2.webp",
  "/images/home/section3/mob3.webp",
  "/images/home/section3/mob4.webp",
  "/images/home/section3/mob5.webp",
  "/images/home/section4/image1.webp",
  "/images/home/section4/image2.webp",
  "/images/home/section4/image3.webp",
  "/images/home/section4/image4.webp",
  "/images/home/section5/image1.webp",
  "/images/home/section5/image2.webp",
  "/images/home/section5/image3.webp",
  "/images/home/section5/image4.webp",
  "/images/home/section5/mob1.webp",
  "/images/home/section5/mob2.webp",
  "/images/home/section5/mob3.webp",
  "/images/home/section5/mob4.webp",
  "/images/home/section6/image1.webp",
  "/images/home/section6/mobile.webp",
  "/images/home/section6/image1.png",

  // --- LOGOS ---
  "/logos/header.png",
  "/logos/ssilogo.png",

  // --- MEDIA PAGE ---
  "/images/media/blog1.png",
  "/images/media/blog2.png",
  "/images/media/blog3.png",
  "/images/media/blogbg.png",
  "/images/media/image1.webp",
  "/images/media/media1.webp",
  "/images/media/media2.webp",
  "/images/media/media3.webp",
  "/images/media/mobile.webp",
  "/images/media/press1.webp",
  "/images/media/press2.webp",

  // --- VISIT PAGE ---
  "/images/visit/airport.webp",
  "/images/visit/hero.webp",
  "/images/visit/image.webp",
  "/images/visit/mobile.png",
  "/images/visit/place1.webp",
  "/images/visit/place2.webp",
  "/images/visit/place3.webp",
  "/images/visit/place4.webp",
  "/images/visit/place5.webp",
  "/images/visit/place6.webp",
  "/images/visit/place7.webp",
  "/images/visit/place8.webp",
  "/images/visit/place9.webp",
  "/images/visit/veneu.webp",
  "/images/visit/venue1.webp",
  "/images/visit/venue2.webp",
  "/images/visit/venue3.webp",
  "/images/visit/venue4.webp",
  "/images/visit/venue5.webp",
  "/images/visit/venue6.webp",

  // --- PAST EVENTS ---
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/2025/image${i + 1}.webp`),
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/24/image${i + 1}.webp`),

  // --- ABOUT SECTIONS ---
  "/images/about/section1/image1.webp",
  "/images/about/section1/img1.webp",
  "/images/about/section1/mobile.webp",
  ...Array.from({ length: 7 }, (_, i) => `/images/about/section2/image${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/about/benifit/image${i + 1}.webp`),
  "/images/about/faculty/image1.png",
  "/images/about/faculty/image1.webp",

  // --- COMMITTEE (Files are named 1.webp, 2.webp, etc.) ---
  ...Array.from({ length: 38 }, (_, i) => `/images/about/committe/${i + 1}.webp`),

  // --- CARDIAC PERSONNEL ---
  ...Array.from({ length: 25 }, (_, i) => `/images/about/cardiac/per${i + 1}.webp`),

  // --- GENERAL PERSONNEL ---
  "/images/about/general/per1.webp",
  "/images/about/general/per2.webp",
  "/images/about/general/per3.webp",
  "/images/about/general/per4.webp",

  // --- UROLOGY PERSONNEL & IMAGES ---
  "/images/about/urology/clippath.webp",
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/image${i + 1}.webp`),
  // Urology per list includes gaps/specific ranges per your list
  ...Array.from({ length: 8 }, (_, i) => `/images/about/urology/per${i + 1}.webp`),
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/per${i + 21}.webp`), // covers per21 to per34
];

// --- VIDEOS ---
const VIDEOS_TO_PRELOAD = [
  "/videos/Color.webm",
  "/videos/smrsc24.webm",
];

export default function GlobalPreloader() {
  useEffect(() => {
    const startPreloading = async () => {
      // 1. Preload Assets
      for (const src of ASSETS_TO_PRELOAD) {
        try {
          fetch(src, { cache: 'force-cache', mode: 'no-cors' });
        } catch (e) {
          console.error("Failed to preload asset:", src);
        }
      }

      // 2. Preload Videos
      for (const src of VIDEOS_TO_PRELOAD) {
        try {
          fetch(src, { cache: 'force-cache', mode: 'no-cors' });
        } catch (e) {}
      }
    };

    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(startPreloading);
      } else {
        startPreloading();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}