const book = require('../models/book')

function getByBooknumber (req, res) {
  let { bookNumber } = req.params
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  if (bookNumber) {
    book.queryById(bookNumber, callback)
  } else {
    res.json({})
  }
}

function getAll (req, res) {
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  book.queryAll(callback)
}

module.exports = {
  getByBooknumber,
  getAll
}
