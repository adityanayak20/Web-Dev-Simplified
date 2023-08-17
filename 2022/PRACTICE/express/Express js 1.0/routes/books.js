const express = require('express')
const router = express.Router()

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.book);
    res.send(`Get Book with ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update Book with ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete Book with ID ${req.params.id}`)
  })

const books = [{ book: 'Harry Potter' }, { book: 'Song of Ice & Fire' }]
router.param('id', (req, res, next, id) => {
  req.book = book[id]
  next()
})

module.exports = router