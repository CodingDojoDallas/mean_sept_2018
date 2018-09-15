const Person = require('../models/people.js');

module.exports = {
  index: function(req, res) {
    Person.find({}).exec(function(err, people) {
      if (err) {
        console.log('something went wrong:', err);
        return res.json({ error: err })
      }
      return res.json({ people: people })
    })
  },
  create: function(req, res) {
    var person = new Person({ name: req.params.name });
    person.save(function(err) {
      if (err) {
        console.log('something went wrong:', err);
        return res.json({ error: err });
      }
      console.log('added person');
      return res.redirect('/');
    });
  },
  destroy: function(req, res) {
    Person.remove({ name: req.params.name }, function(err) {
      if (err) {
        console.log('something went wrong:', err);
        return res.json({ error: err });
      }
      console.log('removed person');
      return res.redirect('/');
    })
  },
  show: function(req, res) {
    Person.findOne({ name: req.params.name }, function(err, person) {
      if (err) {
        console.log('something went wrong:', err);
        return res.json({ error: err });
      }
      console.log('showing', req.params.name);
      return res.json({ person: person });
    });
  }
};
