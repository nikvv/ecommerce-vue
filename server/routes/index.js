const router = require('express').Router()
const productRouter = require('./products-router')
const cartRouter = require('./cart-router')

const UserController = require('../controllers/user-controller')
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/products',productRouter)
router.use('/carts',cartRouter)
module.exports = router;