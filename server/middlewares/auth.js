const { verifyToken } = require("../helpers/jwt")
const {User} = require('../models')

class Auth{
    static async authentication(req,res,next){
        const {access_token} = req.headers
        const decode = verifyToken(access_token)
        try {
            const checkUser = await User.findOne({where:{email:decode.email}})
            if(!checkUser){
                throw({status:401,msg:'Unauthorized, please login first!'})
            }
            else{
                req.userData = decode
                next()
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async auhtorizationAdmin(req,res,next){
        const {access_token} = req.headers
        const decode = verifyToken(access_token)
        try {
            const checkUser = await User.findOne({where:{email:decode.email}})
            if(!checkUser){
                throw({status:401,msg:'Unauthorized, please login first!'})
            }
            else{
                if(checkUser.role !== 'admin'){
                    throw({status:403, msg:'Access not authorized. (Only admin can do this action)'})
                }
                else{
                    next()
                }
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = Auth;