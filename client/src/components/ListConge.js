
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllConges, getAllUsers } from '../redux/action';
import "../styles/ListConge.css";
import Modall from './Modall';
import { Link } from "react-router-dom";



const ListConge = () => {
    const { listDdeConge, usersList, user } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllConges())
        dispatch(getAllUsers())
    }, [])





    console.log("map", listDdeConge.map(e => usersList.find(user => user._id == e.userId).nom));




    return (

        <div className="table-wrapper">
            {user.role==="Admin"? (<div>
                <Link to={"/userList"}>
                    <i class="bi bi-arrow-left-short" style={{ marginRight: "90pc", fontSize: "2rem", color: "black" }}></i>
                </Link>
                <h2 style={{ marginTop: -30 }}>Demandes congés</h2>
            </div>):( <div>
                <Link to={"/profile"}>
                    <i class="bi bi-arrow-left-short" style={{ marginRight: "90pc", fontSize: "2rem", color: "black" }}></i>
                </Link>
                <h2 style={{ marginTop: -30 }}>Demandes congés</h2>
            </div>)}
           
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Nom de l'employé</th>
                        <th>Date Début</th>
                        <th>Date Fin</th>
                        <th>Type</th>
                        <th>Justification</th>
                        <th>Etat</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listDdeConge && listDdeConge.map((conge, i) => <tr key={i}>

                            <td>{usersList && usersList.find(user => user._id == conge.userId).nom}</td>
                            <td>{conge.dateDébut.split('T', 1)}</td>
                            <td>{conge.dateFin.split('T', 1)}</td>
                            <td>{conge.type}</td>
                            <td>{conge.motif}</td>
                            <td>{conge.etat} 
                            {conge.etat==="en cours"?(<i class="bi bi-hourglass-split" style={{color:"grey" ,fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="validé par responsable"?(<i class="bi bi-check" style={{color:"#1a8fff" ,fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="validé par admin"?(<i class="bi bi-check-all" style={{color:"#00cc00" , fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="refusé"?(<i class="bi bi-x" style={{color:"red" ,fontSize: "1rem"}}></i>):(<></>)
                            }</td>
                            
                            <td>
                                <Modall conge={conge}  user={user} />

                            </td>
                        </tr>
                        )}
                </tbody>


            </table>

        </div>
    )
}

export default ListConge;