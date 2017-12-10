const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const publishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: [{
    type: String,
  }],
  site: {
    type: String,
  },
  address: {
    type: String,
  },
  authors: [{
    type: Schema.Types.ObjectId,
    ref: 'author',
  }],
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'book',
  }],
});

const publish = mongoose.model('publish', publishSchema);

module.exports = publish;
