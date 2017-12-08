const express = require('express');
const router = require('express-promise-router')();
const publish = require('../../controllers/publish/publish-controller');

router.route('/')
  .get(publish.index)
  .post(publish.create);

router.route('/:publishId')
  .get(publish.one)
  .put(publish.update)
  .patch(publish.replace)
  .delete(publish.remove);

module.exports = router;
