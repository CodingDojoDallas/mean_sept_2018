var express = require('express'),
    path = require('path'),
    indexRouter = require('./routes/index'),
    mongoose = require('./config/mongoose');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(8000, () => {
  console.log('Running on port 8000');
})
