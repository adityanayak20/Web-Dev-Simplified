const express = require('express');
const mongoose = require('mongoose');
const name = require('./routes/names')
const Name = require('./models/name')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
res.render('index', {txt: 'World'})
})

app.use('/names', name)

app.listen(5000 || process.env.port, () => console.log('Server has Started'))