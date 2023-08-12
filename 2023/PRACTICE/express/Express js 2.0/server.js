const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const option = req.body.option;
  console.log(option); // This will log either "starter" or "friends"
  res.send(`You selected the ${option} option`);
});


app.listen(process.env.PORT || 3000)