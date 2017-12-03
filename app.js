const express = require('express');
const app = express();
const connection = require('./database/connection');
const bodyParser = require('body-parser');
const log =  require('morgan');




app.listen(8000, () => {
    console.log('running 8000');
})
