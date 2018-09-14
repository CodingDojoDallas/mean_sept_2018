var express = require('express');
var router = express.Router();

var User = require('../models/user')

/* GET: all users. */
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json({'err': err, 'users': users});
  })
});

/* GET:  user. */
router.get('/users/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.json({'err': err, 'user': user});
  })
});

/* POST: create user. */
router.post('/users', function(req, res) {
  console.log('DIS DA BODY:', req.body);
  User.create(req.body, function(err, user) {
    res.json({'err': err, 'user': user});
  });
});

router.get('/thisdoesntexist', function(req, res) {
  console.log(req.body);
  res.json({'err': req.body});
});

module.exports = router;
