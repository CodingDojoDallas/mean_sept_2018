const mongoose = require('mongoose'),
      Task = mongoose.model('Task'),
      tasks = require('../controllers/tasks_controller.js');

module.exports = function(app) {
  app.get('/tasks', tasks.index);
  app.get('/tasks/:id', tasks.show);
  app.post('/tasks', tasks.create);
  app.put('/tasks/edit/:id', tasks.update);
  app.delete('/tasks/:id', tasks.destroy);
}
