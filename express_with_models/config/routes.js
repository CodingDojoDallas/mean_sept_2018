// Lets import our controller. views.py in Django, *_controller.rb in Ruby
// This demo controller exports functions for us to use.
var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  // /home is the url we are looking for and our_controller.home_function is
  // the function that will run when the server receives a get request.
  app.get('/users', users_controller.users);
}
