let jwt = require ('jsonwebtoken')
let config=require('config')
const User = require('../models/user')
const secret = config.get("secret")

exports.auth = async(req,res,next)=>{
    let token = req.headers.authorization
    try {
        let verif = jwt.verify(token,secret)
        let user =await User.findById(verif.id)
        if(!user){
            res.status(400).json({msg:"n'est pas autorisé"})
        }
        req.user=user
        next()
    } catch (error) {
        res.send(error)
        
    }
}
