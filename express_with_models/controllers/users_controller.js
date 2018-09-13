var User = require('../models/user');

// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  users: function(req, res){
    users = User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.render('index', {all_users: users});
      }
    });
  }
}
