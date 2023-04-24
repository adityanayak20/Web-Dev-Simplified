const mongoose = require('mongoose');
const User = require('./User')

mongoose.connect('mongodb://localhost/testdb')

run()

async function run() {
  try {
    const user = await User.find({name: 'Kyle'})
    console.log(user);
  } catch(e) {
    console.log(e.message)
  }
}