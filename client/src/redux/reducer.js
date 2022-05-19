import {
  ADD_CONGE,
  ADD_CONGE_FAIL, ADD_CONGE_SUCCESS, ADD_DEPART, ADD_DEPART_FAIL, ADD_DEPART_SUCCESS, ADD_POINT, CREATE_USER, CREATE_USER__FAIL,
  DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_CONGE_FAIL, EDIT_CONGE_SUCCESS, EDIT_MP_FAIL, EDIT_MP_SUCCESS, EDIT_USER_FAIL, EDIT_USER_SUCCESS, GET_ALLCONGES_SUCCESS, GET_DEPARTEMENT_SUCCESS, GET_POINT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_USERS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT
} from "./actionTypes";


let init = {
  usersList: null,
  user: null,
  errors: null,
  loading: false,
  isAuth: false,
  departementsList: null,
  token: localStorage.getItem("token"),
  pointage: null,
  listPointage: null,
  ddeConge: null,
  listDdeConge: null,


};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
    case CREATE_USER:
    case ADD_DEPART:
    case ADD_POINT:
    case ADD_CONGE:
      return {
        ...state,
        usersList: payload,
        loading: false,
        errors: null
      };
    case DELETE_USER:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case LOGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_FAIL:
    case DELETE_USER_FAIL:
    case EDIT_USER_FAIL:
    case GET_PROFILE_FAIL:
    case CREATE_USER__FAIL:
    case ADD_DEPART_FAIL:
    case EDIT_MP_FAIL:
    case ADD_CONGE_FAIL:
    case EDIT_CONGE_FAIL:
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
    case EDIT_MP_SUCCESS:
    case EDIT_CONGE_SUCCESS:
      return {
        ...state,
        // user: state.user.map((u) => (

        //   u._id === payload._id ? {
        //     ...u,
        //     nom: payload.nom,
        //     prenom: payload.prenom,
        //     email: payload.email,
        //     numTel: payload.numTel,
        //     adresse: payload.adresse,
        //     département: payload.département,
        //     contrat: payload.contrat,
        //     droitCongé: payload.droitCongé,
        //     role: payload.role,
        //     motDePasse: payload.motDePasse,
        //     salaire: payload.salaire,
        //     image: payload.image,
        //   } : u
        // )
        // ),
        loading: false,
        errors: null,
      };
    case GET_DEPARTEMENT_SUCCESS:
      return {
        ...state,
        departementsList: payload
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        errors: null,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: payload,
        errors: null,
        isAuth: false,
        token: null,
        usersList: null,
      };
    case ADD_DEPART_SUCCESS:
      return {
        ...state,
        departementsList: payload,
        loading: false,
        errors: null,

      };
    case GET_POINT_SUCCESS:
      return {
        ...state,
        listPointage: payload,
        loading: false,
        errors: null
      };
    case ADD_CONGE_SUCCESS:
      return {
        ...state,
        listDdeConge: payload,
        loading: false,
        errors: null,

      };
    case GET_ALLCONGES_SUCCESS:
      return {
        ...state,
        listDdeConge: payload,
        loading: false,
        errors: null
      };


    default:
      return state;
  }



};
