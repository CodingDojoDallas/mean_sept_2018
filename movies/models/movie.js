var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: {type: String, required: [true, 'Title is required']},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: [true, 'Review required']}]
}, {timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
