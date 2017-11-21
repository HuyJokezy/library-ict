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

function login (req, res) {
  let { username, password } = req.body
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  user.queryByUsernameAndPassword(username, password, callback)
}

function addNewUser (req, res) {
  let callback = function (jsonResponse) {
    res.json(jsonResponse)
  }
  user.insert(req.body, callback)
}

module.exports = {
  getByUsername,
  getAll,
  login,
  addNewUser
}
