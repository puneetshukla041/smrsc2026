import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '../../../../models/Contact'; // Adjust this path if your models folder is elsewhere

// Hardcoded URI as requested
const MONGODB_URI = "mongodb+srv://puneetshukla041:zo6KoEIWALNm9d97@cluster0.lmeiugu.mongodb.net/employeeaccess?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
  }
};

export async function POST(req) {
  try {
    await connectDB();
    
    // Parse incoming request
    const body = await req.json();
    const { name, email, message } = body;

    // Validate data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save to Database
    await Contact.create({ name, email, message });

    return NextResponse.json({ success: true, message: "Details submitted successfully!" }, { status: 201 });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ error: "Failed to submit details" }, { status: 500 });
  }
}