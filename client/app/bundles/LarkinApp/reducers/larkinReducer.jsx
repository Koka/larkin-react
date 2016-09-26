import actionTypes from '../constants/larkinConstants';

export const initialState = {
  auth: {
    login: "",
    password: "",
    error: "",
    token: null
  },

  users: { }
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
    case actionTypes.API_LOAD_USER:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          [payload.id]: payload.user
        })
      });
    case actionTypes.API_ERROR:
      console.error("Failed to do API call", state.payload);
      return state;
    default:
      return state;
  }
}
