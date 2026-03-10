import mongoose from 'mongoose';

// Your hardcoded URI
const MONGODB_URI = "mongodb+srv://puneetshukla041_db_user:ip93qaHcul3sBnQ3@cluster0.rjwcifj.mongodb.net/?appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,      // Abort after 5 seconds if MongoDB is unreachable
      connectTimeoutMS: 5000,               // Abort connection after 5 seconds
      socketTimeoutMS: 45000,               // Abort operations after 45 seconds
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB Connected Successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;