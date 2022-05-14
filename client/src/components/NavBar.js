import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/action';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';


// import { Container } from './styles';

function NavBar() {
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.removeItem("token");

  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (



    <nav className="main-breadcrumb" >
      <ol className="breadcrumb">
        <li className="item mx-auto"><Link to="/Profile">
          <i className="bi bi-person-fill" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black", fontSize: "12px" }}>Profile</p>
        </Link>
        </li>
        <li className="item mx-auto"><Link to="">
          <i className="bi bi-calendar-heart" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black", fontSize: "12px" }}>Congé</p>
        </Link>
        </li>
        <li className="item mx-auto"><Link to="/Calendar">
          <i className="bi bi-calendar2-check" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black", fontSize: "12px" }}>Pointage</p>
        </Link>
        </li>
        <li className="item mx-auto"><Link to="index.html">
          <i className="bi bi-card-heading" style={{ fontSize: "1rem", color: "black" }}></i>
          <p style={{ color: "black", fontSize: "12px" }}>Fiche de paie</p>
        </Link>
        </li>
        <div className="dropdown">
          <i className="bi bi-gear" style={{ fontSize: "1rem", color: "black" }} data-toggle="dropdown"></i>


          <ul className="dropdown-menu" style={{ width: "12pc" , marginRight:"10pc"}}>
            <li>
              <i className="bi bi-key" onClick={handleOpen}>Changer mot de passe</i>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box className='modelBox'>
                  <form >
                    <h1 style={{ textAlign: "center" }}>changer mot de passe</h1>

                    <label ><b>Mot de passe actuel</b></label>
                    <input style={{ marginLeft: 170 }} type="password" placeholder="Mot de passe actuel" name="MP actuel" required /><br />

                    <label ><b>Nouveau mot de passe</b></label>
                    <input style={{ marginLeft: 150 }} type="password" placeholder="Nouveau MP" name="nouveau MP" required /><br />

                    <label ><b>Confirmation du nouveau mot de passe</b></label>
                    <input style={{ marginLeft: 25 }} type="password" placeholder="Confirmation MP" name="confirmation MP" required /><br />

                    <div style={{textAlign:"center"}}>
                      <button type="submit" className="btn">Enregistrer</button>
                      <button style={{ marginLeft: 25 }} type="button" className="btn cancel" onClick={handleClose}>Annuler</button>
                    </div>
                  </form>
                </Box>
              </Modal>

            </li>
            <li><i className="bi bi-box-arrow-left" onClick={handelSubmit}>Déconnexion</i></li>

          </ul>
        </div>
      </ol>
    </nav>


  );
}

export default NavBar;