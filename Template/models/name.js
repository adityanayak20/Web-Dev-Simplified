const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({})

module.exports = mongoose.model('Name', nameSchema)