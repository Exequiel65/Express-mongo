let express = require('express')
let router = express.Router()
let controller = require('../controller/indexController.js')

router.get('/', controller.index)
router.get('/search', controller.find)


module.exports = router