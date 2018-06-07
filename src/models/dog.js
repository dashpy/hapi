'use strict';


// mongoose is a ORM
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const dogModel = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true }
});


// the schema is useless so far
// we need to create a model using it

var dog = mongoose.model('Dog', dogModel, 'dogs'); 

// make this available to our users in our Node applications
module.exports = dog;