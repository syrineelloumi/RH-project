const mongoose = require('mongoose')

const Schema = mongoose.Schema
const présenceSchema = new Schema({

    datePrésence:Date,
    état:String,
    lieu:{
        type:String,
        default:'Présentiel',
        roles:['Présentiel' , 'À distance' ]
    },
    userId : String,

})


module.exports=mongoose.model("Présence",présenceSchema)