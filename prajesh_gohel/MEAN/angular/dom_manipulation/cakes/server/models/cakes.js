const mongoose = require('mongoose');

var CakeSchema = new mongoose.Schema({
  baker_name: {
    type: String,
    required: [true, 'Baker name is required']
  },
  imageURL: {
    type: String,
    required: [true, 'Url is required']
  },
  ratings: []
}, { timestamps: true });

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;
