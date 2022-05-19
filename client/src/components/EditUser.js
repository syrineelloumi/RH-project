
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editUser, getDepartements } from '../redux/action';
import axios from "axios";







const EditUser = () => {
  const { usersList, errors, departementsList, user } = useSelector((state) => state);
  const { id } = useParams();

  let userEdit = null
  if (user.role === "Admin") {
    userEdit = usersList.find(user => user._id === id);
  }
  else {
    userEdit = user;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartements());
  }, []);

  const dep = departementsList.map((el) => el.nomDépartment);
  const [depart, setDepart] = React.useState(dep[0]);
  console.log(userEdit);

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    const form = new FormData()
    form.append('file', file)
    form.append("upload_preset", "rhApplication");
    await axios.post("https://api.cloudinary.com/v1_1/etudiante/upload", form)
      .then((result) => setUrl(result.data.secure_url));


  }
  console.log(url);



  const [nom, setNom] = useState(userEdit.nom);
  const [prenom, setPrenom] = useState(userEdit.prenom);
  const [email, setEmail,] = useState(userEdit.email);
  const [numTel, setNumTel] = useState(userEdit.numTel);
  const [adresse, setAdresse] = useState(userEdit.adresse);
  const [département, setDépartement] = useState(userEdit.département);
  const [contrat, setContrat] = useState(userEdit.contrat);
  const [droitCongé, setDroitCongé] = useState(userEdit.droitCongé);
  const [role, setRole] = useState(userEdit.role);
  const [motDePasse, setMotDePasse] = useState(userEdit.motDePasse);
  const [salaire, setSalaire] = useState(userEdit.salaire);
  const [image, setImage] = useState(userEdit.image);




  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser({
      id: userEdit._id,
      nom: nom, prenom: prenom, email: email, numTel: numTel, adresse: adresse, département: département
      , contrat: contrat, droitCongé: droitCongé, role: role, motDePasse: motDePasse, salaire: salaire, image: url?url:image
    }))

  }
  console.log(nom);

  return (





    <div className="container">
      <div className="main-body">


        <nav className="nav-bar">
          <div className="nav-bar">
            <div className="icon">
            {user.role === "Employé" ? (
                      <Link to={"/profile"}>
                      <i className="bi bi-arrow-left" style={{ fontSize: "2rem", color: "black" }}></i>
                    </Link>
                    ) : (
            <Link to={"/userList"}>
                    <i className="bi bi-arrow-left" style={{ fontSize: "2rem", color: "black" }}></i>
                  </Link>)}
            </div>
            <p className="text-center"> Modifier Utilisateur </p>
          </div>
        </nav>


        <div className="column gutters-sm">
          <div className="col-md-13 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={image} alt="" className="rounded-circle" width="150" />
                  <input type="file" accept='image/png , image/jpg' style={{ fontSize: "12px" }} onChange={(e) => setFile(e.target.files[0])}></input>
                  <button onClick={uploadImage} style={{ fontSize: "12px" }} >enregistrer</button>
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
                        <input type="text" className="form-control" value={nom} name="nom" placeholder="Enter Nom " onChange={(e) => setNom(e.target.value)} />
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "nom").map((msg) => msg.msg)
                          : ""
                        }</span>

                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Prenom</label>
                        <input type="text" className="form-control" value={prenom} name="prenom" placeholder="Entrer prenom" onChange={(e) => setPrenom(e.target.value)} />
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "prenom").map((msg) => msg.msg)
                          : ""
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
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "numTel").map((msg) => msg.msg)
                          : ""
                        }</span>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" value={email} name="email" placeholder="Entrer Adresse Email" onChange={(e) => setEmail(e.target.value)} />
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "email").map((msg) => msg.msg)
                          : ""
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
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "adresse").map((msg) => msg.msg)
                          : ""
                        }</span>
                      </div>
                    </div>

                    {user.role === "Employé" ||user.role==="Responsable" ? (
                      <div style={{ marginLeft: "1pc" }}>
                        <label >Département</label><br />
                        <p style={{ background: "white" , width:"31pc" ,height:"2.3pc" ,  borderRadius:" 5px" }}>
                          {`${user.département}`}
                        </p>
                      </div>

                    ) : (

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label >Département</label>
                          <select type="text" className="form-control" value={depart} placeholder="Entrer Département" onChange={e => setDepart(e.target.value)} >
                            {dep.map((e, i) => (<option key={i}>{e}</option>))}

                          </select>
                        </div>
                      </div>)
                    }
                  </div>

                  <hr />

                  < div className="row ml-6">
                    {user.role === "Employé" || user.role==="Responsable" ? (
                      <div style={{ marginLeft: "1pc" }}>
                        <label >Contart</label><br />
                        <div style={{ background: "white" ,width:"31pc" ,height:"2pc" ,  borderRadius:" 5px"}}>
                          {`${user.contrat}`}
                        </div>
                      </div>

                    ) : (
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label >Contart</label>
                          <select type="text" className="form-control" value={contrat} name="contrat" placeholder="Entrer Contrat " onChange={(e) => setContrat(e.target.value)} >
                            <option value="CDD">CDD</option>
                            <option value="CDI">CDI</option>
                          </select>
                        </div>
                      </div>)}

                    {user.role === "Employé" || user.role==="Responsable" ? (
                      <div style={{ marginLeft: "2pc" }}>
                        <label >Droit Congé</label><br />
                        <div style={{ background: "white" ,width:"31pc" ,height:"2pc" ,  borderRadius:" 5px"}}>
                          {`${user.droitCongé}`}
                        </div>
                      </div>

                    ) : (
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label >Droit Congé</label>
                          <input type="text" className="form-control" value={droitCongé} name="droitCongé " placeholder="Enter Droit Congé" onChange={(e) => setDroitCongé(e.target.value)} />
                          <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                            errors.errors.filter(err => err.param === "droitCongé").map((msg) => msg.msg)
                            : ""
                          }</span>
                        </div>
                      </div>)}
                  </div>
                  <hr />

                  <div className="row ml-6">
                    {user.role === "Employé" || user.role==="Responsable" ? (
                      <div style={{ marginLeft: "1pc"}}>
                        <label >Role</label><br />
                        <div style={{ background: "white" ,width:"31pc" ,height:"2pc",  borderRadius:" 5px" }}>
                          {`${user.role}`}
                        </div>
                      </div>

                    ) : (
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label >Role</label>
                          <select type="text" className="form-control" value={role} name="role" placeholder="Entrer Role" onChange={(e) => setRole(e.target.value)} >
                            <option value="Admin">Admin</option>
                            <option value="Responsable">Resonsable</option>
                            <option value="Employé">Employé</option>
                          </select>
                        </div>
                      </div>)
                    }
                    {user.role === "Employé" || user.role==="Responsable" ? (
                      <div style={{ marginLeft: "2pc",  }}>
                        <label >Mot de passe</label><br />
                        <div style={{background:"white" , width:"31pc" ,height:"2pc",  borderRadius:" 5px" }}>
                          *****
                        </div>
                      </div>

                    ) : (
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label >Mot de passe</label>
                          <input type="password" className="form-control" value={motDePasse} name="motDePasse " placeholder="Entrer Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
                          <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                            errors.errors.filter(err => err.param === "motDePasse").map((msg) => msg.msg)
                            : ""
                          }</span>
                        </div>
                      </div>)}
                  </div>
                  <hr />

                  <div className="row">
                    {user.role === "Employé" || user.role==="Responsable" ? (
                      <div style={{ marginLeft: "17pc" }}>
                        <label >Salaire</label><br />
                        <div style={{background:"white" ,width:"31pc" ,height:"2pc" ,borderRadius:" 5px" }}>
                          {`${user.salaire}`}
                        </div>
                      </div>

                    ) : (
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label >Salaire</label>
                        <input type="number" className="form-control" value={salaire} name="salaire" placeholder="Entrer montant salaire" onChange={(e) => setSalaire(e.target.value)} />
                        <span style={{ color: "rgb(196, 22, 22)", fontSize: "14px" }}>{errors ?
                          errors.errors.filter(err => err.param === "salaire").map((msg) => msg.msg)
                          : ""
                        }</span>
                      </div>)}
                  </div>
                  <hr />

                </form>

                <div className="col-sm-12">
                  <button onClick={onSubmit} className="btn btn-outline-primary"> Modifier</button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );


}

export default EditUser;