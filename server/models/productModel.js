const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The product must have a name'],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, 'The product must have a slug'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'The product must have a description'],
    unique: true,
  },
  price: { type: Number, required: [true, 'A tour must have a price'] },
  image: {
    type: String,
    required: [true, 'The product must have a image'],
    unique: true,
  },
  spicy: {
    type: Boolean,
    default: false,
    required: [true, 'Confirm if the product is spicy'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
