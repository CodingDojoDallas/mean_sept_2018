const mongoose = require('mongoose'),
      Bird = mongoose.model('Bird');

  module.exports = {
    index: function(req, res) {
      Bird.find({}).exec(function(err, birds) {
        if (err) {
          console.log('something went wrong:', err);
        }
        else {
          res.render('index', {birds: birds});
        }
      });
    },
    new: function(req, res) {
      res.render('new');
    },
    create: function(req, res) {
      var bird = new Bird({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age});
      bird.save(function(err) {
        if (err) {
          console.log('something went wrong');
          for (var key in err.errors) {
            req.flash('create', err.errors[key].message);
          }
          res.redirect('/birds/new');
        }
        else {
          console.log('successfully created bird');
          res.redirect('/');
        }
      });
    },
    show: function(req, res) {
      Bird.findOne({_id: req.params.id}).exec(function(err, bird) {
        if (err) {
          console.log('something went wrong:', err);
          res.redirect('/');
        }
        else {
          res.render('show', {bird: bird});
        }
      });
    },
    edit: function(req, res) {
      console.log(req.params.id);
      Bird.findById(req.params.id).exec(function(err, bird) {
        if (err || !Bird) {
          console.log('something went wrong:', err);
          res.redirect('/');
        }
        else {
          res.render('edit', {bird: bird});
        }
      });
    },
    update: function(req, res) {
      Bird.update({_id: req.params.id}, {$set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age
      }}, {runValidators: true}).exec(function(err) {
        if (err) {
          console.log('something went wrong:', err);
          for (var key in err.errors) {
            req.flash('edit', err.errors[key].message);
          }
          // res.redirect('/birds/edit/'+bird._id);
          res.redirect(`/birds/edit/${req.params.id}`);
        }
        else {
          console.log('successfully updated bird');
          res.redirect('/');
        }
      });
    },
    destroy: function(req, res) {
      Bird.remove({_id: req.params.id}, function(err) {
        if (err) {
          console.log(err);
          res.redirect('/');
        }
        else {
          res.redirect('/');
        }
      });
    }
  }
