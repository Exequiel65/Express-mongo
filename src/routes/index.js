let express = require('express')
let router = express.Router()
let controller = require('../controller/indexController.js')

router.get('/', controller.index)
router.get('/product', controller.product)
router.get('/search', controller.find)
router.post('/create', controller.create)
router.delete('/delete/:id', controller.delete)
router.put('/update/:id', controller.update)
router.put('/update2/:id', controller.update)


module.exports = router