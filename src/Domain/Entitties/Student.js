const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = Schema({
  name: {
    type: String,
    requided: true,
  },
  password: {
    type: String,
    requided: true,
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
