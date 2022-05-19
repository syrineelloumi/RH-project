import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Profilestyle.css'

import { createUser, getAllUsers } from '../redux/action';
import { Link } from "react-router-dom";
import axios from "axios";








const NewUser = () => {

  const { departementsList, errors } = useSelector((state) => state);
  

  const dep = departementsList.map((el) => el.nomDépartment);
  const [depart, setDepart] = React.useState(dep[0]);


  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [numTel, setNumTel] = useState('');
  const [adresse, setAdresse] = useState('');

  const [contrat, setContrat] = useState('CDD');
  const [droitCongé, setDroitCongé] = useState('');
  const [role, setRole] = useState('Employé');
  const [motDePasse, setMotDePasse] = useState('');
  const [salaire, setSalaire] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  // const [errors , setErrors]=useState({});

  const[file , setFile]=useState(null); 
  const[url , setUrl]=useState("");
// cloudName: etudiante
// presetName: rhApplication
// lien api: https://api.cloudinary.com/v1_1/

const uploadImage = async() =>{
  const form = new FormData()
  form.append ('file',file)
  form.append("upload_preset" , "rhApplication");
 await axios.post("https://api.cloudinary.com/v1_1/etudiante/upload",form)
 .then((result)=>setUrl(result.data.secure_url));

}

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser({
      nom: nom,
      prenom: prenom,
      email: email,
      numTel: numTel,
      adresse: adresse,
      département: depart,
      contrat: contrat,
      droitCongé: droitCongé,
      role: role,
      motDePasse: motDePasse,
      salaire: salaire,
      image:url,
    }))
    setNom('')
    setPrenom('')
    setEmail('')
    setNumTel('')
    setAdresse('')
    setDepart(dep[0])
    setContrat('CDD')
    setDroitCongé('')
    setRole('Employé')
    setMotDePasse('')
    setSalaire('')
    setImage('')


  }
  dispatch(getAllUsers)


  console.log({
    nom: nom,
    prenom: prenom,
    email: email,
    numTel: numTel,
    adresse: adresse,
    département: depart,
    contrat: contrat,
    droitCongé: droitCongé,
    role: role,
    motDePasse: motDePasse,
    salaire: salaire,
    image:image,
  });
  // console.log(errors.errors.filter(err => err.param === "nom").map((msg) => msg.msg));



  return (

    <div className="container">
      <div className="main-body">


        <nav className="nav-bar">
          <div className="nav-bar">
            <div><span className="icon">
              <Link to={"/userList"}>
                <i className="bi bi-arrow-left" style={{ fontSize: "3rem", color: "black" }}></i>
              </Link>
            </span></div>
            <p className="text-center">Ajouter Utilisateur </p>


          </div>
        </nav>


        <div className="column gutters-sm">
          <div className="col-md-13 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={url} alt="" className="rounded-circle" width="150px" height="150px" />
                  <input  type="file"  accept='image/png , image/jpg' style={{fontSize:"12px" , width:"15pc"}} onChange={(e)=>setFile(e.target.files[0])}></input>
                  <button onClick={uploadImage} style={{fontSize:"12px"}} >enregistrer</button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card mb-2">
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">

                      <div className="form-group">

                        <label >Nom</label>
                        <input type="text" className="form-control"  value={nom} name="nom" placeholder="Entrer Nom " onChange={(e) => setNom(e.target.value)}  />
                       
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "nom").map((msg)=>msg.msg)
                        :""
                        }</span> 
                       

                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Prénom</label>
                        <input type="text" className="form-control" value={prenom} name="prenom" placeholder="Entrer Prénom" onChange={(e) => setPrenom(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "prenom").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Télephone</label>
                        <input type="number" className="form-control" value={numTel} name="numTel" placeholder="Entrer Num Tel" onChange={(e) => setNumTel(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "numTel").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" value={email} name="email" placeholder="Entrer Adresse Email" onChange={(e) => setEmail(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "email").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>
                  </div>
                  <hr />

                  < div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Adresse</label>
                        <input type="text" className="form-control" value={adresse} name="adresse" placeholder="Entrer Adresse" onChange={(e) => setAdresse(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "adresse").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Département</label>
                        <select type="text" className="form-control" value={depart} placeholder="Entrer Département" onChange={e => setDepart(e.target.value)} >
                          {dep.map((e, i) => (<option key={i}>{e}</option>))}

                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />

                  < div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Contrat</label>
                        <select type="text" className="form-control" value={contrat} name="contrat" placeholder="Entrer Contrat " onChange={(e) => setContrat(e.target.value)}  >
                          <option value="CDD">CDD</option>
                          <option value="CDI">CDI</option>
                          <option value="KARAMA">KARAMA</option>
                          <option value="CVP">CVP</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Droit Congé</label>
                        <input type="text" className="form-control" value={droitCongé} name="droitCongé " placeholder="Enter Droit Congé" onChange={(e) => setDroitCongé(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "droitCongé").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Role</label>
                        <select type="text" className="form-control" value={role} name="role" placeholder="Entrer Role" onChange={(e) => setRole(e.target.value)}>
                          <option value="Admin">Admin</option>
                          <option value="Responsable">Resonsable</option>
                          <option value="Employé">Employé</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Mot de passe</label>
                        <input type="password" className="form-control" value={motDePasse} name="motDePasse " placeholder="Entrer Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
                        <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "motDePasse").map((msg)=>msg.msg)
                        :""
                        }</span> 
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label >Salaire</label>
                      <input type="number" className="form-control" value={salaire} name="salaire" placeholder="Entrer montant salaire" onChange={(e) => setSalaire(e.target.value)} />
                      <span style={{color:"rgb(196, 22, 22)" , fontSize: "14px"}}>{errors ?
                          errors.errors.filter(err => err.param === "salaire").map((msg)=>msg.msg)
                        :""
                        }</span> 
                    </div>
                  </div>
                  <hr />
                  <div className="col-sm-12">
                    <button type='submit' className="btn btn-outline-primary"> ajouter</button>
                  </div>

                </form>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );


}

export default NewUser;
// errors={errors ? errors.errors.filter(err => err.param === "nom") : ""}
// className={Classnames("form-control", { "is-invalide": errors })} 
// id={errors?(!errors.errors.filter(err => err.param === "nom")?("ffff"):("invalide")):("")}