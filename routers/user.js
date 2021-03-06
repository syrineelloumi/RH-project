let express = require('express')
const{getUsers,getUser,createUser,deleteUser,updateUser, login, getUserByNom, UpdateMp}= require('../controllers/user.controller')

//const  authorization = require('../middleware/auth')
const  auth  = require('../middleware/auth')
const passport = require('passport')
const rolevalidator = require('../middleware/role')
const { authenticate } = require('passport')
const { createUserControls ,validator,loginControls} = require('../middleware/validator')
let router = express.Router()

// router.get('/getUsers',passport.authenticate('jwt', { session: false }),rolevalidator(["Admin"]),getUsers)
router.get('/getUsers',auth,getUsers)
router.get('/getUserByNom/:nom',getUserByNom)
router.get('/getUser',auth,getUser)
router.post('/createUser',createUserControls(),validator,createUser)
router.delete('/deleteUser/:id',auth ,deleteUser)
router.put('/updateUser/:id',auth,createUserControls(),validator   ,updateUser)
router.post('/login',login)
router.put('/UpdateMp/:id',UpdateMp)

module.exports=router