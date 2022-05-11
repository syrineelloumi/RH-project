let express = require('express')
const { addPresence,deletePresence, updatePresence, getPresences } = require('../controllers/présence.controlleur')
const  auth  = require('../middleware/auth')


let router = express.Router()

router.post('/addPresence',auth,addPresence)
router.delete('/deletePresence/:id',auth,deletePresence)
router.put('/updatePresence/:id',auth,updatePresence)
router.get('/getPresences',auth,getPresences)


module.exports=router