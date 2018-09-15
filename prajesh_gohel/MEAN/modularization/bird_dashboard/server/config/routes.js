const mongoose = require('mongoose'),
      Bird = mongoose.model('Bird'),
      birds = require('../controllers/birds.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    birds.index(req, res);
  });

  app.get('/birds/new', function(req, res) {
    birds.new(req, res);
  });

  app.post('/birds', function(req, res) {
    birds.create(req, res);
  });

  app.get('/birds/:id', function(req, res) {
    birds.show(req, res);
  });

  app.get('/birds/edit/:id', function(req, res) {
    birds.edit(req, res);
  });

  app.post('/birds/:id', function(req, res) {
    birds.update(req, res);
  });

  app.post('/birds/destroy/:id', function(req, res) {
    birds.destroy(req, res);
  });
}
