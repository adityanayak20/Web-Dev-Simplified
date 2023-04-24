const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

const addressSchema = new Schema({
  street: String,
  city: String
})

const userSchema = new Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: v => v % 2 === 0, 
      message: props => `${props.value} is not a even number`
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
    default: () => Date.now()
  },
  upadatedAt: {
    type: Date,
    default: () => Date.now()
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema
})

module.exports = model('User', userSchema)