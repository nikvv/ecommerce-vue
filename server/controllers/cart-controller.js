const { Cart, CartProduct, Product } = require('../models')

class CartController {

      static async userCart(req, res, next) {
            const { id } = req.userData
            try {
                  let cart = await Cart.findOne({
                        where: {
                              userId: id,
                              status: 'on-process'
                        },
                        include: [{ model: CartProduct, include: Product }]
                  })
      
                  if (cart) {
                        res.status(200).json({ cart })
                  }
                  else{
                        // let noCart = {cart:{CartProducts:[]}}
                        // res.status(200).json(noCart)
                        throw({status:404,msg:'Cart is empty.'})
                  }
            } catch (error) {
                  next(error)
            }
            
      }

      static async add(req, res, next) {
            const { product_id } = req.body
            const { id } = req.userData
            try {
                  const checkProduct = await Product.findOne({ where: { id: product_id } })
                  if (!checkProduct) {
                        throw ({ status: 404, msg: 'Product not found.' })
                  }
                  else {
                        const foundCart = await Cart.findOrCreate({
                              where: {
                                    userId: id,
                                    status: 'on-process'
                              }
                        })
                        const existInCart = await CartProduct.findOrCreate({
                              where: {
                                    cartId: foundCart[0].id,
                                    productId: product_id
                              },
                        })
                        existInCart[0].quantity += 1
                        existInCart[0].save()
                        res.status(201).json({
                              cartId: foundCart[0].id,
                              cartProductId: existInCart[0].id
                        })
                  }
            } catch (error) {
                  console.log(error)
                  next(error)
            }
      }

      static async updateQuantity(req, res, next) {
            const productId = req.params.productId
            const { value } = req.body
            // value = +value
            try {
                  const cartItem = await CartProduct.findOne({ where: { productId } })
                  cartItem.quantity += value
                  cartItem.save()
                  const message = 'Successfully update item quantity.'
                  res.status(200).json({ message })
            } catch (error) {
                  console.log(error)
                  next(error)
            }
      }

      static async deleteItem(req, res, next) {
            const productId = req.params.productId
            const { cartId } = req.body
            try {
                  const deletedItem = await CartProduct.destroy({ where: { cartId, productId } })
                  console.log(deletedItem)
                  const message = 'Successfully deleted item from cart.'
                  res.status(200).json({ message })
            } catch (error) {
                  console.log(error)
                  next(error)
            }

      }

      static async checkout(req, res, next) {
            //      const  payload = req.body
            //       res.status(200).json({payload})
            const userId = req.userData.id

            const userCart = await Cart.findOne({
                  where: { userId, status: 'on-process' },
                  include: [{ model: CartProduct, include: Product }]
            })
            if (userCart) {
                  userCart.status = 'completed'
                  userCart.CartProducts.forEach(cartProduct => {
                        console.log(cartProduct)
                        Product.decrement('stock', {
                              by: cartProduct.quantity,
                              where: { id: cartProduct.Product.id }
                        })
                  })
                  userCart.save()

                  res.status(200).json({msg: 'Checkout berhasil!'})
            }
      }
}

module.exports = CartController
