import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
  },
  { timestamps: true }
);

// Prevent mongoose from recompiling the model upon hot reloads in Next.js
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);