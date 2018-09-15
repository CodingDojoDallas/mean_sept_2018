const mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] }
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
