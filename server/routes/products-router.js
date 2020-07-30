const router = require('express').Router()
const Auth = require('../middlewares/auth')
const ProductController = require('../controllers/product-controller')

router.get('/', ProductController.findAll)
router.get('/:id', ProductController.findOne)

router.use(Auth.authentication)
router.post('/', Auth.auhtorizationAdmin, ProductController.create)
router.put('/:id', Auth.auhtorizationAdmin, ProductController.update)
router.delete('/:id', Auth.auhtorizationAdmin, ProductController.delete)


module.exports = router;