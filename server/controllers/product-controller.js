const { Product } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class ProductController {

    static async findAll(req,res,next){
        try {
            const allProducts = await Product.findAll({order:[['id','ASC']]})
            res.status(200).json({products:allProducts})
        } catch (error) {
            next(error)
        }
        

    }
    static async create(req, res, next) {
        const { name, image_url, price, stock } = req.body
        const newProduct = { name, image_url, price, stock }
        try {
            const createdProduct = await Product.create(newProduct)
            res.status(201).json({ id: createdProduct.id, name: createdProduct.name, image_url: createdProduct.image_url, price: createdProduct.price, stock: createdProduct.stock })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        const id = req.params.id
        const updatedProduct = {...req.body}
        try {
            const checkProduct = await Product.findOne({where:{id}})
            if(!checkProduct){
                throw({status:404,msg:'Product not found.'})
            }
            else{
                await Product.update(updatedProduct,{where:{id}})
                res.status(200).json({msg:'Product successfully updated.'})
            }
            
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        const id = req.params.id
        try {
            const checkProduct = await Product.findOne({where:{id}})
            if(!checkProduct){
                throw({status:404,msg:'Product not found.'})
            }
            else{
                await Product.destroy({where:{id}})
                res.status(200).json({msg:'Product successfully deleted.'})
            }
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController;