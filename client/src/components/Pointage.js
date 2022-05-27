import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../styles/Pointage.css";
import { useState } from "react";
import { addPoint } from "../redux/action";
import { useDispatch } from "react-redux";


// class AddEventModal extends Component {
const AddEventModal = ({ toggleModal, selectedDate }) => {
  // new Date(unixTime*1000);
  console.log(new Date(selectedDate.setHours(7)));
  // console.log(selectedDate.setHours(7));
  // const constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: this.props.showModal || false,
  //     toggleModal: this.props.toggleModal,
  //     eventToEdit: this.props.eventToEdit,
  //     handleFormSubmit: this.props.handleFormSubmit
  //   };
  // }
  // submitForm = e => {
  //   e.preventDefault();
  //   const { date, id, title, description, time } = this.state.eventToEdit;
  //   this.state.handleFormSubmit({
  //     id,
  //     title,
  //     description,
  //     date,
  //     time
  //   });
  // };

  // setTitle = t => {
  //   this.setState(prevState => ({
  //     eventToEdit: {
  //       ...prevState.eventToEdit,
  //       title: t
  //     }
  //   }));
  // };

  // setDescription = d => {
  //   this.setState(prevState => ({
  //     eventToEdit: {
  //       ...prevState.eventToEdit,
  //       description: d
  //     }
  //   }));
  // };

  // setTime = t => {
  //   this.setState(prevState => ({
  //     eventToEdit: {
  //       ...prevState.eventToEdit,
  //       time: t
  //     }
  //   }));
  // };

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); toggleModal() };
  //const { time } = this.state.eventToEdit;
  const dispatch = useDispatch();
  const [datePrésence, setDatePrésence] = useState('');
  const [état, setÉtat] = useState('');
  const [lieu, setLieu] = useState('');
  console.log("etat", état);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addPoint({

      datePrésence: new Date(selectedDate.setHours(7)),
      état: état,
      lieu: lieu,


    }))
    setDatePrésence('')
    setÉtat('')
    setLieu('')

  }
  console.log(état);
  console.log(lieu);




  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="paper add-event-modal">
          <center>
            <h2 id="simple-modal-title" style={{ color: "black" }}> Pointage du jour </h2><br />
          </center>
          <form onSubmit={onSubmit} >

            <div className="form-check" style={{ marginLeft: "230px" }} >
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Présent" onChange={(e) => setÉtat(e.target.value)} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Présent
              </label>

              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{ marginLeft: "80px" }} value="Absent" onChange={(e) => setÉtat(e.target.value)} />
              <label className="form-check-label" htmlFor="flexRadioDefault2" style={{ marginLeft: "100px" }}>
                Absent
              </label>
            </div>
            <div>
              
              <label >Lieu</label>
              <select type="text" className="form-control" name="lieu" placeholder="Entrer lieu " value={lieu} onChange={(e) => setLieu(e.target.value)} >
              <option value=""></option>
                <option value="Présentiel">Présentiel</option>
                <option value="À distance">À distance</option>
              </select>
            </div>
            
       
        <div className="event-button" >
          <center >
            <button
            className="btn btn-outline-primary"
              type="submit"
              variant="contained"
            
            >
              Enregistrer
            </button>
            
          </center>
        </div>
      </form>
    </div>
      </Modal >
    </div >
  );
}


export default AddEventModal;