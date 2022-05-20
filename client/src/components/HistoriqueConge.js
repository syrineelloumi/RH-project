import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserConges } from '../redux/action';
import "../styles/ListConge.css";
import NavBar from './NavBar';


const HistoriqueConge = () => {
    const { historiqueConge, user } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserConges())
      
    }, [])


    return (

        <div className="table-wrapper">
            <div>
               <NavBar/>
                <h2 style={{ marginTop: -10 }}>Historique congés</h2>
            </div>
            <table className="fl-table">
                <thead>
                    <tr>
                        
                        <th>Date Début</th>
                        <th>Date Fin</th>
                        <th>Type</th>
                        <th>Motif</th>
                        <th>Etat</th>
                        
                    </tr>
                </thead>

                <tbody>
                    
                {
                        historiqueConge && historiqueConge.map((conge, i) => <tr key={i}>

                            
                            <td>{conge.dateDébut.split('T', 1)}</td>
                            <td>{conge.dateFin.split('T', 1)}</td>
                            <td>{conge.type}</td>
                            <td>{conge.motif}</td>
                            <td>{conge.etat} 
                            {conge.etat==="en cours"?(<i className="bi bi-hourglass-split" style={{color:"grey" ,fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="validé par responsable"?(<i className="bi bi-check" style={{color:"#1a8fff" ,fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="validé par admin"?(<i className="bi bi-check-all" style={{color:"#00cc00" , fontSize: "1rem"}}></i>):(<></>)&&
                            conge.etat==="refusé"?(<i className="bi bi-x" style={{color:"red" ,fontSize: "1rem"}}></i>):(<></>)
                            }</td>
                         </tr>
                        )}
                </tbody>


            </table>

        </div>
    )
}



export default HistoriqueConge;