import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the post.'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide a unique slug for the post.'],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required.'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required.'],
    },
    coverImage: {
      type: String,
      required: [true, 'Cover image is required.'],
    },
    author: {
      type: String,
      required: [true, 'Author name is required.'],
      default: 'Coffee Specialist',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', PostSchema);
