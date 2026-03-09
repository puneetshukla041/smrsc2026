"use client";

import { useEffect } from "react";

// TOP PRIORITY: These must load before everything else
const HERO_PRIORITY = [
  "/images/home/section1/image2.webp",
  "/images/home/section1/image3.webp",
  "/images/home/section1/image4.webp",
  "/images/home/section1/image5.webp",
  "/images/home/section1/image6.webp",
  "/images/home/section1/mobileimg.png",
];

const VIDEOS = [
  "/videos/Color.webm",
  "/videos/smrsc24.webm"
];

const OTHER_ASSETS = [
  // --- FONTS ---
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",

  // --- ABOUT : BENEFITS ---
  "/images/about/benifit/image1.webp",
  "/images/about/benifit/image2.webp",
  "/images/about/benifit/image3.webp",
  "/images/about/benifit/image4.webp",

  // --- ABOUT : COMMITTEE ---
  "/images/about/committe/1.webp",
  "/images/about/committe/2.webp",
  "/images/about/committe/3.webp",
  "/images/about/committe/4.webp",
  "/images/about/committe/5.webp",
  "/images/about/committe/6.webp",
  "/images/about/committe/7.webp",
  "/images/about/committe/8.webp",
  "/images/about/committe/9.webp",
  "/images/about/committe/10.webp",
  "/images/about/committe/11.webp",
  "/images/about/committe/12.webp",
  "/images/about/committe/13.webp",
  "/images/about/committe/14.webp",
  "/images/about/committe/15.webp",
  "/images/about/committe/16.webp",
  "/images/about/committe/17.webp",
  "/images/about/committe/18.webp",
  "/images/about/committe/19.webp",
  "/images/about/committe/20.webp",
  "/images/about/committe/21.webp",
  "/images/about/committe/22.webp",
  "/images/about/committe/23.webp",
  "/images/about/committe/24.webp",
  "/images/about/committe/25.webp",
  "/images/about/committe/26.webp",
  "/images/about/committe/27.webp",
  "/images/about/committe/28.webp",
  "/images/about/committe/29.webp",
  "/images/about/committe/30.webp",
  "/images/about/committe/31.webp",
  "/images/about/committe/32.webp",
  "/images/about/committe/33.webp",
  "/images/about/committe/34.webp",
  "/images/about/committe/35.webp",
  "/images/about/committe/36.webp",
  "/images/about/committe/37.webp",
  "/images/about/committe/38.webp",
  "/images/about/committe/39.webp",
  "/images/about/committe/40.webp",

  // --- ABOUT : FACULTY : CARDIAC ---
  "/images/about/faculty/cardiac/image1.webp",
  "/images/about/faculty/cardiac/image2.webp",
  "/images/about/faculty/cardiac/image3.webp",
  "/images/about/faculty/cardiac/image4.webp",
  "/images/about/faculty/cardiac/image5.webp",
  "/images/about/faculty/cardiac/image6.webp",
  "/images/about/faculty/cardiac/image7.webp",
  "/images/about/faculty/cardiac/image8.webp",
  "/images/about/faculty/cardiac/image9.webp",
  "/images/about/faculty/cardiac/image10.webp",
  "/images/about/faculty/cardiac/image11.webp",
  "/images/about/faculty/cardiac/image12.webp",
  "/images/about/faculty/cardiac/image13.webp",
  "/images/about/faculty/cardiac/image14.webp",
  "/images/about/faculty/cardiac/image15.webp",
  "/images/about/faculty/cardiac/image16.webp",
  "/images/about/faculty/cardiac/image17.webp",
  "/images/about/faculty/cardiac/image18.webp",
  "/images/about/faculty/cardiac/image19.webp",
  "/images/about/faculty/cardiac/image20.webp",
  "/images/about/faculty/cardiac/image21.webp",
  "/images/about/faculty/cardiac/image22.webp",
  "/images/about/faculty/cardiac/image23.webp",
  "/images/about/faculty/cardiac/image24.webp",
  "/images/about/faculty/cardiac/image25.webp",
  "/images/about/faculty/cardiac/image26.webp",
  "/images/about/faculty/cardiac/image27.webp",
  "/images/about/faculty/cardiac/image28.webp",
  "/images/about/faculty/cardiac/image29.webp",
  "/images/about/faculty/cardiac/image30.webp",
  "/images/about/faculty/cardiac/image31.webp",
  "/images/about/faculty/cardiac/image32.webp",
  "/images/about/faculty/cardiac/image33.webp",
  "/images/about/faculty/cardiac/image34.webp",
  "/images/about/faculty/cardiac/image35.webp",
  "/images/about/faculty/cardiac/image36.webp",
  "/images/about/faculty/cardiac/image37.webp",
  "/images/about/faculty/cardiac/image38.webp",
  "/images/about/faculty/cardiac/image39.webp",
  "/images/about/faculty/cardiac/image40.webp",
  "/images/about/faculty/cardiac/image41.webp",
  "/images/about/faculty/cardiac/image42.webp",
  "/images/about/faculty/cardiac/image43.webp",
  "/images/about/faculty/cardiac/image44.webp",
  "/images/about/faculty/cardiac/image45.webp",
  "/images/about/faculty/cardiac/image46.webp",
  "/images/about/faculty/cardiac/image47.webp",
  "/images/about/faculty/cardiac/image48.webp",
  "/images/about/faculty/cardiac/image49.webp",
  "/images/about/faculty/cardiac/image50.webp",
  "/images/about/faculty/cardiac/image51.webp",

  // --- ABOUT : FACULTY : UROLOGY ---
  "/images/about/faculty/urology/image1.png",
  "/images/about/faculty/urology/image1.webp",
  "/images/about/faculty/urology/image2.webp",
  "/images/about/faculty/urology/image3.webp",
  "/images/about/faculty/urology/image4.webp",
  "/images/about/faculty/urology/image5.webp",
  "/images/about/faculty/urology/image6.webp",
  "/images/about/faculty/urology/image7.webp",
  "/images/about/faculty/urology/image8.webp",
  "/images/about/faculty/urology/image9.webp",
  "/images/about/faculty/urology/image10.webp",
  "/images/about/faculty/urology/image11.webp",
  "/images/about/faculty/urology/image12.webp",
  "/images/about/faculty/urology/image13.webp",
  "/images/about/faculty/urology/image14.webp",
  "/images/about/faculty/urology/image15.webp",
  "/images/about/faculty/urology/image16.webp",
  "/images/about/faculty/urology/image17.webp",
  "/images/about/faculty/urology/image18.webp",
  "/images/about/faculty/urology/image19.webp",
  "/images/about/faculty/urology/image20.webp",
  "/images/about/faculty/urology/image21.webp",
  "/images/about/faculty/urology/image22.webp",
  "/images/about/faculty/urology/image23.webp",
  "/images/about/faculty/urology/image24.webp",
  "/images/about/faculty/urology/image25.webp",
  "/images/about/faculty/urology/image26.webp",
  "/images/about/faculty/urology/image27.webp",
  "/images/about/faculty/urology/image28.webp",
  "/images/about/faculty/urology/image29.webp",
  "/images/about/faculty/urology/image30.webp",
  "/images/about/faculty/urology/image31.webp",

  // --- ABOUT : GENERAL ---
  "/images/about/general/per1.webp",
  "/images/about/general/per2.webp",
  "/images/about/general/per3.webp",
  "/images/about/general/per4.webp",

  // --- ABOUT : SECTION 1 ---
  "/images/about/section1/image1.webp",
  "/images/about/section1/img1.webp",
  "/images/about/section1/mobile.webp",

  // --- ABOUT : SECTION 2 ---
  "/images/about/section2/image1.webp",
  "/images/about/section2/image2.webp",
  "/images/about/section2/image3.webp",
  "/images/about/section2/image4.webp",
  "/images/about/section2/image5.webp",
  "/images/about/section2/image6.webp",
  "/images/about/section2/image7.webp",

  // --- ABOUT : UROLOGY ---
  "/images/about/urology/per1.webp",
  "/images/about/urology/per2.webp",
  "/images/about/urology/per3.webp",
  "/images/about/urology/per4.webp",
  "/images/about/urology/per5.webp",
  "/images/about/urology/per6.webp",
  "/images/about/urology/per7.webp",
  "/images/about/urology/per8.webp",

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

  // --- HOME : SECTION 2 ---
  "/images/home/section2/card.webp",
  "/images/home/section2/image1.webp",
  "/images/home/section2/image2.webp",
  "/images/home/section2/image3.webp",
  "/images/home/section2/image4.webp",

  // --- HOME : SECTION 3 ---
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

  // --- HOME : SECTION 4 ---
  "/images/home/section4/image1.webp",
  "/images/home/section4/image2.png",
  "/images/home/section4/image3.webp",
  "/images/home/section4/image4.webp",
  "/images/home/section4/image5.png",
  "/images/home/section4/image6.png",

  // --- HOME : SECTION 5 ---
  "/images/home/section5/image1.webp",
  "/images/home/section5/image2.webp",
  "/images/home/section5/image3.webp",
  "/images/home/section5/image4.webp",
  "/images/home/section5/mob1.webp",
  "/images/home/section5/mob2.webp",
  "/images/home/section5/mob3.webp",
  "/images/home/section5/mob4.webp",

  // --- HOME : SECTION 6 ---
  "/images/home/section6/image1.png",
  "/images/home/section6/image1.webp",
  "/images/home/section6/mobile.webp",

  // --- MEDIA ---
  "/images/media/blog1.png",
  "/images/media/blog2.png",
  "/images/media/blog3.png",
  "/images/media/blogbg1.webp",
  "/images/media/blogbg2.webp",
  "/images/media/blogbg3.webp",
  "/images/media/image1.webp",
  "/images/media/media1.webp",
  "/images/media/media2.webp",
  "/images/media/media3.webp",
  "/images/media/mobile.webp",
  "/images/media/press1.webp",
  "/images/media/press2.webp",

  // --- PAST EVENT : 2025 ---
  "/images/pastevent/2025/image1.webp",
  "/images/pastevent/2025/image2.webp",
  "/images/pastevent/2025/image3.webp",
  "/images/pastevent/2025/image4.webp",
  "/images/pastevent/2025/image5.webp",
  "/images/pastevent/2025/image6.webp",
  "/images/pastevent/2025/image7.webp",
  "/images/pastevent/2025/image8.webp",
  "/images/pastevent/2025/image9.webp",
  "/images/pastevent/2025/image10.webp",
  "/images/pastevent/2025/image11.webp",
  "/images/pastevent/2025/image12.webp",

  // --- PAST EVENT : 24 ---
  "/images/pastevent/24/image1.webp",
  "/images/pastevent/24/image2.webp",
  "/images/pastevent/24/image3.webp",
  "/images/pastevent/24/image4.webp",
  "/images/pastevent/24/image5.webp",
  "/images/pastevent/24/image6.webp",
  "/images/pastevent/24/image7.webp",
  "/images/pastevent/24/image8.webp",
  "/images/pastevent/24/image9.webp",
  "/images/pastevent/24/image10.webp",
  "/images/pastevent/24/image11.webp",
  "/images/pastevent/24/image12.webp",

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

  // --- LOGOS & ANIMATIONS ---
  "/logos/animation/1.png",
  "/logos/animation/2.png",
  "/logos/animation/3.png",
  "/logos/animation/4.png",
  "/logos/animation/5.png",
  "/logos/animation/6.png",
  "/logos/animation/7.png",
  "/logos/animation/8.png",
  "/logos/animation/9.png",
  "/logos/animation/10.png",
  "/logos/animation/11.png",
  "/logos/animation/12.png",
  "/logos/Isolation_Mode (1).png",
  "/logos/header.png",
  "/logos/ssilogo.png",
];

export default function GlobalPreloader() {
  useEffect(() => {
    const fetchAsset = (src) =>
      fetch(src, { cache: "force-cache", mode: "no-cors" }).catch(() => {});

    const preloadAll = async () => {
      // 1. Load Hero Priority assets FIRST and wait for them
      await Promise.all(HERO_PRIORITY.map(fetchAsset));
      console.log("Priority 1: Hero images downloaded.");

      // 2. Load everything else in the background now that the hero is safe
      const remainingAssets = [...OTHER_ASSETS, ...VIDEOS];
      Promise.all(remainingAssets.map(fetchAsset));
    };

    preloadAll();
  }, []);

  return null;
}