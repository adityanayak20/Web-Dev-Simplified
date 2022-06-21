// require('dotenv').config()

// const express = require('express');
// const app = express()
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

// app.use(express.json())

// app.listen(process.env.port || 3000, () => console.log('Server Started'))

const mongoose = require('mongoose'); 
const Pokemon = require('./models/pokemons')
mongoose.connect('mongodb://localhost/pokemondb')

run()

async function run() {
  try {
    // const pokemon = new Pokemon({
    //   name: 'Chimchar',
    //   HP: 14,
    //   type:['Fire'],
    //   isWild: false
    // })

    //await pokemon.save()

    const pokemon = await Pokemon.findOne({} , {name: 1, updatedAt: 1})
    console.log(pokemon);
    await pokemon.save()
    console.log(pokemon)
  } catch(e) {
    console.log(e.message)
  }
}