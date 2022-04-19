
import React from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



import { deleteUser, getAllUsers } from "../redux/action";

// import { Container } from './styles';

const UserList = () => {
  const { usersList } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  },[])

  // console.log(usersList.map((user) => user.nom));
  return (
    <div>
      <nav className='navBarList'>
      <Link className='new' to={"/newUser"}>
        <i class="bia bi-plus-circle">Nouveau Utilisateur</i>
        </Link>
        <h2> Liste des employés </h2>
       
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
            usersList && usersList.filter(e => e.départment === "Informatique").map((e, i) => <tr key={i}>

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
            <th className='nomDept'>Marketing</th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>

          {
            usersList && usersList.filter(e => e.départment === "Marketing").map((e, i) => <tr key={i}>


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
            usersList && usersList.filter(e => e.départment === "RH").map((e, i) => <tr key={i}>


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

