const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true });

module.exports = mongoose;