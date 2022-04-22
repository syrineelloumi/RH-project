let express = require('express')
const { createDepartement, getDepartements, deleteDepartment } = require('../controllers/departement.controller')

let router = express.Router()
router.get('/getDepartements',auth,getDepartements)
router.post('/createDepartement',createDepartement)
router.delete('/deleteDepartement/:id',deleteDepartment)

module.exports=router