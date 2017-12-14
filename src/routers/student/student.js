const express = require('express');
const router = require('express-promise-router')();
const student = require('../../controllers/student/student-controller');

router.route('/teachers')
  .get(student.index);

/*
  if to need to implement here the rest resource
*/  

module.exports = router;
