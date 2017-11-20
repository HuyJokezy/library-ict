const router = require('express').Router()
const copy = require('../controllers/copy')

router.get('/:copyNumber', (req, res) => copy.getByCopynumber(req, res))
router.get('/', (req, res) => copy.getAll(req, res))

module.exports = router
