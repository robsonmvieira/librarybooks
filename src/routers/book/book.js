const express = require('express');
const router = require('express-promise-router')();
const book = require('../../controllers/book/book-controller');


const multer = require('multer');

const upload = multer({ dest: 'src/uploads' });

router.route('/')
  .get(book.index);

router.route('/', upload.single('bookPhoto')).post(book.create);

router.route('/:bookId')
  .get(book.one)
  .put(book.update)
  .patch(book.replace)
  .delete(book.remove);

router.route('/:isbn')
  .get(book.one);

module.exports = router;
