import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name.'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide a unique slug for this product.'],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description.'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price.'],
      min: [0, 'Price must be a positive number.'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL for the product.'],
    },
    coffeeType: {
      type: String,
      required: [true, 'Please specify the coffee bean type.'],
      enum: ['Arabica', 'Robusta', 'Blend'],
      default: 'Arabica',
    },
    roastLevel: {
      type: String,
      required: [true, 'Please specify the roast level.'],
      enum: ['Light', 'Medium', 'Dark'],
      default: 'Medium',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Please assign a category to this product.'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 0,
      max: 5,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
