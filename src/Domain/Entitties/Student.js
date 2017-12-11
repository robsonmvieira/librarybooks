const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    selected: false,
  },
  collegeId: {
    type: Number,
    required: true,
  },
  isActivate: {
    type: Boolean,
    default: false,
  },

});

const student = mongoose.model('student', studentSchema);

module.exports = student;
