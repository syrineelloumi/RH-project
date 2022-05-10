let express = require('express')
const { addPresence,deletePresence } = require('../controllers/présence.controlleur')
const  auth  = require('../middleware/auth')


let router = express.Router()

router.post('/addPresence',auth,addPresence)
router.delete('/deletePresence/:id',auth,deletePresence)


module.exports=router