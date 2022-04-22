const Departement = require("../models/Departement");

exports.createDepartement = async (req, res) => {
    let { nomDépartment } = req.body;

    let isExist = await Departement.findOne({ nomDépartment});
    if (isExist) {
        res.status(400).json({ msg: "try an other dept" });
    }else{

    try {
        let new_dept = new Departement({
            nomDépartment
        });
        
        await new_dept.save();
        res.send("save effectué avec succes!")
    }
    catch (err) {
        console.log(err)

    }}
}


exports.getDepartements = async (req, res) => {
    try {

        

        let departements = await Departement.find()
        res.send(departements)
    }
    catch (err) {
        console.log(err)

    }
}

exports.deleteDepartment = async (req, res) => {
    try {
        await Departement.findByIdAndDelete(req.params.id)
        res.send('departement supprimer avec succes!')

    }
    catch (err) {
        console.log(err)
        // res.send(err)

    }
}