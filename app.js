const express = require('express');
const bodyParser = require('body-parser');
const log = require('morgan');

const app = express();
const connection = require('./src/database/connection');

// resources
const book = require('./src/routers/book/book');
const publish = require('./src/routers/publish/publish');
const author = require('./src/routers/author/author');
const teachers = require('./src/routers/teacher/teacher');
const students = require('./src/routers/student/student');

// mid
app.use(log('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/books', book);
app.use('/publish', publish);
app.use('/authors', author);
app.use('/teachers', teachers);
app.use('/students', students);

app.listen(8000, (err) => {
  if (err) throw err;
  console.log('running 8000');
});
