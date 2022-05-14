const mongoose = require('mongoose')

const Schema = mongoose.Schema
const congéSchema = new Schema({

    dateDébut:Date,
    dateFin:Date,
    type:String,
    motif:String,
    userId : String,

})
module.exports=mongoose.model("Congé",congéSchema)