const express = require('express');
const bodyParser = require('body-parser');
const log = require('morgan');

const app = express();
const connection = require('./src/database/connection');

// resources
const book =  require('./src/routers/book/book');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', book);


app.listen(8000, () => {
  console.log('running 8000');
});

