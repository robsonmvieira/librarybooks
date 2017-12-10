const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'book',
    },
  ],
  email: {
    type: String,
    required: true,
  },
  site: {
    type: String,
  },

});

const author = mongoose.model('author', AuthorSchema);

module.exports = author;
