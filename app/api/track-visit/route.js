import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Visit, GlobalStat } from '../../../models/Visit'; // Adjust relative path if needed

const MONGODB_URI = "mongodb+srv://puneetshukla041_db_user:mctFVVhcaWQiJclf@cluster0.gdowgbv.mongodb.net/?appName=Cluster0";

// Global connection cache to prevent MongoDB connection drops in Next.js
let isConnected = false;

export async function POST(req) {
  try {
    if (!isConnected) {
      await mongoose.connect(MONGODB_URI);
      isConnected = true;
    }

    // Safely parse JSON
    const body = await req.json().catch(() => ({}));
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown-ip';
    
    // -- SCENARIO A: User is leaving the page (Updating Watch Time) --
    if (body.action === 'leave' && body.watchTime) {
      await Visit.findOneAndUpdate(
        { ip: ip },
        { $inc: { totalWatchTime: body.watchTime } }
      );
      return NextResponse.json({ success: true, message: "Watch time updated" });
    }

    // -- SCENARIO B: User just landed on the page (Initial Tracking) --
    if (body.action === 'enter') {
      if (ip === 'unknown-ip') {
        return NextResponse.json({ message: "Could not determine IP" }, { status: 400 });
      }

      const userAgent = req.headers.get('user-agent') || '';
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const deviceType = isMobile ? 'Mobile' : 'Desktop';
      
      let browser = "Unknown";
      if (userAgent.includes("Chrome")) browser = "Chrome";
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Safari";
      else if (userAgent.includes("Firefox")) browser = "Firefox";

      let os = "Unknown";
      if (userAgent.includes("Win")) os = "Windows";
      else if (userAgent.includes("Mac")) os = "MacOS";
      else if (userAgent.includes("Android")) os = "Android";
      else if (userAgent.includes("like Mac")) os = "iOS";

      let geoData = { country: "Unknown", regionName: "Unknown", city: "Unknown" };
      if (ip !== '::1' && ip !== '127.0.0.1') {
        try {
          const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
          geoData = await geoRes.json();
        } catch (err) {
          console.log("Geo fetch failed");
        }
      }

      // 1. Update/Insert the individual IP stats
      await Visit.findOneAndUpdate(
        { ip: ip }, 
        { 
          $set: { 
            lastVisited: new Date(),
            deviceType, browser, os,
            country: geoData.country,
            region: geoData.regionName,
            city: geoData.city,
            screenResolution: body.screenResolution || "Unknown"
          },
          $inc: { visitCount: 1 } // Increases individual visits
        }, 
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      // 2. Update Global Site Traffic Counter
      await GlobalStat.findOneAndUpdate(
        { statName: "site_traffic" },
        { $inc: { totalVisits: 1 } }, // Increases total overall website visits
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      return NextResponse.json({ success: true, message: "Visit logged" });
    }

    return NextResponse.json({ success: false, message: "No valid action provided" });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Failed to track visit" }, { status: 500 });
  }
}