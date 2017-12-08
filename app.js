const express = require('express');
const bodyParser = require('body-parser');
const log = require('morgan');

const app = express();
const connection = require('./src/database/connection');

// resources
const book = require('./src/routers/book/book');
const publish = require('./src/routers/publish/Publish');
const author = require('./src/routers/author/author');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/books', book);
app.use('/publish', publish);
app.use('/authors', author);


app.listen(8000, () => {
  console.log('running 8000');
});
