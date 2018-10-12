var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required']},
}, {timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
