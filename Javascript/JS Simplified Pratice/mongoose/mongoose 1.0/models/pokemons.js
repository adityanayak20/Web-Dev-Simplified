const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema({
  moveMechanic: String,
  moveNames: [String]
})

const pokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  HP: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: v => v % 2 === 0,
      message: props => `${props.value} is not an even number`
    } 
  },
  type: [String],
  moves: moveSchema,
  nextEvolution: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Pokemon'
  },
  isWild: Boolean,
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

pokemonSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
})
module.exports = mongoose.model('Pokemon', pokemonSchema)