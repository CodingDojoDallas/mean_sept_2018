const controller = require('../controllers/location_controller.js');

module.exports = function(app) {
  app.get('/:location', controller.control);
}
