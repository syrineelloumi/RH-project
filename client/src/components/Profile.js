import React from 'react';
import { Link } from 'react-router-dom';




function profile() {
  return (

    <div class="container">
      <div class="main-body">


        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              <i class="bi bi-person-fill" style={{ fontSize: "3rem", color: "black" }}></i>
              <p> Profil</p>
              </li>
            <li class="breadcrumb-item"><Link to="javascript:void(0)">
              <i class="bi bi-calendar-heart" style={{ fontSize: "3rem", color: "black" }}></i>
              <p style={{  color: "black" }}>Congé</p>
              </Link>
              </li>
            <li class="breadcrumb-item "><Link to="index.html">
              <i class="bi bi-calendar2-check" style={{ fontSize: "3rem", color: "black" }}></i>
              <p style={{  color: "black" }}>Pointage</p>
              </Link>
              </li>
            <li class="breadcrumb-item"><Link to="index.html">
              <i class="bi bi-card-heading" style={{ fontSize: "3rem", color: "black" }}></i>
              <p style={{  color: "black" }}>Fiche de paie</p>
              </Link>
              </li>
          </ol>
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
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nom</h6>
                  </div>
                 <div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe"/>
								</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Prénom</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="John Doe"/>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Télephone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="John Doe"/>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="John Doe"/>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                   <input type="text" class="form-control" value="John Doe"/>
                  </div>
                </div>
                <hr />
               
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Département</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="John Doe"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Contart</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     <input type="text" class="form-control" value="John Doe"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Droit Congé</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="John Doe"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Role</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="John Doe"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mot de Passe</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="John Doe"/>
                    </div>
                  </div>
                  <hr />
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Salaire</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="John Doe"/>
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