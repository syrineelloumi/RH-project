const User = require("../models/user");
const config = require("config");
const bodyParser = require('body-parser')

const mongoose = require("mongoose");
const res = require("express/lib/response")
const bcrypte = require("bcryptjs")


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

exports.getUser = async (req, res) => {
    try {
        let user = await User.findOne({ nom: req.params.nom })
        res.send(user)
    }

    catch (err) {
        console.log(err)

    }
}




exports.createUser = async (req, res) => {
    let { nom,
        prenom,
        email,
        numTel,
        adresse,
        servicePost,
        contart,
        droitCongé,
        role,
        password,
        salaire } = req.body;

    let isExist = await User.findOne({ email });
    if (isExist) {
        res.status(400).json({ msg: "try an other email" });
    }

    try {
        let new_user = new User({
            nom,
            prenom,
            email,
            numTel,
            adresse,
            servicePost,
            contart,
            droitCongé,
            role,
            password,
            salaire,
        });
        let salt = await bcrypte.genSalt(10);
        let hash = await bcrypte.hashSync(password,salt);
        new_user.password=hash;
        await new_user.save();
        res.send("save effectué avec succes!")
    }
    catch (err) {
        console.log(err)

    }


}
exports.deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ nom: req.params.nom })
        res.send('user supprimer avec succes!')

    }
    catch (err) {
        console.log(err)
        // res.send(err)

    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.findOneAndUpdate({ nom: req.params.nom }, { ...req.body })
        res.send('mise a jour user avec succes!')

    }
    catch (err) {
        //console.log(err)
        res.send(err)

    }
}




