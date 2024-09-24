import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      unique: true,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true },
);

const URL = mongoose.model('URL', urlSchema); // Model name should be 'URL'

export default URL;
