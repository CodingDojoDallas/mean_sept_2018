const mongoose = require('mongoose'),
      path = require('path'),
      fs = require('fs');

mongoose.connect('mongodb://localhost/restful_tasks_api');
mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
