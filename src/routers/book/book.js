const express = require('express');
const router = require('express-promise-router')();
const book = require('../../controllers/book/book-controller');

router.route('/')
  .get(book.index);

router.route('/:bookId')
  .get(book.one)
  .put(book.update)
  .patch(book.replace)
  .delete(book.remove);

router.route('/:isbn')
  .get(book.one);

module.exports = router;
