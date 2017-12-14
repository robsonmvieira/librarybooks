const Student = require('../../Domain/Entitties/Student');

module.exports = {
  create: async (req, res, next) => {
    const student = req.body;
    const newStudent = new Student(student);
    const result = await newStudent.save();
    res.status(200).json(result);
  },
  index: async (req, res, next) => {
    const result = Student.find({});
    res.status(200).json(result);
  },
  one: async (req, res, next) => {
    const { studentId } = req.params;
    const result = Student.findById(studentId);
    res.status(200).json(result);
  },
  update: async (req, res, next) => {
    const { studentId } = req.params;
    const newStudent = req.body;
    const result = Student.findByIdAndUpdate(studentId, newStudent);
    res.status(200).json({ message: true });
  },
  replace: async (req, res, next) => {
    const { studentId } = req.params;
    const newStudent = req.body;
    const result = Student.findByIdAndUpdate(studentId, newStudent);
    res.status(200).json({ message: true });
  },
  remove: async (req, res, next) => {
    const { studentId } = req.params;
    const result = Student.findByIdAndRemove(studentId);
    res.status(200).json({ message: true });
  },

};

