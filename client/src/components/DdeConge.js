import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addConge } from '../redux/action';
import "../styles/DdeConge.css";
import NavBar from './NavBar';



const DdeConge = () => {


    const dispatch = useDispatch();
    const [dateDébut, setDateDébut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [motif, setMotif] = useState('');
    const [type, settype] = useState('');
    const onSubmit = (event) => {
      event.preventDefault();
      dispatch(addConge({
  
        
      dateDébut:dateDébut,
      dateFin:dateFin,
      type:type,
      motif:motif,
  
  
      }))
      setDateDébut('')
      setDateFin('')
      setMotif('')
      settype('')
  
    }
    console.log(dateDébut);
    console.log(dateFin);

    

   


    return (
      
        <div className='body'>
         
            <div className="main-body">

             <NavBar/>
             </div>
    <div className="testbox" style={{paddingTop:"5px"}}>
      <form className='form' onSubmit={onSubmit} style={{boxShadow:" 0 0 25px 0 #e2e8f0"}}  >
        <div className="banner">
          <h1 style={{color:"black"}}>Demande de Congé</h1>
        </div>
         
        <div className="date-item">
          <div className="item">
            <p style={{ textAlign:"left" }}>Date Début<span className="required">*</span></p>
            <input type="date" name="bdate" value={dateDébut} onChange={(e)=>setDateDébut(e.target.value)} required/>
            <i className="fas fa-calendar-alt" style={{marginTop:"8px"}}></i>
          </div>
          <div className="item">
            <p style={{ textAlign:"left" }}>Date Fin<span className="required">*</span></p>
            <input type="date" name="bdate" value={dateFin} onChange={(e)=>setDateFin(e.target.value)}  required/>
            <i className="fas fa-calendar-alt" style={{marginTop:"8px"}}></i>
          </div>
        </div>
       
	   
	   <div className="justification-item">
        <div className="item">
          <p style={{ textAlign:"left" }}>Justifier votre demande :</p>
          <input type="text" name="providing"   value={motif} onChange={(e)=>setMotif(e.target.value)} />
		</div>
		<div className="item">
		<p style={{ textAlign:"left" }}>Importer un fichier de justification :</p>
          <input type="file" name="file" accept="file/*"/>
        </div>
	   </div>
	   
	   
        <div className="item">
            <p style={{ textAlign:"left" }}>Type<span className="required">*</span></p>
            <select  value={type} onChange={(e)=>settype(e.target.value)} required >
            <option value="Congés payés"  selected>Sélectionner type</option>
              <option value="Congés payés">Congés payés</option>
              <option value="Congés maladie">Congés maladie</option>
              <option value="Congés non payés">Congés non payés</option>
              
            </select>
          </div>
        <div className="btn-block">
          <button type="submit" >Envoyer</button>
        
          <button >Annuler</button>
        </div>
      </form>
    </div>
  </div>

    )
}
export default DdeConge;