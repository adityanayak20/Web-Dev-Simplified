const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  console.log('Here')
  res.render('index', { text: "World" })
})

const userRouter = require('./routes/users')
const bookRouter = require('./routes/books')

app.use('/users', userRouter)
app.use('/books', bookRouter)

app.listen(process.env.PORT || 3000)