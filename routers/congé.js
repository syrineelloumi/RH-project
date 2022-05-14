let express = require('express')
const {  addConge, deleteConge, updateConge, getUserConges, getAllConges, updateEtatConge } = require('../controllers/congé.controller')
const  auth  = require('../middleware/auth')



let router = express.Router()

router.post('/addConge',auth,addConge)
router.delete('/deleteConge/:id',auth,deleteConge)
router.put('/updateConge/:id',auth,updateConge)
router.get('/getUserConges',auth,getUserConges)
router.get('/getAllConges',auth,getAllConges)
router.put('/updateEtatConge/:id',auth,updateEtatConge)


module.exports=router