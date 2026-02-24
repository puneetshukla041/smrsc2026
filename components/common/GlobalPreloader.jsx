'use client';

import { useEffect } from 'react';

const ASSETS_TO_PRELOAD = [
  // --- FONTS ---
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",

  // --- EXPLORE ---
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

  // --- HOME ---
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

  // --- MEDIA ---
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

  // --- VISIT ---
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

  // --- LOGOS ---
  "/logos/header.png",
  "/logos/ssilogo.png",

  // --- DYNAMIC RANGES ---
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/2025/image${i + 1}.webp`),
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/24/image${i + 1}.webp`),
  ...Array.from({ length: 7 }, (_, i) => `/images/about/section2/image${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/about/benifit/image${i + 1}.webp`),
  ...Array.from({ length: 38 }, (_, i) => `/images/about/committe/${i + 1}.webp`),
  ...Array.from({ length: 25 }, (_, i) => `/images/about/cardiac/per${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/about/general/per${i + 1}.webp`),
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/image${i + 1}.webp`),
  ...Array.from({ length: 8 }, (_, i) => `/images/about/urology/per${i + 1}.webp`),
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/per${i + 21}.webp`),
];

const VIDEOS_TO_PRELOAD = [
  "/videos/Color.webm",
  "/videos/smrsc24.webm",
];

export default function GlobalPreloader() {
  useEffect(() => {
    const preloadAll = async () => {
      const allMedia = [...ASSETS_TO_PRELOAD, ...VIDEOS_TO_PRELOAD];
      
      // Fire everything at once
      await Promise.all(
        allMedia.map(src => 
          fetch(src, { cache: 'force-cache', mode: 'no-cors' })
            .catch(() => {/* fail silently */})
        )
      );
    };

    preloadAll();
  }, []);

  return null;
}