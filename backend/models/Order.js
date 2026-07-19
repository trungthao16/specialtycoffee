import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Customer name is required.'],
    },
    customerEmail: {
      type: String,
      required: [true, 'Customer email is required.'],
    },
    customerPhone: {
      type: String,
      required: [true, 'Customer phone number is required.'],
    },
    shippingAddress: {
      type: String,
      required: [true, 'Shipping address is required.'],
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1.'],
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
