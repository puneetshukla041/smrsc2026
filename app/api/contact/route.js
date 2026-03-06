import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb'; // Path to your new lib file
import Contact from '../../../models/Contact'; 

export async function POST(req) {
  try {
    // 1. Connect to the database using the cached utility
    await connectDB();
    
    // 2. Parse the request body
    const { name, email, message } = await req.json();

    // 3. Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 4. Create the document in MongoDB
    const newContact = await Contact.create({ name, email, message });

    return NextResponse.json({ 
      success: true, 
      message: "Details submitted successfully!",
      data: newContact 
    }, { status: 201 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}