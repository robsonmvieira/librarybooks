const Author = require('../../Domain/Entitties/Author');

module.exports = {
  create: async (req, res, next) => {
    const author = req.body;
    const newAuthor = new Author(author);
    const result = await newAuthor.save();
    res.status(200).json(result);
  },
  index: async (req, res, next) => {
    const result = await Author.find({});
    res.status(200).json(result);
  },
  one: async (req, res, next) => {
    const { authorId } = req.params;
    const result = await Author.findById(authorId);
    res.status(200).json(result);
  },
  update: async (req, res, next) => {
    const { authorId } = req.params;
    const newAuthor = req.body;
    const result = await Author.findByIdAndUpdate(authorId, newAuthor);
    res.status(200).json({ message: true });
  },
  replace: async (req, res, next) => {
    const { authorId } = req.params;
    const newAuthor = req.body;
    const result = await Author.findByIdAndUpdate(authorId, newAuthor);
    res.status(200).json({ message: true });
  },
  remove: async (req, res, next) => {
    const { authorId } = req.params;
    const result = await Author.findByIdAndRemove(authorId);
    res.status(200).json({ message: true });
  },
}

