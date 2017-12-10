const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    minlength: 9,
  },
  Length: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
  }],
  price: {
    type: Number,
    required: true,
  },
  promocional_price: {
    type: Number,
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'author',
  }],
  publisher: [{
    type: Schema.Types.ObjectId,
    ref: 'publisher',
  }],
  quantityHands: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  year: {
    type: Number,
  },
  available: {
    type: Number,
  },
});

const book = mongoose.model('book', bookSchema);

module.exports = book;
