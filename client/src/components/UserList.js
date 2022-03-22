import React from 'react';

// import { Container } from './styles';

const UserList = (user) => { 
    return ( 
    <div>
        <nav className='navBarList'>
            <h2> Liste des employés </h2>
        </nav>
      <table>
          <tbody>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Télephone</th>
          
        </tr>
        <tr>  
          <td>{user.nom}</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
         
        </tr>
        <tr> 
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>94</td>
         
        </tr>
        <tr> 
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
          <td>67</td>
          
        </tr>
        </tbody>
      </table>
    </div>

    );
  }
  
 

export default UserList;

