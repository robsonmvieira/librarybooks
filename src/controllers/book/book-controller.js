const Book = require('../../Domain/Entitties/Book');


module.exports = {
  index: async (req, res, next) => {
    const result = await Book.find({});
    res.status(200).json(result);
  },
  create: async (req, res, next) => {
    const book = req.body;
    const newBook = new Book(book);
    const result = await newBook.save();
    res.status(200).json({ message: true });
  },
  one: async (req, res, next) => {
    const { bookId } = req.params;
    const result = await Book.findById(bookId);
    res.status(200).json(result);
  },
  update: async (req, res, next) => {
    const { bookId } = req.params;
    const upbook = req.body;
    const result = await Book.findByIdAndUpdate(bookId, upbook);
    res.status(200).json({ message: true });
  },
  replace: async (req, res, next) => {
    const { bookId } = req.params;
    const upbook = req.body;
    const result = await Book.findByIdAndUpdate(bookId, upbook);
    res.status(200).json({ message: true });
  },
  remove: async (req, res, next) => {
    const { bookId } = req.params;
    const result = await Book.findByIdAndRemove(bookId);
    res.status(200).json({ message: true });
  },
  findIsbn: async (req, res, next) => {
    const { isbn } = req.params;
    const result = await Book.findOne(isbn);
    res.status(200).json(result);
  },
}