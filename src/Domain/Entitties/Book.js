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
    required: true,
  },
  description: {
    type: String,
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
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
    required: true,
  }],
  publisher: [{
    type: Schema.Types.ObjectId,
    ref: 'publisher',
    required: true,
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
    required: true,
  },

});


const book = mongoose.model('book', bookSchema);

module.exports = book;
