import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/action";
import { Link } from "react-router-dom";


const Profil = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllUsers())
    }, [])
    return (
    <div>
         <Link to="/userList">
             
        <button>listes D'utilisateur</button>
            </Link>
    </div>
    )
  };
  
  export default Profil;
  