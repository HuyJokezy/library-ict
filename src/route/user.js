const router = require('express').Router()
const user = require('../controllers/user')

router.get('/:username', (req, res) => user.getByUsername(req, res))
router.get('/', (req, res) => user.getAll(req, res))

module.exports = router
