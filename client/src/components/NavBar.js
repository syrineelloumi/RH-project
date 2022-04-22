import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function NavBar() {
  return (
  


  <nav  className="main-breadcrumb" >
                    <ol className="breadcrumb">
                    <li className="item mx-auto"><Link to="">
          <i className="bi bi-person-fill" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black" ,fontSize: "12px"}}>Profile</p>
          </Link>
        </li>
        <li className="item mx-auto"><Link to="">
          <i className="bi bi-calendar-heart" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black" ,fontSize: "12px" }}>Congé</p>
        </Link>
        </li>
        <li className="item mx-auto"><Link to="index.html">
          <i className="bi bi-calendar2-check" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black" ,fontSize: "12px"}}>Pointage</p>
        </Link>
        </li>
        <li className="item mx-auto"><Link to="index.html">
          <i className="bi bi-card-heading" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black" ,fontSize: "12px"}}>Fiche de paie</p>
        </Link>
        </li>
                    </ol>
                </nav>


  );
}

export default NavBar;