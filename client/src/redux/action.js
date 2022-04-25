import axios from "axios";

import { CREATE_USER, DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_USER, EDIT_USER_FAIL, EDIT_USER_SUCCESS, GET_DEPARTEMENT, GET_DEPARTEMENT_FAIL, GET_DEPARTEMENT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_USERS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";


export const createUser = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post("/user/createUser", newUser);
    dispatch({
      type: CREATE_USER,
      payload: res.data,

    });
    console.log("res", res);
  } catch (error) {
    console.log("erreur", error);
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
  } catch (error) {
    dispatch({
      type: EDIT_USER_FAIL,
      payload: error.response.data,
    });
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
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};









