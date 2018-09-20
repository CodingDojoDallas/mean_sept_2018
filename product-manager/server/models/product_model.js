var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required']},
  price: {type: Number, required: [true, 'Price is required']},
  info: {type: String, required: [true, 'Info is required']},
  image_url: {type: String},
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
