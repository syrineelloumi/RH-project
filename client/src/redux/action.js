import  axios from "axios";
import { CREATE_USER , GET_USERS } from "./actionTypes";


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


export const getAllUsers = (listUsers) => async (dispatch) => {
    
    try {
      let res = await axios.get("/user/getUsers", listUsers);
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      
        console.log("erreur",error);
      
    }
  };