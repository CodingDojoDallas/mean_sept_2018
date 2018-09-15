const mongoose = require('mongoose');

var BirdSchema = new mongoose.Schema({
  first_name: {type: String, required: [true, 'First name is required'], minlength: [2, 'First name must be at least two characters']},
  last_name: {type: String, required: [true, 'Last name is required'], minlength: [2, 'Last name must be at least two characters']},
  age: {type: Number, required: [true, 'Age is required'], min: [3, 'Must be 3 months or older']}
}, {timestamps: true});
mongoose.model('Bird', BirdSchema);
const Bird = mongoose.model('Bird');

module.exports = Bird;
