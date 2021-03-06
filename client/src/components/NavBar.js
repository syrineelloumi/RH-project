import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllConges, getAllUsers, logOut, UpdateMp } from '../redux/action';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { margin, padding } from '@mui/system';
import { useState } from 'react';
import { EDIT_MP, EDIT_MP_FAIL, EDIT_MP_SUCCESS } from '../redux/actionTypes';
import axios from 'axios';
import { useEffect } from 'react';


// import { Container } from './styles';

function NavBar() {

  const dispatch = useDispatch();
  const {user}=useSelector((state)=>state);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.removeItem("token");

  };
  useEffect(() => {
    dispatch(getAllUsers())
    
    dispatch(getAllConges())


  }, [])
  console.log({user});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [motDePasse, setMotDePasse] = useState('');
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(UpdateMp({
  //     id:user._id,


  //   }))

  // }
  // console.log(motDePasse.length > 4);


  const UpdateMps = (id, editUser) => {
    // dispatch({ type: EDIT_MP});
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      }
    };
    try {
      const res = axios.put(`/user/UpdateMp/${id}`, editUser, config);

      // dispatch({
      //   type: EDIT_MP_SUCCESS,
      //   payload: res.data,
      // });
      alert("mise à jour avec succès")
      // console.log("m2p changed");

    } catch (error) {
      // dispatch({
      //   type: EDIT_MP_FAIL,
      //   payload: error.response.data,
      // });
      // console.log("erreur", error);
      alert(error.response.data.msg);
    }
  };



  return (



    <nav className="main-breadcrumb" >
      <ol className="breadcrumb" style={{ height: "4pc" }}>
        <li className="item mx-auto"><Link to="/Profile">
          <i className="bi bi-person-fill" style={{ fontSize: "1rem", color: "black", top: "-4%" }}>Profile</i>
          {/* <p style={{ color: "black", fontSize: "12px", textDecoration: "underline 0" , margin:"0px 0px 0px"  }}>Profile</p> */}
        </Link>
        </li>

        {/* <li className="item mx-auto"><Link to="/ddeConge">
          <i className="bi bi-calendar-heart" style={{ fontSize: "1rem", color: "black", top: "-4%" }}>Congé</i>
        </Link>
        </li> */}
        <li className="item mx-auto">
          <i className="bi bi-calendar-heart" style={{ fontSize: "1rem", color: "black", top: "-6%" }} data-toggle="dropdown">Congé</i>
          <ul className="dropdown-menu" style={{ width: "10pc", marginRight: "10pc", height: "5pc" }}>

            <li style={{marginLeft:"4px"}}>
              <Link to="/ddeConge" style={{ color: "black", textDecoration: " none" }} >Demande de congé</Link>
            </li>
            <li style={{ marginTop: "-1px" , marginLeft:"4px"}}>
              <Link style={{ color: "black", textDecoration: " none" }} to={"/HistoriqueConge"}>Historique Congé</Link>
            </li>

            {
              user.role === "Responsable"?( <li style={{ marginTop: "-1px" , marginLeft:"4px"}}>
               <Link style={{ color: "black", textDecoration: " none" }} to={"/listConge"}>List des congés</Link>
             </li>

               ):(<></>)
            }

          </ul>

        </li>
        <li className="item mx-auto"><Link to="/Cal">
          <i className="bi bi-calendar2-check" style={{ fontSize: "1rem", color: "black", top: "-6%" }}>Pointage</i>
          {/* <p style={{ color: "black", fontSize: "12px" }}>Pointage</p> */}
        </Link>
        </li>
        <li className="item mx-auto"><Link to="index.html">
          <i class="bi bi-patch-plus" style={{ fontSize: "1rem", color: "black", top: "-6%" }}>Heures</i>
          {/* <p style={{ color: "black", fontSize: "12px" }}>Fiche de paie</p> */}
        </Link>
        </li>
        <div className="dropdown">
          <i className="bi bi-gear" style={{ fontSize: "1rem", color: "black" }} data-toggle="dropdown"></i>


          <ul className="dropdown-menu" style={{ width: "12pc", marginRight: "10pc" }}>
            <li>
              <i className="bi bi-key" onClick={handleOpen}>Changer mot de passe</i>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box className='modelBox'>
                  <form >
                    <h1 style={{ textAlign: "center", marginTop: 0, paddingTop: "0px", paddingBottom: "0px", paddingLeft: "7pc" }}>Changer mot de passe</h1><br />
                    <div style={{ marginTop: 50 }} >

                      <label ><b style={{ marginLeft: 80 }}>Nouveau mot de passe</b></label>
                      <input style={{ marginLeft: 50, width: "15pc" }} type="password" placeholder="Nouveau MP" name="nouveau MP" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required /><br />

                    </div><br/>
                    <div style={{ textAlign: "center" }}>
                      <button className="btn" onClick={(e) => { e.preventDefault(); console.log("cc"); UpdateMps(user._id, { motDePasse }) }}>Enregistrer</button>
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