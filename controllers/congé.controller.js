const config = require("config");
const jwt = require("jsonwebtoken");
const Congé = require("../models/Congé");
const secret = config.get("secret");
const User = require("../models/user");


exports.addConge = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;

  let {dateDébut, dateFin, type ,motif } = req.body;
  if(dateDébut>dateFin){
    res.status(400).json({ msg: "Date fin doit être supperieur à date début" });
  }
  
  
  try {
    let newCongé = new Congé({

        dateDébut:dateDébut,
        dateFin: dateFin,
        type:type,
        motif:motif,
        userId: userID
        

    });
    newCongé.save();
    res.send(newCongé)
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};


exports.deleteConge=async(req,res)=>{
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  let theCongé= await Congé.findById(req.params.id)
  let isOwner=theCongé.userId;
  
  if (isOwner!==userID) {
    res.status(400).json({ msg: "Vous ne pouvez pas supprimer ce congé !" });
  }
  try {
    await Congé.findByIdAndDelete(req.params.id)
    res.send("congé supprimer avec succès")
  } catch (error) {
      console.log(error.message)
  }
}


exports.updateConge = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  let theCongé= await Congé.findById(req.params.id)
  let isOwner=theCongé.userId;
  
  if (isOwner!==userID) {
    res.status(400).json({ msg: "Vous ne pouvez pas modifier ce congé !" });
  }
  
  try {
      await Congé.findByIdAndUpdate(req.params.id, { ...req.body })
      res.send('mise a jour Présence avec succes!')

  }
  catch (error) {
    res.status(500).json({ errors: error.message });
  

  }
}


exports.getUserConges = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
 
  
  try {

    let theCongé = await Congé.find().sort({_id:-1})
    let congés = theCongé.filter(e=>e.userId=userID)
    res.send(congés)
}
catch (err) {
    console.log(err)

}
}


exports.getAllConges = async (req, res) => {
  try {
      let conges = await Congé.find().sort({_id:-1})
      res.send(conges)
  }
  catch (err) {
      console.log(err)

  }
}




exports.updateEtatConge = async (req, res) => {
  try {
      await Congé.findByIdAndUpdate(req.params.id, { ...req.body })
      res.send('mise a jour user avec succes!')

  }
  catch (err) {
      
      res.send(err)

  }
}
