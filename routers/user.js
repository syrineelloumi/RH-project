let express = require('express')
const{getUsers,getUser,createUser,deleteUser,updateUser}= require('../controllers/user.controller')

let router = express.Router()

router.get('/getUsers',getUsers)
router.get('/getUser/:nom',getUser)
router.post('/createUser',createUser)
router.delete('/deleteUser/:nom',deleteUser)
router.put('/updateUser/:nom',updateUser)
module.exports=router