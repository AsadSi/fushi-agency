import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

// Global type extension for caching
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Use cached if available (good for hot reloads in dev)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
};

const FormSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    company: { type: String, required: false },
    phone: { type: String, required: false },
    facebookAccount: { type: String, required: false },

    // Project Details
    projectType: { type: String, required: true },
    otherProjectType: { type: String, required: false },
    existingWebsite: { type: String, required: false },
    pagesEstimate: { type: String, required: false },
    features: { type: String, required: false },

    // Design Preferences
    designStyle: { type: String, required: false },
    needHelpWithDesign: { type: Boolean, default: false },
    colorScheme: { type: String, required: false },
    inspiration: { type: String, required: false },

    // Timeline & Budget
    timeline: { type: String, required: true },
    budget: { type: String, required: true },

    additionalInfo: { type: String, required: false },

    submittedAt: { type: Date, default: Date.now },
    language: { type: String, required: true, default: "en" },
  },
  {
    timestamps: true,
  }
);

// Only create the model if it doesn't exist already
export const FormSubmission = mongoose.models.FormSubmission || mongoose.model("FormSubmission", FormSubmissionSchema);
