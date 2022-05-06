const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    
    nom :   String ,
    prenom : String,
    email :String ,
    numTel: Number,
    adresse : String,
    département: String,
    contrat :{ type:String,
        default:'CDD',
        roles:['CDD' , 'CDI']},
    droitCongé : String,
    role:{
        type:String,
        default:'Employé',
        roles:['Employé' , 'Admin' , 'Responsable']
    },
    motDePasse : String,
    salaire : Number,

})
module.exports=mongoose.model("User",userSchema)