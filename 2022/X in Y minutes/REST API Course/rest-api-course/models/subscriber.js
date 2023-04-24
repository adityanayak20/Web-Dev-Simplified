const mongoose = require('mongoose')

const  Schema = mongoose.Schema
const model = mongoose.model

const subscriberSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = model('Subscriber', subscriberSchema)