const {check , validationResult} = require ('express-validator')

exports.createUserControls=()=>[
    check("nom","ce champ est obligatoire").notEmpty(),
    check("nom","Nom incorrecte").isString(),
    
    check("prenom","ce champ est obligatoire").notEmpty(),
    check("email","ce champ est obligatoire").notEmpty(),
    check("email","Email incorrecte").isEmail(),

    check("numTel","ce champ est obligatoire").notEmpty(),
    check("numTel","Numero incorrecte").isLength({min:8}),
    check("adresse","ce champ est obligatoire").notEmpty(),
    check("département","ce champ est obligatoire").notEmpty(),
    check("contrat","ce champ est obligatoire").notEmpty(),
    check("droitCongé","ce champ est obligatoire").notEmpty(),
    check("role","ce champ est obligatoire").notEmpty(),
    check("motDePasse","ce champ est obligatoire").notEmpty(),
    check("motDePasse","Mot de passe trés courte").isLength({min:5}),
    check("salaire","ce champ est obligatoire").notEmpty(),

]

exports.validator=(req,res,next)=>{
    let errors=validationResult(req)
    return errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}
