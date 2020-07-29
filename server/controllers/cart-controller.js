const { Cart, CartProduct } = require('../models')

class CartController {
      static async create(req, res, next) {
            const { product_id } = req.body
            const { id } = req.userData
            try {
                  const foundCart = await Cart.findOrCreate({
                        where: {
                              userId: id,
                              status: 'on-process'
                        }
                  })

                  const existInCart = await CartProduct.findOrCreate({
                        where: {
                              cartId: foundCart.id,
                              proudctId: product_id
                        },
                  })
                  existInCart.quantity += 1
                  existInCart.save()
                  res.status(201).json({
                        cartId: foundCart.id,
                        cartProductId: existInCart.id
                  })

            } catch (error) {
                  console.log(error)
            }
      }

      static async updateQuantity(req, res, next) {
            const productId = req.params.productId
            const { value } = req.body
            try {
                  const cartItem = await CartProduct.findOne({ where: { productId } })
                  cartItem.quantity += value
                  cartItem.save()
                  const message = 'Successfully update item quantity.'
                  res.status(200).json({message})
            } catch (error) {
                  console.log(error)
            }
      }

      static async deleteItem(req, res, next) {
            const productId = req.params.productId
            const { cartId } = req.body
            try {
                  deletedItem = await CartProduct.destroy({ where: { cartId, productId } })
                  const message = 'Successfully deleted item from cart.'
                  res.status(200).res.json({message})
            } catch (error) {
                  console.log(error)
            }

      }
}

module.exports = CartController
