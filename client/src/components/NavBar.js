import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function NavBar() {
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
          <p style={{ color: "black" }}>Congé</p>
        </Link>
        </li>
        <li class="breadcrumb-item "><Link to="index.html">
          <i class="bi bi-calendar2-check" style={{ fontSize: "3rem", color: "black" }}></i>
          <p style={{ color: "black" }}>Pointage</p>
        </Link>
        </li>
        <li class="breadcrumb-item"><Link to="index.html">
          <i class="bi bi-card-heading" style={{ fontSize: "3rem", color: "black" }}></i>
          <p style={{ color: "black" }}>Fiche de paie</p>
        </Link>
        </li>
      </ol>
    </nav>;
    </div>
    </div>
  );
}

export default NavBar;