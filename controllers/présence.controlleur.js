const config = require("config");
const jwt = require("jsonwebtoken");
const Présence = require("../models/Présence");
const secret = config.get("secret");
const User = require("../models/user");



// function convertFromStringToDate(responseDate) {
//   let dateComponents = responseDate.split('T');
//   let datePieces = dateComponents[0].split("-");
//   let timePieces = dateComponents[1].split(":");
//   return(new Date(datePieces[2], (datePieces[1] - 1), datePieces[0],
//                        timePieces[0], timePieces[1], timePieces[2]))
// }

exports.addPresence = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  // console.log(userID);
  let {datePrésence:aaa, état, lieu } = req.body;
  let date1=req.body.datePrésence.split("-");
  let dattt=new Date(date1[0], date1[1] - 1, date1[2] ); 
  console.log(dattt);
  
  
  try {
    let newPrésence = new Présence({

      datePrésence: dattt,
      état: état,
      lieu: lieu,
      userId: userID

    });
    newPrésence.save();
    res.send(newPrésence)
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};


exports.deletePresence=async(req,res)=>{
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  let thePresence= await Présence.findById(req.params.id)
  let isOwner=thePresence.userId;
  
  if (isOwner!==userID) {
    res.status(400).json({ msg: "you cannot delete this presence" });
  }
  try {
    await Présence.findByIdAndDelete(req.params.id)
    res.send("presence deleted")
  } catch (error) {
      console.log(error.message)
  }
}

// exports.deletePresence = async (req, res) => {
//   try {
//       await Présence.findByIdAndDelete(req.params.id)
//       res.send('présence supprimer avec succes!')

//   }
//   catch (err) {
//       console.log(err)
//       // res.send(err)

//   }
// }


exports.updatePresence = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  let thePresence= await Présence.findById(req.params.id)
  let isOwner=thePresence.userId;
  
  if (isOwner!==userID) {
    res.status(400).json({ msg: "you cannot delete this presence" });
  }
  
  try {
      await Présence.findByIdAndUpdate(req.params.id, { ...req.body })
      res.send('mise a jour Présence avec succes!')

  }
  catch (error) {
    res.status(500).json({ errors: error.message });
  

  }
}

exports.getPresences = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
 
  
  try {

    let thePresences = await Présence.find()
    let presences = thePresences.filter(e=>e.userId=userID)
    res.send(presences)
}
catch (err) {
    console.log(err)

}
}



  