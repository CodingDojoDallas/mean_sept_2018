var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name:  { type: String, required: [true, 'Need a first name'] },
}, {timestamps: true });
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
