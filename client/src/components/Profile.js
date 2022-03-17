import React from 'react';
import { Link } from 'react-router-dom';




function profile() {
  return (

    <div class="container">
      <div class="main-body">


      <nav class="nav-bar">
      <div class="nav-bar">
        <div className="icon">
          <i class="bi bi-arrow-left" style={{ fontSize: "3rem", color: "black" }}></i>
          </div>
      
        
      <p class="text-center">Ajouter Utilisateur </p>
          
          </div>
        </nav>


        <div class="column gutters-sm">
          <div class="col-md-13 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />

                </div>
              </div>
            </div>

          </div>

          <div class="column">
            <div class="card mb-2">
              <div class="card-body">
                <div class="row ml-6">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label >Nom</label>
                      <input type="text" class="form-control" id="phone" placeholder="Enter Nom " />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Prenom</label>
                      <input type="url" class="form-control" id="website" placeholder="Entrer prenom" />
                    </div>
                  </div>
                </div>

                <hr />
                <div class="row ml-6">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Télephone</label>
                      <input type="text" class="form-control" id="phone" placeholder="Entrer Num Tel" />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Email</label>
                      <input type="url" class="form-control" id="website" placeholder="Entrer Adresse Email" />
                    </div>
                  </div>
                </div>
              
              <hr />
              < div class="row ml-6">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Adresse</label>
                    <input type="text" class="form-control" id="phone" placeholder="Entrer Adresse" />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="website">Département</label>
                    <input type="url" class="form-control" id="website" placeholder="Entrer Département" />
                  </div>
                </div>

              </div>
              <hr />
              < div class="row ml-6">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Contart</label>
                    <input type="text" class="form-control" id="phone" placeholder="Entrer Contrat " />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="website">Droit Cnogé</label>
                    <input type="url" class="form-control" id="website" placeholder="Enter Droit Congé" />
                  </div>
                </div>

              </div>
              <hr />
              <div class="row ml-6">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Role</label>
                    <input type="text" class="form-control" id="phone" placeholder="Entrer Role" />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="website">Mot de passe</label>
                    <input type="url" class="form-control" id="website" placeholder="Entrer Mot de passe" />
                  </div>
                </div>
              </div>

              <hr />

              <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  
                    <label >Salaire</label>
                    <input type="text" class="form-control" id="phone" placeholder="Entrer montant salaire" />
                  </div>
                </div>
              <hr />
              <div class="row">
                <div class="col-sm-6">
                  <Link class="btn btn-info " target="__blank" to="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Annuler</Link>
                </div>
                <div class="col-sm-6">
                  <Link class="btn btn-info " target="__blank" to="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Ajouter</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default profile;