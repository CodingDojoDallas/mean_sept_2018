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
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.completed);
    var task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    task.save(function(err) {
      if (err) {
        console.log(err);
        return res.json({ error: err })
      }
      console.log('added new task');
      return res.json({ task: task });
    });
  },
  update: function(req, res) {
    Task.findByIdAndUpdate({ _id: req.params.id }, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
      }
    }, { runValidators: true }, function(err, task) {
      if (err) {
        console.log(err);
        return res.json({ error: err });
      }
      console.log(`updated ${req.body.title}`);
      return res.json({ task: task });
    });
  },
  destroy: function(req, res) {
    Task.remove({ _id: req.params.id }).exec(function(err) {
      if (err) {
        console.log(err);
        return res.json({ err: error });
      }
      return res.json({ message: "success" });
    })
  }
};
