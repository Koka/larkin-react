import actionTypes from '../constants/larkinConstants';

export const initialState = {
  auth: {
    login: "",
    password: "",
    error: "",
    token: null
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
    case actionTypes.AUTH_LOGIN_OK:
      return Object.assign({}, state, {
        auth: Object.assign({}, state.auth, {token: payload})
      });
    case actionTypes.AUTH_LOGIN_ERR:
      console.error("Failed to login", state.payload);
      return state;
    case actionTypes.AUTH_LOGOUT:
      return Object.assign({}, state, {
        auth: Object.assign({}, state.auth, {token: null})
      });
    default:
      return state;
  }
}
