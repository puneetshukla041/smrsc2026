import Contact from '../models/Contact.js';

/**
 * Service layer for contact form operations
 */
export const contactService = {
  /**
   * Create a new contact submission
   */
  async createContact(data) {
    const { name, email, message } = data;
    
    // Validation
    if (!name?.trim()) throw new Error('Name is required');
    if (!email?.trim()) throw new Error('Email is required');
    if (!message?.trim()) throw new Error('Message is required');
    
    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email address');
    }
    
    // Length limits
    if (name.length > 255) throw new Error('Name is too long (max 255 characters)');
    if (email.length > 255) throw new Error('Email is too long');
    if (message.length > 5000) throw new Error('Message is too long (max 5000 characters)');
    
    try {
      const newContact = await Contact.create({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date(),
        ipAddress: null, // Can be populated by API route if needed
      });
      
      return {
        id: newContact._id,
        success: true,
        message: 'Your message has been received. We will contact you shortly.'
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('This email has already been submitted. Please wait for our response.');
      }
      throw error;
    }
  },
  
  /**
   * Get contact submissions (limited view for admin)
   */
  async getContacts(limit = 50, skip = 0) {
    return await Contact.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  }
};
