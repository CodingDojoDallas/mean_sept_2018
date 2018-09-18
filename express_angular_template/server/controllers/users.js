var User = require('../models/user')

module.exports = {
  users: function(req, res) {
    users = User.find({}, function(err, users) {
      if (err) {
        res.json({'err': 'Ooooopsies'});
      }
      else {
        res.json(users);
      }
    })
  }
}
