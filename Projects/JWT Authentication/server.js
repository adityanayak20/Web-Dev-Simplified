const express = require('express')
const app = express()

const posts = [
  {
    username: 'Kyle',
    title: 'post 1'
  },
  {
    username: 'jim',
    title: 'post 2'
  }
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.listen(3000, console.log('Server started'))
