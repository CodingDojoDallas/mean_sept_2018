var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  info: {type: String, required: true},
  image_url: {type: String},
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
