var express = require('express');
var router = express.Router();
Movie = require('../models/movie');
Review = require('../models/review');

router.get('/', function(req, res, next) {
  Movie.find({}, (err, movies) => {
    if (err) { err = err.errors }
    res.json({ errors: err, payload: movies });
  })
});

router.post('/', function(req, res, next) {
  // first create and validate review
  r = new Review({ name: req.body.name });
  r.validate((validate_errors) => {
    if (validate_errors) {
      res.json({ errors: validate_errors.errors, payload: null });
    }
    else {
      m = new Movie({ title: req.body.title, reviews: [r._id] });
      m.save((err) => {
        if (err) { err = err.errors; }
        else {
          r.save((err) => {
            res.json({errors: err, payload: m});
          });
        }
      });
    }
  });
});

module.exports = router;
