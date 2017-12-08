const express = require('express');
const router = require('express-promise-router')();
const author = require('../../controllers/author/author-controller');

router.route('/')
  .get(author.index)
  .post(author.post);

router.route('/:authorId')
  .get(author.one)
  .put(author.update)
  .patch(author.replace)
  .delete(author.remove);


module.exports = router;
