import actionTypes from '../constants/larkinConstants';
import { getAuthToken } from '../api/api';
import { push } from 'react-router-redux';

const jwtStorageKey = 'larkinJWTToken';

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

export function doLogin() {
  return (dispatch, getState) => {
    const { login, password } = getState().larkinStore.auth;
    getAuthToken(login, password).then(
      token => {
        sessionStorage.setItem(jwtStorageKey, token);
        dispatch({ type: actionTypes.AUTH_LOGIN_OK, payload: token });
      },
      err => dispatch({ type: actionTypes.AUTH_LOGIN_ERR, payload: err })
    ).then(() => dispatch(push('/app/delivery')));
  };
}

export let redirectTo = push;

export function loadAuthToken() {
  return (dispatch, getState) => {
    if (getState().larkinStore.auth.token) {
      return;
    }

    const token = sessionStorage.getItem(jwtStorageKey);
    if (token) {
      dispatch({ type: actionTypes.AUTH_LOGIN_OK, payload: token });
    }
  };
}

export function doLogout() {
  return (dispatch) => {
    sessionStorage.removeItem(jwtStorageKey);
    dispatch({ type: actionTypes.AUTH_LOGOUT });
  };
}
