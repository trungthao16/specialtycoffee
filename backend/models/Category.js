import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this category.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug for this category.'],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: [200, 'Description cannot be more than 200 characters'],
    },
    type: {
      type: String,
      required: true,
      enum: ['product', 'post'],
      default: 'product',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Category', CategorySchema);
