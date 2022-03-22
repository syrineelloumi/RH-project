import { GET_USERS } from "./actionTypes";


let init = {
  usersList:[],
  
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case  GET_USERS :
    return{
      ...state ,
      usersList:payload
    }
    

    default:
      return state;
  }
};
