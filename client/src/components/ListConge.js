import { Link } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editConge, getAllConges, getAllUsers } from '../redux/action';
import { EDIT_CONGE_FAIL, EDIT_CONGE_SUCCESS } from '../redux/actionTypes';
import "../styles/ListConge.css";
import  Modal  from 'react-modal';
import Box from '@mui/material/Box';
import Modall from './Modall';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    //   backgroundColor:"rgba(0,0,0,0.1)"
    },
  };


const ListConge = () => {
    const { listDdeConge, usersList } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllConges())
        dispatch(getAllUsers())
    }, [])

    const [etat, setEtat] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // const onEdit = ( event,id, etat) => {
    //     event.preventDefault();
    //     dispatch(editConge({
    //         etat,
    //         id,
    //     }))

    // }


  

    console.log("map", listDdeConge.map(e => usersList.find(user => user._id == e.userId).nom));



    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }




    return (

        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Nom de l'employé</th>
                        <th>Date Début</th>
                        <th>Date Fin</th>
                        <th>Type</th>
                        <th>Motif</th>
                        <th>Etat</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listDdeConge && listDdeConge.map((conge, i) => <tr key={i}>

                            <td>{usersList && usersList.find(user => user._id == conge.userId).nom}</td>
                            <td>{conge.dateDébut.split('T',1)}</td>
                            <td>{conge.dateFin.split('T',1)}</td>
                            <td>{conge.type}</td>
                            <td>{conge.motif}</td>
                            <td>{conge.etat}
                               

                                {/* <button >Open Modal</button> */}

                            </td>

                            <td>
                                <Modall conge={conge} />
                            {/* <i className="bi bi-pencil-square" onClick={openModal}></i> */}

      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
                                {/* <Modal className="Modal"  open={open} onClose={handleClose} style={{background:"none"}}>
                                    <Box className='modelBox2'>
                                        <form >
                                            <h1 style={{ marginTop: 0, textAlign: 'center', paddingTop: "0px", paddingBottom: "0px", paddingLeft: "30px" }}>Modifier état congé</h1><br />
                                            <div style={{ marginTop: 50 }} >
                                                <label style={{ marginLeft: 15 }}><b>État congé</b></label>
                                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" value={etat} onChange={(e) => setEtat(e.target.value)} style={{ marginLeft: 20, width: "25pc" }}>
                                                    <option value="en cours" selected={conge.etat === "en cours" ? true : false} >en cours</option>
                                                    <option value="validé par responsable" selected={conge.etat === "validé par responsable" ? true : false}>validé par responsable</option>
                                                    <option value="validé par admin" selected={conge.etat === "validé par admin" ? true : false}>validé par admin</option>
                                                    <option value="refusé" selected={conge.etat === "refusé" ? true : false}>refusé</option>
                                                </select>
                                            </div>


                                            <div style={{ textAlign: "center" }}>
                                                <button style={{ marginTop: 40 }} className="btn" onClick={editConge(conge._id,{etat})}>Enregistrer</button>
                                                <button style={{ marginTop: 40, marginLeft: 25 }} type="button" className="btn cancel" onClick={handleClose}>Annuler</button>
                                            </div>
                                        </form>
                                    </Box>
                                </Modal> */}
                            </td>
                        </tr>
                        )}
                </tbody>


            </table>

        </div>
    )
}


// {/* <div>
//                                     <select class="form-select form-select-sm" aria-label=".form-select-sm example" value={etat} onChange={(e) => setEtat(e.target.value)} >
//                                         <option value="en cours" selected={conge.etat === "en cours" ? true : false} >en cours</option>
//                                         <option value="validé par responsable" selected={conge.etat === "validé par responsable" ? true : false}>validé par responsable</option>
//                                         <option value="validé par admin" selected={conge.etat === "validé par admin" ? true : false}>validé par admin</option>
//                                         <option value="refusé" selected={conge.etat === "refusé" ? true : false}>refusé</option>
//                                     </select>
//                                     {/* <input type="radio" className="btn-check" id="btn-check-2-outlined" autoComplete="off" checked={conge.etat === "en cours" ? true : false} />
//                                     <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined"><i className="bi bi-hourglass-split"></i></label>

//                                     <input type="radio" className="btn-check" id="btn-check-outlined" autoComplete="off" value={"validé par responsable"} checked={conge.etat === "validé par responsable" ? true : false} onChange={(e) => setEtat(e.target.value)} />
//                                     <label className="btn btn-outline-primary" htmlFor="btn-check-outlined"><i className="bi bi-check"></i></label>

//                                     <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" />
//                                     <label className="btn btn-outline-success" fhtmlFor="success-outlined"><i className="bi bi-check-all"></i></label>

//                                     <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
//                                     <label className="btn btn-outline-danger" htmlFor="danger-outlined"><i className="bi bi-x"></i></label> */}
//                                 </div> */}

export default ListConge;