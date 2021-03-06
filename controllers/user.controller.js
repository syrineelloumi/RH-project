const User = require("../models/user");
const config = require("config");
const bcrypte = require("bcryptjs")
const jwt = require("jsonwebtoken");
const secret = config.get("secret");


exports.getUsers = async (req, res) => {
    try {

        /*await User.find({}).then(result=>{
            res.send(result)*/

        let users = await User.find()
        res.send(users)
    }
    catch (err) {
        console.log(err)

    }
}
//get user by nom
exports.getUserByNom = async (req, res) => {
    try {
        let user = await User.findOne({ nom: req.params.nom })
        res.send(user)
    }

    catch (err) {
        console.log(err)

    }
}

// get a user
exports.getUser = async (req, res) => {
    res.send(req.user)
}




exports.createUser = async (req, res) => {
    let { nom,
        prenom,
        email,
        numTel,
        adresse,
        département,
        contrat,
        droitCongé,
        role,
        motDePasse,
        salaire,
        image } = req.body;

    let isExist = await User.findOne({ email });
    if (isExist) {
        res.status(400).json({ msg: "try an other email" });
    } else {

        try {
            let new_user = new User({
                nom,
                prenom,
                email,
                numTel,
                adresse,
                département,
                contrat,
                droitCongé,
                role,
                motDePasse,
                salaire,
                image,
            });
            let salt = await bcrypte.genSalt(10);
            let hash = await bcrypte.hashSync(motDePasse, salt);
            new_user.motDePasse = hash;
            await new_user.save();
            res.send("save effectué avec succes!")
        }
        catch (err) {
            console.log(err)

        }
    }


}
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send('user supprimer avec succes!')

    }
    catch (err) {
        console.log(err)
        // res.send(err)

    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { ...req.body })
        res.send('mise a jour user avec succes!')

    }
    catch (err) {
        //console.log(err)
        res.send(err)

    }

}
//Login 
exports.login = async (req, res) => {
    let { email, motDePasse } = req.body
    try {
        let thisUser = await User.findOne({ email })
        if (!thisUser) {
            res.status(400).json({ msg: "email incorrect" })
        }
        let isMatch = await bcrypte.compare(motDePasse, thisUser.motDePasse)
        if (!isMatch) {
            res.status(400).json({ msg: "Mot de passe incorrect" })


        }
        let payload = {
            id: thisUser._id,
            nom: thisUser.nom,
            role: thisUser.role


        }
        let token = jwt.sign(payload, secret, { expiresIn: '2h' });
        res.send({
            // token : "Bearer"+token,
            token: token,
            thisUser
        })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}


exports.UpdateMp = async (req, res) => {
    
        let token = req.headers.authorization;
        let decoded = jwt.verify(token, secret);
        let user = await User.findById(decoded.id);
        console.log(req.params.id)
        console.log(decoded.id)
        let {motDePasse } = req.body
        // if({motDePasse}.lenght>4){
            if (req.params.id !== decoded.id) {
            res.status(400).json({ msg: "you cannot edit this user" });
        }
        try {
            let editedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body })
            let salt = await bcrypte.genSalt(10);
            let hash = await bcrypte.hashSync(motDePasse, salt);
            editedUser.motDePasse = hash;
            await editedUser.save();
            let payload = {
                id: editedUser._id,
                role: editedUser.role
            }
            let token = jwt.sign(payload, secret);
            res.send({ editedUser, token })
        } catch (error) {
            console.log(error.message)
        }
        // }else{
        //     res.status(400).json({ msg: "password is too short" });
        // }
        

    }







