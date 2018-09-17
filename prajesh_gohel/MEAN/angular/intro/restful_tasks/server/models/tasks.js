const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  completed: {
    type: Boolean,
    required: [true, 'Was the task completed?']
  }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
