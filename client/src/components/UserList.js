
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



import { deleteUser, getAllUsers, getDepartements, logOut ,addDepart } from "../redux/action";




const UserList = () => {
  const { usersList } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getDepartements())

  }, [])
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.removeItem("token");

  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //console.log(usersList.map((user) => user.nom));

  const [nomDépartment, setNomDépartement] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addDepart({
      
      nomDépartment: nomDépartment
    }))    
   
    setNomDépartement('')
   


  }


 
  return (
    <div>
      <nav className='navBarList'>
        <div className="dropdown">
          <i className="bi bi-gear" style={{ fontSize: "1rem", color: "white", paddingLeft: "1280px", marginLeft: "200px" }} data-toggle="dropdown"></i>


          <ul className="dropdown-menu" style={{ width: "15pc", marginLeft: "1050px" }}>
            <li>

              <i className="bi bi-plus-circle" onClick={handleOpen}>Nouveau Département</i><br />
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box className='modelBox2'>
                  <form >
                    <h1 style={{ textAlign: "center" }}>Ajouter département</h1>
                    <div style={{ marginTop: 50 }} >
                      <label style={{ marginLeft: 40 }}><b>Nom département</b></label>
                      <input style={{ marginLeft: 50 }} type="text"  placeholder="Nom département" name="nomDépartment" onChange={(e) => setNomDépartement(e.target.value)} required /><br />
                    </div>


                    <div style={{ textAlign: "center" }}>
                      <button style={{ marginTop: 40 }} type="submit" className="btn" onClick={onSubmit}>Enregistrer</button>
                      <button style={{ marginTop: 40, marginLeft: 25 }} type="button" className="btn cancel" onClick={handleClose}>Annuler</button>
                    </div>
                  </form>
                </Box>
              </Modal>


              <i className="bi bi-box-arrow-left" onClick={handelSubmit}>Déconnexion</i>
            </li>
          </ul>
        </div>
        <Link className='new' to={"/newUser"}>
          <i className="bia bi-plus-circle">Nouveau Utilisateur</i><br />
        </Link>
        {/* <i className="bia bi-search"></i> */}

        <h2 > Liste des employés </h2>


      </nav>

      <table>
        <tbody>
          <tr className='tabhead'>
            <th className='row1 '>Nom</th>
            <th className='row1'>Prenom</th>
            <th className='row3'>Email</th>
            <th className='row1'>Télephone</th>
            <th className='row2'>Actions</th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th className='nomDept'>Informatique</th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>

          {
            usersList && usersList.filter(e => e.département === "Informatique").map((e, i) => <tr key={i}>

              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
              <td className='row2'>

                <span className='span'>
                  <Link to={`/editUser/${e._id}`}>
                    <i className="bim bi-pencil-square" >Modifier</i>
                  </Link>
                </span>

                <span className='span' onClick={() => {
                  
                  dispatch(deleteUser(e._id) );
                  dispatch(getAllUsers());
                }}><i className="bis bi-trash" >Supprimer</i
                ></span>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th className='nomDept'>Marketing</th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>

          {
            usersList && usersList.filter(e => e.département === "Marketing").map((e, i) => <tr key={i}>


              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
              <td className='row2'>
                <span>
                  <Link to={`/editUser/${e._id}`}>
                    <i className="bim bi-pencil-square" >Modifier</i>
                  </Link>
                </span>

                <span onClick={() => {
                  dispatch(deleteUser(e._id));
                  dispatch(getAllUsers());
                }}><i className="bis bi-trash" >Supprimer</i
                ></span>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th className='nomDept'>RH</th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>

          {
            usersList && usersList.filter(e => e.département === "RH").map((e, i) => <tr key={i}>


              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
              <td className='row2'>
                <span>
                  <Link to={`/editUser/${e._id}`}>
                    <i className="bim bi-pencil-square" >Modifier</i>
                  </Link>
                </span>

                <span onClick={() => {
                  dispatch(deleteUser(e._id));
                  dispatch(getAllUsers());
                }}><i className="bis bi-trash" >Supprimer</i
                ></span>
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </div>
  );
}



export default UserList;

