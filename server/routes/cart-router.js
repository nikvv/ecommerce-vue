const router = require('express').Router()
const Auth = require('../middlewares/auth')
const CartController = require('../controllers/cart-controller')

router.use(Auth.authentication)

router.post('/', CartController.add)
router.get('/', CartController.userCart)
router.put('/checkout', CartController.checkout)
router.delete('/:productId', CartController.deleteItem)
router.put('/:productId', CartController.updateQuantity)



module.exports = router;