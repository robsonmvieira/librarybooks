const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    minlength: 11,
    unique: true,
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
  confirmPassword: {
    type: String,
    required: true,
    selected: false,
  },
  isActivate: {
    type: Boolean,
    default: false,
  },
});

const teacher = mongoose.model('teacher', teacherSchema);

module.exports = teacher;

