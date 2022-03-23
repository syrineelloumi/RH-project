import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../redux/action';





const NewUser = () => {
  // const [form, setForm] = useState({});
  // const onChangeHandler = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail,] = useState('');
  const [numTel, setNumTel] = useState('');
  const [adresse, setAdresse] = useState('');
  const [départment, setDépartment] = useState('Marketing');
  const [contart, setContart] = useState('CDD');
  const [droitCongé, setDroitCongé] = useState('');
  const [role, setRole] = useState('Employé');
  const [motDePasse, setMotDePasse] = useState('');
  const [salaire, setSalaire] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser({
      nom: nom,
      prenom: prenom,
      email: email,
      numTel: numTel,
      adresse: adresse,
      départment: départment,
      contart: contart,
      droitCongé: droitCongé,
      role: role,
      motDePasse: motDePasse,
      salaire: salaire,
    }))
    setNom('')
    setPrenom('')
    setEmail('')
    setNumTel('')
    setAdresse('')
    setDépartment('')
    setContart('')
    setDroitCongé('')
    setRole('')
    setMotDePasse('')
    setSalaire('')
  }
const handelDelete=()=>{
  setNom('')
  setPrenom('')
  setEmail('')
  setNumTel('')
  setAdresse('')
  setDépartment('')
  setContart('')
  setDroitCongé('')
  setRole('')
  setMotDePasse('')
  setSalaire('')
}

console.log({
  nom: nom,
  prenom: prenom,
  email: email,
  numTel: numTel,
  adresse: adresse,
  départment: départment,
  contart: contart,
  droitCongé: droitCongé,
  role: role,
  motDePasse: motDePasse,
  salaire: salaire,
});
  return (

    <div className="container">
      <div className="main-body">


        <nav className="nav-bar">
          <div className="nav-bar">
            <div className="icon">
              <i className="bi bi-arrow-left" style={{ fontSize: "3rem", color: "black" }}></i>
            </div>
            <p className="text-center">Ajouter Utilisateur </p>
          </div>
        </nav>


        <div className="column gutters-sm">
          <div className="col-md-13 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
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
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Prenom</label>
                        <input type="text" className="form-control" value={prenom} name="prenom" placeholder="Entrer prenom" onChange={(e) => setPrenom(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Télephone</label>
                        <input type="number" className="form-control" value={numTel} name="numTel" placeholder="Entrer Num Tel" onChange={(e) => setNumTel(e.target.value)} />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" value={email} name="email" placeholder="Entrer Adresse Email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <hr />

                  < div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Adresse</label>
                        <input type="text" className="form-control" value={adresse} name="adresse" placeholder="Entrer Adresse" onChange={(e) => setAdresse(e.target.value)} />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Département</label>
                        <select type="text" className="form-control" value={départment} name="département" placeholder="Entrer Département" onChange={(e) => setDépartment(e.target.value)}>
                          <option value="Marketing">Marketing</option>
                          <option value="Informatique">Informatique</option>
                          <option value="RH">RH</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />

                  < div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Contart</label>
                        <select type="text" className="form-control" value={contart} name="contrat" placeholder="Entrer Contrat " onChange={(e) => setContart(e.target.value)} >
                          <option value="CDD">CDD</option>
                          <option value="CDI">CDI</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Droit Congé</label>
                        <input type="text" className="form-control" value={droitCongé} name="droitCongé " placeholder="Enter Droit Congé" onChange={(e) => setDroitCongé(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row ml-6">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Role</label>
                        <select type="text" className="form-control" value={role} name="role" placeholder="Entrer Role" onChange={(e) => setRole(e.target.value)} >
                          <option value="Admin">Admin</option>
                          <option value="Responsable">Resonsable</option>
                          <option value="Employé">Employé</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label >Mot de passe</label>
                        <input type="text" className="form-control" value={motDePasse} name="motDePasse " placeholder="Entrer Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <label >Salaire</label>
                      <input type="number" className="form-control" value={salaire} name="salaire" placeholder="Entrer montant salaire" onChange={(e) => setSalaire(e.target.value)} />
                    </div>
                  </div>
                  <hr />

                </form>
                  <div className="row">
                    <div className="col-sm-6">
                      <button onClick={onSubmit} className="btn btn-outline-primary"> ajouter</button>
                    </div>
                    <div className="col-sm-6">
                      <button onClick={handelDelete} className="btn btn-outline-primary"> annuler</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
  
  
}

export default NewUser;