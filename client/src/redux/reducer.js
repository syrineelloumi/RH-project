import { GET_USERS , LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from "./actionTypes";


let init = {
  usersList:null,
  user: null,
  errors: null,
  loading: false,
  isAuth: false,
  
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case  GET_USERS :
    return{
      ...state ,
      usersList:payload,
      loading: false
    };

    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
      };
        
    // case LOGIN :
    //   return{
    //     ...state,
    //     loading: false,
    //     user: payload.thisUser,
    //     errors: null,
    //     isAuth: true,
    //     token: payload.token,
    //   }
      

    default:
      return state;
  }
};
