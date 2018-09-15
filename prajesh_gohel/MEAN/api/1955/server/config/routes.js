const mongoose = require('mongoose'),
      Person = mongoose.model('Person'),
      people = require('../controllers/people.js');

module.exports = function(app) {
  app.get('/', people.index);
  app.get('/new/:name', people.create);
  app.get('/remove/:name', people.destroy);
  app.get('/:name', people.show);
}
