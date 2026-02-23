'use client';

import { useEffect } from 'react';

const ASSETS_TO_PRELOAD = [
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",
  "/images/explore/hero.webp",
  "/images/explore/mobile.png",
  ...Array.from({ length: 8 }, (_, i) => `/images/explore/image${i + 1}.webp`),
  "/images/home/section1/image2.webp",
  "/images/home/section1/mobileimg.png",
  "/images/home/section2/card.webp",
  ...Array.from({ length: 4 }, (_, i) => `/images/home/section2/image${i + 1}.webp`),
  ...Array.from({ length: 7 }, (_, i) => `/images/home/section3/image${i + 1}.webp`),
  ...Array.from({ length: 5 }, (_, i) => `/images/home/section3/mob${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/home/section4/image${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/home/section5/image${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/home/section5/mob${i + 1}.webp`),
  "/images/home/section6/image1.webp",
  "/images/home/section6/mobile.webp",
  "/images/home/section6/image1.png",
  "/logos/header.png",
  "/logos/ssilogo.png",
  "/file.svg",
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
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
  "/images/visit/airport.webp",
  "/images/visit/hero.webp",
  "/images/visit/image.webp",
  "/images/visit/mobile.png",
  ...Array.from({ length: 9 }, (_, i) => `/images/visit/place${i + 1}.webp`),
  "/images/visit/veneu.webp",
  ...Array.from({ length: 6 }, (_, i) => `/images/visit/venue${i + 1}.webp`),
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/24/image${i + 1}.webp`),
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/2025/image${i + 1}.webp`),
  "/images/about/section1/image1.webp",
  "/images/about/section1/img1.webp",
  "/images/about/section1/mobile.webp",
  ...Array.from({ length: 7 }, (_, i) => `/images/about/section2/image${i + 1}.webp`),
  ...Array.from({ length: 4 }, (_, i) => `/images/about/benifit/image${i + 1}.webp`),
  "/images/about/faculty/image1.png",
  "/images/about/faculty/image1.webp",
  "/images/about/committe/krawal.png",
  "/images/about/committe/somash.png",
  "/images/about/committe/sudhir.png",
  "/images/about/committe/vishwa.png",
  ...Array.from({ length: 34 }, (_, i) => `/images/about/committe/per${i + 1}.webp`),
  ...Array.from({ length: 25 }, (_, i) => `/images/about/cardiac/per${i + 1}.webp`),
  "/images/about/urology/clippath.webp",
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/image${i + 1}.webp`),
  ...Array.from({ length: 34 }, (_, i) => `/images/about/urology/per${i + 1}.webp`),
  "/images/about/general/per1.webp",
  "/images/about/general/per2.webp",
  "/images/about/general/per3.webp",
  "/images/about/general/per4.webp"
];

const VIDEOS_TO_PRELOAD = [
  "/videos/Color.webm",
  "/videos/smrsc24.webm",
  "/videos/smrsc25.webm"
];

export default function GlobalPreloader() {
  useEffect(() => {
    // Aggressive, instant execution
    const forceDownload = async () => {
      // Create a pool of promises to download everything in parallel
      const assetPromises = ASSETS_TO_PRELOAD.map(src => 
        fetch(src, { 
          cache: 'force-cache', 
          mode: 'no-cors',
          priority: 'high' // Browser hint for urgent download
        }).catch(e => console.error("Preload failed:", src))
      );

      const videoPromises = VIDEOS_TO_PRELOAD.map(src => 
        fetch(src, { 
          cache: 'force-cache', 
          mode: 'no-cors' 
        }).catch(e => {})
      );

      await Promise.all([...assetPromises, ...videoPromises]);
    };

    forceDownload();
  }, []);

  return null;
}