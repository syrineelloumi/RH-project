let express = require('express')
const{getUsers,getUser,createUser,deleteUser,updateUser, login}= require('../controllers/user.controller')

//const  authorization = require('../middleware/auth')
const  auth  = require('../middleware/auth')
const passport = require('passport')
const rolevalidator = require('../middleware/role')
const { authenticate } = require('passport')
let router = express.Router()

// router.get('/getUsers',passport.authenticate('jwt', { session: false }),rolevalidator(["Admin"]),getUsers)
router.get('/getUsers',auth,getUsers)
router.get('/getUser/:nom'   ,getUser)
router.post('/createUser' ,createUser)
router.delete('/deleteUser/:nom' ,deleteUser)
router.put('/updateUser/:nom'   ,updateUser)
router.post('/login',login)
module.exports=router