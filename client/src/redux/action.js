import  axios from "axios";
import { CREATE_USER , GET_USERS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";


export const createUser =(newUser)=> async(dispatch)=>{
try {
    const res = await axios.post("/user/createUser", newUser);
    dispatch({
        type: CREATE_USER,
        payload:res.data ,
    
      });
      console.log("res",res);
} catch (error) {
    console.log("erreur",error);
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
      let res = await axios.get("/user/getUsers",config);
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      
        console.log("erreur",error);
      
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
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  