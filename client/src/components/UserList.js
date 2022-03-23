import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/action';

// import { Container } from './styles';

const UserList = () => {
  const { usersList } = useSelector((state) => state);

  // console.log(usersList.map((user) => user.nom));
  return (
    <div>
      <nav className='navBarList'>
        <h2> Liste des employés </h2>
      </nav>
      
      <table>
        <tbody>
          <tr>
            <th className='row1'>Nom</th>
            <th className='row1'>Prenom</th>
            <th className='row3'>Email</th>
            <th className='row1'>Télephone</th>
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
            usersList.filter(e => e.départment === "Informatique").map((e, i) => <tr key={i}>

              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
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
            usersList.filter(e => e.départment === "Marketing").map((e, i) => <tr key={i}>


              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
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
            usersList.filter(e => e.départment === "RH").map((e, i) => <tr key={i}>


              <td className='row1'>{e.nom}</td>
              <td className='row1'>{e.prenom}</td>
              <td className='row3'>{e.email}</td>
              <td className='row1'>{e.numTel}</td>
            </tr>)
          }
          </tbody>
      </table>

    </div>
  );
}



export default UserList;

