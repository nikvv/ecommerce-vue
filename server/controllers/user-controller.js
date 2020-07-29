const {User} = require('../models')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class UserController{
    static async register(req,res,next){
        const {username,email,password} = req.body
        const newUser = {username,email,password}
        try {
            if(username === '' || username === null){
                throw({status:400,msg:'Username cannot be empty!'})
            }
            if(email === '' || email === null){
                throw({status:400,msg:'Email cannot be empty!'})
            }
    
            if(password === '' || password === null){
                throw({status:400,msg:'Password cannot be empty!'})
            }
            const checkEmail = await User.findOne({where:{email}})
            if(checkEmail){
                throw({status:400,msg:'Email already registered!'})
            }
            else{
                const createdUser = await User.create(newUser)
                res.status(201).json({id:createdUser.id,username:createdUser.username,email:createdUser.email})
            }
        } catch (error) {
            next(error)
        }
    }
    static async login(req,res,next){
        const {email,password} = req.body
        try {
            if(email === '' || email === null){
                throw({status:400,msg:'Email cannot be empty!'})
            }
    
            if(password === '' || password === null){
                throw({status:400,msg:'Password cannot be empty!'})
            }
            const checkUser = await User.findOne({where:{email}})
            if(!checkUser){
                throw({status:404,msg:'Invalid login data'})
            }
            else{
                const match = compare(password,checkUser.password)
                if(!match){
                    throw({status:400,msg:'Invalid login data'})
                }
                else{
                    const payload = {id:checkUser.id,role:checkUser.role,username:checkUser.username,email:checkUser.email}
                    const access_token = createToken(payload)

                    res.status(200).json({access_token})
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;