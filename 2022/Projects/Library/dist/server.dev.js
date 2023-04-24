"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var app = express();

var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');

var authorsRouter = require('./routes/authors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express["static"]('public'));
app.use(express.urlencoded({
  limit: '10mb',
  extended: false
}));
app.use(express.json());

var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
var db = mongoose.connection;
db.on('error', function (error) {
  return console.error(error);
});
db.once('open', function () {
  return console.log('Connected to Mongoose');
});
app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.listen(process.env.PORT || 3000, function () {
  return console.log('Server Started');
});