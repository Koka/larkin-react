import actionTypes from '../constants/larkinConstants';
import api from '../api/api';

export const initialState = {
  auth: {
    login: "",
    password: "",
    error: ""
  }
};

export default function larkinReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.AUTH_SET_LOGIN:
      return Object.assign({}, state, {
        auth: Object.assign({}, state.auth, {login: payload})
      });
    case actionTypes.AUTH_SET_PASSWORD:
      return Object.assign({}, state, {
        auth: Object.assign({}, state.auth, {password: payload})
      });
    case actionTypes.AUTH_DO_LOGIN:
      //TODO:
      return state;
    default:
      return state;
  }
}
