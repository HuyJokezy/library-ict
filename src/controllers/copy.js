const copy = require('../models/copy')

function getByCopynumber (req, res) {
  let { copyNumber } = req.params
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  if (copyNumber) {
    copy.queryByCopynumber(copyNumber, callback)
  } else {
    res.json({})
  }
}

function getAll (req, res) {
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  let { bookNumber } = req.query
  if (bookNumber) {
    copy.queryByBooknumber(bookNumber, callback)
  } else {
    copy.queryAll(callback)
  }
}

module.exports = {
  getByCopynumber,
  getAll
}
