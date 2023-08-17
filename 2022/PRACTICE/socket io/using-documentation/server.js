const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//***********************************//

const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.render('index')
})


server.listen(3000, () => {
  console.log('listening on *:3000');
});