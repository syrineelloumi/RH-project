const mongoose = require('mongoose')

const Schema = mongoose.Schema
const departementSchema = new Schema({

    nomDépartment:String
})
module.exports=mongoose.model("Departement",departementSchema)