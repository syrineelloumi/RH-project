
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUser } from '../redux/action';







const EditUser = () => {
  const { usersList } = useSelector((state) => state);
  const {id} = useParams();
  let userEdit = usersList.find(user=> user._id === id);
 
    const dispatch = useDispatch()
    const [nom, setNom] = useState(userEdit.nom);
    const [prenom, setPrenom] = useState(userEdit.prenom);
    const [email, setEmail,] = useState(userEdit.email);
    const [numTel, setNumTel] = useState(userEdit.numTel);
    const [adresse, setAdresse] = useState(userEdit.adresse);
    const [départment, setDépartment] = useState(userEdit.département);
    const [contart, setContart] = useState(userEdit.contart);
    const [droitCongé, setDroitCongé] = useState(userEdit.droitCongé);
    const [role, setRole] = useState(userEdit.role);
    const [motDePasse, setMotDePasse] = useState(userEdit.motDePasse);
    const [salaire, setSalaire] = useState(userEdit.salaire);
    console.log(userEdit.nom);

    const onSubmit = (event) => {
      event.preventDefault();
      dispatch(editUser({id:userEdit._id,nom,prenom,email,numTel,adresse,départment,contart,droitCongé,role,motDePasse,salaire}))
      
    }

   
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
                        <input type="password" className="form-control" value={motDePasse} name="motDePasse " placeholder="Entrer Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
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