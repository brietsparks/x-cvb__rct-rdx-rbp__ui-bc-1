/*
 *
 * AuthContainer actions
 *
 */

import {
  TOKEN,
  LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED,
  REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED,
  LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCEEDED
} from './constants';

import axios from 'axios';
import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import {Api} from '../Api';

export function login({email, password}) {
  return dispatch => {
    dispatch({type: LOGIN});

    axios.post(`${Api.login}`, {username: email, password})
      .then(res => {
        setToken(res.data.token);
        dispatch({type: LOGIN_SUCCEEDED, payload: jwt_decode(res.data.token)});
      })
      .catch(err => {
        dispatch({type: LOGIN_FAILED});
      });
  }
}

export function register({email, password}) {
  return dispatch => {
    dispatch({type: REGISTER});

    axios.post(`${Api.register}`, {username: email, email, password})
      .then(res => {
        dispatch(login({email, password}));
      })
      .catch(err => {
        dispatch({type: REGISTER_FAILED, payload: err.data});
      });

    dispatch({type: REGISTER});

  }
}

export function logout() {
  unsetToken();

  return {type: LOGOUT}
}

export function checkForRefresh(user = null) {
  return (dispatch) => {
    const token = getToken();
    if (!user && token) {
      try {
        dispatch({type: LOGIN_SUCCEEDED, payload: jwt_decode(token)});
      } catch (err) {
        unsetToken();
      }
    }
  }
}

function getToken() {
  return cookie.load(TOKEN);
}

function setToken(token) {
  cookie.save(TOKEN, token, {path: '/'});
  axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
}

function unsetToken() {
  cookie.remove(TOKEN);
  axios.defaults.headers.common['Authorization'] = null;
}

// export function loginFailed() {
//   return {
//     type: LOGIN_FAILED,
//   };
// }
//
// export function loginSucceeded() {
//   return {
//     type: LOGIN_SUCCEEDED,
//   };
// }

// export function registerFailed() {
//   return {
//     type: REGISTER_FAILED
//   }
// }
//
// export function registerSucceeded() {
//   return {
//     type: REGISTER_SUCCEEDED
//   }
// }

// export function logoutFailed() {
//   return {
//     type: LOGOUT_FAILED
//   }
// }
//
// export function logoutSucceeded() {
//   return {
//     type: LOGIN_SUCCEEDED
//   }
// }