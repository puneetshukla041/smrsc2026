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

const OTHER_ASSETS = [
  // --- FONTS ---
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",
  // --- ABOUT : BENEFITS ---
  "/images/about/benifit/image1.webp",
  "/images/about/benifit/image2.webp",
  "/images/about/benifit/image3.webp",
  "/images/about/benifit/image4.webp",
  // --- ABOUT : CARDIAC ---
  "/images/about/cardiac/per1.webp",
  "/images/about/cardiac/per2.webp",
  "/images/about/cardiac/per3.webp",
  "/images/about/cardiac/per4.webp",
  "/images/about/cardiac/per5.webp",
  "/images/about/cardiac/per6.webp",
  "/images/about/cardiac/per7.webp",
  "/images/about/cardiac/per8.webp",
  "/images/about/cardiac/per9.webp",
  "/images/about/cardiac/per10.webp",
  "/images/about/cardiac/per11.webp",
  "/images/about/cardiac/per12.webp",
  "/images/about/cardiac/per13.webp",
  "/images/about/cardiac/per14.webp",
  "/images/about/cardiac/per15.webp",
  "/images/about/cardiac/per16.webp",
  "/images/about/cardiac/per17.webp",
  "/images/about/cardiac/per18.webp",
  "/images/about/cardiac/per19.webp",
  "/images/about/cardiac/per20.webp",
  "/images/about/cardiac/per21.webp",
  "/images/about/cardiac/per22.webp",
  "/images/about/cardiac/per23.webp",
  "/images/about/cardiac/per24.webp",
  "/images/about/cardiac/per25.webp",
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
  // --- ABOUT : FACULTY ---
  "/images/about/faculty/image1.png",
  "/images/about/faculty/image1.webp",
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
  "/images/about/urology/clippath.webp",
  "/images/about/urology/image2.webp",
  "/images/about/urology/image3.webp",
  "/images/about/urology/image4.webp",
  "/images/about/urology/image5.webp",
  "/images/about/urology/image6.webp",
  "/images/about/urology/image7.webp",
  "/images/about/urology/image8.webp",
  "/images/about/urology/image9.webp",
  "/images/about/urology/image10.webp",
  "/images/about/urology/image11.webp",
  "/images/about/urology/image12.webp",
  "/images/about/urology/image13.webp",
  "/images/about/urology/image14.webp",
  "/images/about/urology/per1.webp",
  "/images/about/urology/per2.webp",
  "/images/about/urology/per3.webp",
  "/images/about/urology/per4.webp",
  "/images/about/urology/per5.webp",
  "/images/about/urology/per6.webp",
  "/images/about/urology/per7.webp",
  "/images/about/urology/per8.webp",
  "/images/about/urology/per21.webp",
  "/images/about/urology/per22.webp",
  "/images/about/urology/per23.webp",
  "/images/about/urology/per24.webp",
  "/images/about/urology/per25.webp",
  "/images/about/urology/per26.webp",
  "/images/about/urology/per27.webp",
  "/images/about/urology/per28.webp",
  "/images/about/urology/per29.webp",
  "/images/about/urology/per30.webp",
  "/images/about/urology/per31.webp",
  "/images/about/urology/per32.webp",
  "/images/about/urology/per33.webp",
  "/images/about/urology/per34.webp",
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
  "/images/home/section4/image2.webp",
  "/images/home/section4/image3.webp",
  "/images/home/section4/image4.webp",
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
  "/images/home/section6/image1.webp",
  "/images/home/section6/mobile.webp",
  "/images/home/section6/image1.png",
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
  // --- PAST EVENT ---
  "/images/pastevent/2025/image1.webp",
  "/images/pastevent/24/image1.webp",
  // --- VISIT ---
  "/images/visit/airport.webp",
  "/images/visit/hero.webp",
  "/images/visit/image.webp",
  "/images/visit/mobile.png",
  "/logos/header.png",
  "/logos/ssilogo.png",
  "/logos/animation/1.png",
  "/logos/animation/12.png",
];

const VIDEOS = ["/videos/Color.webm", "/videos/smrsc24.webm"];

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