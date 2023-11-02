const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  // name, breed, age, createdDate
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
