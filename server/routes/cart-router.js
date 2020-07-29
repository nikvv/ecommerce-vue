const router = require('express').Router()
const Auth = require('../middlewares/auth')
const CartController = require('../controllers/cart-controller')

router.use(Auth.authentication)

router.post('/', CartController.create)
router.delete('/:productId', CartController.create)
router.put('/', CartController.updateQuantity)



module.exports = router;