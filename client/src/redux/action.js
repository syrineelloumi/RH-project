import axios from "axios";

import { ADD_DEPART, ADD_DEPART_FAIL, ADD_DEPART_SUCCESS, ADD_POINT, ADD_POINT_FAIL, ADD_POINT_SUCCESS, CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER__FAIL, DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, 
  EDIT_USER, EDIT_USER_FAIL, EDIT_USER_SUCCESS,EDIT_MP, EDIT_MP_SUCCESS , EDIT_MP_FAIL , GET_DEPARTEMENT, GET_DEPARTEMENT_FAIL, GET_DEPARTEMENT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_USERS,
   LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, GET_POINT, GET_POINT_SUCCESS, GET_POINT_FAIL, ADD_CONGE, ADD_CONGE_SUCCESS, ADD_CONGE_FAIL, GET_ALLCONGES, GET_ALLCONGES_SUCCESS, GET_ALLCONGES_FAIL, EDIT_CONGE, EDIT_CONGE_SUCCESS, EDIT_CONGE_FAIL, GET_USERCONGES, GET_USERCONGES_SUCCESS, GET_USERCONGES_FAIL } from "./actionTypes";


export const createUser = (newUser) => async (dispatch) => {
  dispatch({ type: CREATE_USER });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post("/user/createUser", newUser, config);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,

    });
    console.log("res", res);
    alert("Ajout avec succés!")
    window.location.href = "/userList"
    

  }catch (error) {
  dispatch({
    type: CREATE_USER__FAIL,
    payload: error.response.data,
  });
  }
}


export const getAllUsers = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let res = await axios.get("/user/getUsers", config);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {

    console.log("erreur", error);

  }
};



// export const userLogin = (user) => async (dispatch) => {

//   try {
//     let res = await axios.post("/user/login", user);
//     localStorage.setItem("token", res.data.token);
//     console.log(res.data);
//     dispatch({
//       type: LOGIN,
//       payload: res.data,
//     });
//     dispatch(getAllUsers())
//   } catch (error) {
//     console.log("erreur",error);
//   }
// };

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });
  console.log(user);
  
  try {

    let res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.token);
    console.log(res.data);
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    
    // window.location.href = "/userList"
   
     if(res.data.thisUser.role==="Admin"){
      window.location.href = "/userList";}
       else{
      window.location.href = "/profile";}
    
    
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
    alert(error.response.data.msg);
    console.log(error.response.data.msg);
    window.location.reload();
  }
  
};


export const editUser = (editUser) => async (dispatch) => {
  dispatch({ type: EDIT_USER });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
  try {
    const res = await axios.put(`/user/updateUser/${editUser.id}`,editUser,config);
    
    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: res.data,
    });
    alert("mise à jour avec succès" )
    window.location.reload();
    
    
  } catch (error) {
    dispatch({
      type: EDIT_USER_FAIL,
      payload: error.response.data,
    });
    console.log("erreur", error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_USER,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    },
  };
  try {
    let res = await axios.delete(`/user/deleteUser/${id}`, config);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data,
    });
    alert("suppression avec succès!" )
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};



export const getDepartements = () => async (dispatch) => {
  dispatch({
    type: GET_DEPARTEMENT,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let res = await axios.get("/departement/getDepartements", config);
    dispatch({
      type: GET_DEPARTEMENT_SUCCESS,
      payload: res.data,
    });
    
  } catch (error) {
    dispatch({
      type: GET_DEPARTEMENT_FAIL,
      payload: error.response.data,
    });
  }
};


export const getProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    },
  };
  try {
    let res = await axios.get("/user/getUser", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,

    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null})

    window.location.href = "/"
  
};

export const addDepart = (newDepart) => async (dispatch) => {
  dispatch({ type: ADD_DEPART });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post("/departement/createDepartement", newDepart, config);
    dispatch({
      type: ADD_DEPART_SUCCESS,
      payload: res.data,

    });
    alert("ajout avec succès" )
    window.location.href = "/userList"
    
  }catch (error) {
  dispatch({
    type: ADD_DEPART_FAIL,
    payload: error.response.data,
  });
  // alert(error.response.data)
  }
}

export const addPoint = (newPoint) => async (dispatch) => {
  dispatch({ type: ADD_POINT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post("/presence/addPresence", newPoint, config);
    dispatch({
      type: ADD_POINT_SUCCESS,
      payload: res.data,

    });
    alert("ajout avec succès" )
    window.location.reload();

  }catch (error) {
  dispatch({
    type: ADD_POINT_FAIL,
    payload: error.response.data,
  });
  }
}


export const UpdateMp = (id,editUser) => async (dispatch) => {
  dispatch({ type: EDIT_MP});
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
  try {
    const res = await axios.put(`/user/UpdateMp/${id}`,editUser,config);
    
    dispatch({
      type: EDIT_MP_SUCCESS,
      payload: res.data,
    });
    alert("mise à jour avec succès" )
    console.log("m2p changed");
    
  } catch (error) {
    dispatch({
      type: EDIT_MP_FAIL,
      payload: error.response.data,
    });
    console.log("erreur", error);
    alert(error.response.data.msg);
  }
};

export const getPoint = () => async (dispatch) => {
  dispatch({
    type: GET_POINT,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let res = await axios.get("/presence/getPresences", config);
    dispatch({
      type: GET_POINT_SUCCESS,
      payload: res.data,
    });
    
  } catch (error) {
    dispatch({
      type: GET_POINT_FAIL,
      payload: error.response.data,
    });
  }
};


export const addConge = (ddeConge) => async (dispatch) => {
  dispatch({ type: ADD_CONGE });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post("/conge/addConge", ddeConge, config);
    dispatch({
      type: ADD_CONGE_SUCCESS,
      payload: res.data,

    });
    alert("Demande envoyer avec succès" )
  }catch (error) {
  dispatch({
    type: ADD_CONGE_FAIL,
    payload: error.response.data,
  });
  alert(error.response.data.msg);
  
  }
}


export const getAllConges = () => async (dispatch) => {
  dispatch({
    type: GET_ALLCONGES,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let res = await axios.get("/conge/getAllConges", config);
    dispatch({
      type: GET_ALLCONGES_SUCCESS,
      payload: res.data,
    });
    console.log("congé",res.data);
  } catch (error) {
    dispatch({
      type: GET_ALLCONGES_FAIL,
      payload: error.response.data,
    });
  }
};



export const editConge = ({id, etat}) => async (dispatch) => {
  dispatch({ type: EDIT_CONGE });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
  try {
    const res = await axios.put(`/conge/updateEtatConge/${id}`,etat,config);
    
    dispatch({
      type: EDIT_CONGE_SUCCESS,
      payload: res.data,
    });
    
    // window.location.reload();
    
    
  } catch (error) {
    dispatch({
      type: EDIT_CONGE_FAIL,
      payload: error.response.data,
    });
    console.log("erreur", error);
  }
};


export const getUserConges = () => async (dispatch) => {
  dispatch({
    type: GET_USERCONGES,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    let res = await axios.get("/conge/getUserConges", config);
    dispatch({
      type: GET_USERCONGES_SUCCESS,
      payload: res.data,
    });
    console.log("congé",res.data);
  } catch (error) {
    dispatch({
      type: GET_USERCONGES_FAIL,
      payload: error.response.data,
    });
  }
};








