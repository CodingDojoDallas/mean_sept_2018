var users = require('../controllers/users')

module.exports = function(app) {
  app.get('/users', users.users);
}
