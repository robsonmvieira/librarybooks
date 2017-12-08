const Student = require('../../Domain/Entitties/Student');

module.exports = {
  create: async (req, res, next) => {
    const student = req.body;
    const newStudent = new Student(student);
    const result = await newStudent.save();
    res.status(200).json(result);
  },
  index: async () => {

  },
  one: async () => {

  },
  update: async () => {

  },
  replace: async () => {

  },
  remove: async () => {
     
  },

}
