const Teacher = require('../../Domain/Entitties/Teacher');

module.exports = {
  create: async (req, res, next) => {
    const teacher = req.body;
    const newTeacher = new Teacher(teacher);
    const result = await newTeacher.save();
    res.status(200).json(result);
  },
  index: async (req, res, next) => {
    const result = Teacher.find({});
    res.status(200).json(result);
  },
  one: async (req, res, next) => {
    const { teacherId } = req.params;
    const result = Teacher.findById(teacherId);
    res.status(200).json(result);
  },
  update: async (req, res, next) => {
    const { teacherId } = req.params;
    const newTeacher = req.body;
    const result = Teacher.findByIdAndUpdate(teacherId, newTeacher);
    res.status(200).json({ message: true });
  },
  replace: async (req, res, next) => {
    const { teacherId } = req.params;
    const newTeacher = req.body;
    const result = Teacher.findByIdAndUpdate(teacherId, newTeacher);
    res.status(200).json({ message: true });
  },
  remove: async (req, res, next) => {
    const { teacherId } = req.params;
    const result = Teacher.findByIdAndRemove(teacherId);
    res.status(200).json({ message: true });
  },

};

