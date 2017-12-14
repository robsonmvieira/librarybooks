const express = require('express');
const router = require('express-promise-router')();
const teacher = require('../../controllers/teacher/teacher-controller');

router.route('/teachers')
  .get(teacher.index);

/*
  if to need to implement here the rest resource
*/  

module.exports = router;
