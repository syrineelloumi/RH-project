import { Fab } from '@material-ui/core';
import { addDays, addMonths, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import AddIcon from "@material-ui/icons/Add";
import "../styles/Calendar.css";
import AddEventModal from './Pointage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPoint } from '../redux/action';
// import { color } from '@mui/system';

const Calendrier = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()))
    // const [events, setEvents] = useState([])
    const [showEventModal, setShowEventModal] = useState(false)
    const [eventToEdit, setEventToEdit] = useState({})
    const { listPointage } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPoint())
     
    }, [])
    

    const formatter = new Intl.DateTimeFormat('fr', { month: 'long' });
    const month = formatter.format(currentMonth);


    let prevMonth = () => {
        setCurrentMonth(
            subMonths(currentMonth, 1)
        );
    };

    let nextMonth = () => {
        setCurrentMonth(
            addMonths(currentMonth, 1)
        );
    };

    const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "Vendredi", "Samedi"];
    const days = [];

    for (let day of daysOfWeek) {
        days.push(
            <div className="col col-center" key={day} >
                {(day)}
            </div>
        );
    }

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let dayss = [];
    let day = startDate;
    let formattedDate = "";
    const editEvent = e => {
        setEventToEdit(e);
        toggleModal()
    };


    const onAddEventClick = date => {

        setSelectedDate(date);
        toggleModal()
        // console.log(date);
    };
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat, {
                useAdditionalDayOfYearTokens: false
            });
            const cloneDay = day;

            dayss.push(
                <div
                    className={`col cell ${!isSameMonth(day, monthStart)
                        ? "disabled"
                        : isSameDay(day, selectedDate)
                            ? "selected"
                            : ""
                        }`}
                    key={day}
                >
                    <span className="number">{formattedDate}</span>
                    {isSameMonth(day, monthStart) ? (
                        <div>
                            <div>
                                {listPointage
                                    .filter(e => isSameDay(cloneDay, new Date(e.datePrésence)))
                                    .map((e, i) => (
                                        <div
                                            onClick={() => editEvent(e)}
                                            key={i}
                                            className="event-data"
                                        >
                                            {e.état}
                                        </div>
                                    ))}
                            </div>
                            <div key={"add-event-" + day} className="add-event-button" >
                                <Fab
                                    // color="primary"
                                    
                                    size="small"
                                    aria-label="add"
                                    onClick={() => onAddEventClick(cloneDay)}
                                    style={{backgroundColor:"#c7cbd2" , color:"white"}}
                                 >
                                    <AddIcon />
                                </Fab>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {dayss}
            </div>
        );
        dayss = [];
    }

    const toggleModal = () => {
        setShowEventModal(!showEventModal)
    };
    console.log("eventModal", showEventModal);
// console.log("date",new Date(Date.now()));
    return (
        <div>
            <NavBar />
            <div className="header row flex-middle">

                <div className="col col-start" onClick={prevMonth}>
                    <i className="bi bi-chevron-left" style={{ color: "black" }}></i>
                </div>
                <div className="col col-center">
                    <span>
                        {(month)}
                    </span>
                </div>
                <div className="col col-end" onClick={nextMonth}>
                    <i className="bi bi-chevron-right" style={{ color: "black" }}></i>
                </div>
            </div>
            <div className="days row">{days}</div>
            <div className="body">{rows}</div>
            {showEventModal ?
                <AddEventModal toggleModal={toggleModal}
                selectedDate={selectedDate}
                // handleFormSubmit={this.handleFormSubmit}
                // eventToEdit={eventToEdit}
                /> : <></>
            }

        </div>
    );
}



export default Calendrier;

