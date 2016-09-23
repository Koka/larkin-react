import actionTypes from '../constants/larkinConstants';

export function setLogin(value) {
  return {
    type: actionTypes.AUTH_SET_LOGIN,
    payload: value
  };
}

export function setPassword(value) {
  return {
    type: actionTypes.AUTH_SET_PASSWORD,
    payload: value
  };
}
