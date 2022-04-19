import { DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_USER_FAIL, EDIT_USER_SUCCESS, GET_USERS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";


let init = {
  usersList: null,
  user: null,
  errors: null,
  loading: false,
  isAuth: false,
  

};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        usersList: payload,
        loading: false
      };
    case DELETE_USER:
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
    case DELETE_USER_FAIL:
    case EDIT_USER_FAIL:
      return {
        ...state,
        errors: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.thisUser,
        loading: false,
        errors: null,
        isAuth: true,
        token: payload.token,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: state.usersList.filter((el) => el._id !== payload),
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: state.user.map((u) => (

          u._id === payload._id ? {
            ...u,
            nom: payload.nom,
            prenom: payload.prenom,
            email: payload.email,
            numTel: payload.numTel,
            adresse: payload.adresse,
            département: payload.département,
            contrat: payload.contrat,
            droitCongé: payload.droitCongé,
            role: payload.role,
            motDePasse: payload.motDePasse,
            salaire: payload.salaire,
          } : u
        )
        ),
        loading: false,
        errors: null,
      };


    default:
      return state;
  }
};
