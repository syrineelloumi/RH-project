const mongoose = require('mongoose')

const Schema = mongoose.Schema
const congéSchema = new Schema({

    dateDébut:Date,
    dateFin:Date,
    type:String,
    motif:String,
    userId : String,
    etat:{
        type:String,
        default:'en cours',
        lieu:['en cours' , 'validé par responsable' , 'validé par admin' , 'refusé' ]
    }

})
module.exports=mongoose.model("Congé",congéSchema)