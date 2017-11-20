const user = require('../models/user')

function getByUsername (req, res) {
  let { username } = req.params
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  if (username) {
    user.queryByUsername(username, callback)
  } else {
    res.json({})
  }
}

function getAll (req, res) {
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  user.queryAll(callback)
}

module.exports = {
  getByUsername,
  getAll
}
