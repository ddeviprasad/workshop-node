const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Movie');
mongoose.connect('mongodb://admin:admin123@ds241012.mlab.com:41012/movie');

module.exports = { mongoose };