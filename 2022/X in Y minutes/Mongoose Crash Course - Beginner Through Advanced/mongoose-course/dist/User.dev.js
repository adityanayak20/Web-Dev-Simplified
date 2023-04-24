"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var model = mongoose.model;
var addressSchema = new Schema({
  street: String,
  city: String
});
var userSchema = new Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: function validator(v) {
        return v % 2 === 0;
      },
      message: function message(props) {
        return "".concat(props.value, " is not a even number");
      }
    }
  },
  email: {
    type: String,
    minlength: 10,
    required: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    immutable: true,
    "default": function _default() {
      return Date.now();
    }
  },
  upadatedAt: {
    type: Date,
    "default": function _default() {
      return Date.now();
    }
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema
});
module.exports = model('User', userSchema);