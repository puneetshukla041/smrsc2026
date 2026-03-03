import mongoose from 'mongoose';

// Schema for tracking individual users (by IP)
const visitSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 0 }, // How many times this IP visited
  lastVisited: { type: Date, default: Date.now },
  deviceType: String,
  browser: String,
  os: String,
  country: String,
  region: String,
  city: String,
  screenResolution: String,
  totalWatchTime: { type: Number, default: 0 } // Total seconds spent
});

// Schema for tracking global, total visits to the website
const globalStatSchema = new mongoose.Schema({
  statName: { type: String, required: true, unique: true },
  totalVisits: { type: Number, default: 0 } // Total hits across ALL users
});

const Visit = mongoose.models.Visit || mongoose.model('Visit', visitSchema);
const GlobalStat = mongoose.models.GlobalStat || mongoose.model('GlobalStat', globalStatSchema);
'id;name;duration;selfTime;urlIndex;childRange;[S]'
export { Visit, GlobalStat };