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
      
        <body>
          <NavBar/>
    <div className="testbox">
      <form className='form' onSubmit={onSubmit}>
        <div className="banner">
          <h1>Demande de Congé</h1>
        </div>
         
        <div className="date-item">
          <div className="item">
            <p>Date Début<span class="required">*</span></p>
            <input type="date" name="bdate" value={dateDébut} onChange={(e)=>setDateDébut(e.target.value)} required/>
            <i className="fas fa-calendar-alt" ></i>
          </div>
          <div className="item">
            <p>Date Fin<span class="required">*</span></p>
            <input type="date" name="bdate" value={dateFin} onChange={(e)=>setDateFin(e.target.value)}  required/>
            <i className="fas fa-calendar-alt"></i>
          </div>
        </div>
       
	   
	   <div className="justification-item">
        <div className="item">
          <p>Justifier votre demande :</p>
          <input type="text" name="providing"   value={motif} onChange={(e)=>setMotif(e.target.value)} />
		</div>
		<div className="item">
		<p>Importer un fichier de justification :</p>
          <input type="file" name="file" accept="file/*"/>
        </div>
	   </div>
	   
	   
        <div className="item">
            <p>Type<span className="required">*</span></p>
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
  </body>

    )
}
export default DdeConge;