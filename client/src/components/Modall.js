import { Box, Modal } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_CONGE_FAIL, EDIT_CONGE_SUCCESS } from '../redux/actionTypes';


function Modall({conge}) {
    

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [etat, setEtat] = useState(conge.etat)
    const editConge = (id, etat) => async (dispatch) => {
        let token = localStorage.getItem("token");
        let config = {
            headers: {
                Authorization: token,
            }
        };
        try {
            const res = await axios.put(`/conge/updateEtatConge/${id}`, etat, config);

            dispatch({
                type: EDIT_CONGE_SUCCESS,
                payload: res.data,
            });
            console.log(`${id} is changed`);
            // window.location.reload();


        } catch (error) {
            dispatch({
                type: EDIT_CONGE_FAIL,
                payload: error.response.data,
            });
            console.log("erreur", error);
        }
    };


  return (


<div>
<i className="bi bi-pencil-square" onClick={handleOpen}></i>

<Modal className="Modal"  open={open} onClose={handleClose} style={{background:"none"}}>
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
                                </Modal>
</div>


  );
}

export default Modall;