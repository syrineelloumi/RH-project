const {check , validationResult} = require ('express-validator')

exports.createUserControls=()=>[
    check("nom","Ce champ est obligatoire").notEmpty(),
    
    
    check("prenom","Ce champ est obligatoire").notEmpty(),
    check("email","Ce champ est obligatoire").notEmpty(),
    //check("email","Email incorrecte").isEmail(),

    check("numTel","Ce champ est obligatoire").notEmpty(),
    check("numTel","Numero incorrecte").isLength({min:8}),
    check("adresse","Ce champ est obligatoire").notEmpty(),
    check("département","Ce champ est obligatoire").notEmpty(),
    check("contrat","Ce champ est obligatoire").notEmpty(),
    check("droitCongé","Ce champ est obligatoire").notEmpty(),
    check("role","Ce champ est obligatoire").notEmpty(),
    check("motDePasse","Ce champ est obligatoire").notEmpty(),
    check("motDePasse","Mot de passe trés courte").isLength({min:5}),
    check("salaire","Ce champ est obligatoire").notEmpty(),

]

exports.loginControls=()=>[
    check("email","Ce champ est obligatoire").notEmpty(),
    check("motDePasse","Ce champ est obligatoire").notEmpty(),
]

exports.validator=(req,res,next)=>{
    let errors=validationResult(req)
    return errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}
