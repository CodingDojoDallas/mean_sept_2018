const mongoose = require('mongoose'),
      Cake = mongoose.model('Cake'),
      cakes = require('../controllers/cakes_controller.js');

module.exports = function(app) {
  app.get('/cakes', cakes.all);
  app.post('/cakes', cakes.create);
}
