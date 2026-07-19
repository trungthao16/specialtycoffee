import mongoose from 'mongoose';

const MetaSEOSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: [true, 'Path is required.'],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'SEO Title is required.'],
    },
    description: {
      type: String,
      required: [true, 'SEO Description is required.'],
    },
    keywords: {
      type: String,
      default: '',
    },
    ogImage: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.model('MetaSEO', MetaSEOSchema);
