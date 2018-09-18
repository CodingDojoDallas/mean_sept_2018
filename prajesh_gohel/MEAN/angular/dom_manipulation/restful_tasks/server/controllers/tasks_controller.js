const Task = require('../models/tasks.js');

module.exports = {
  index: function(req, res) {
    Task.find({}).exec(function(err, tasks) {
      if (err) {
        console.log(err);
        return res.json({ error: err })
      }
      return res.json({ tasks: tasks })
    });
  },
  show: function(req, res) {
    Task.findOne({ _id: req.params.id }).exec(function(err, task) {
      if (err) {
        console.log(err);
        return res.json({ error: err });
      }
      console.log(`showing ${task.title}`);
      return res.json({ task: task });
    })
  },
  create: function(req, res) {
    var task = new Task({
      title: req.body.title,
      description: req.body.desc,
      completed: req.body.completed
    });
    task.save(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/')
      }
      console.log('added new task');
      return res.redirect('/');
    });
  },
  update: function(req, res) {
    Task.update({ _id: req.params.id }, {
      $set: {
        title: req.body.title,
        description: req.body.desc,
        completed: req.body.completed
      }
    }, { runValidators: true }).exec(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }
      console.log(`updated ${req.body.title}`);
      return res.redirect('/');
    });
  },
  destroy: function(req, res) {
    Task.remove({ _id: req.params.id }).exec(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }
      return res.redirect('/');
    })
  }
};
