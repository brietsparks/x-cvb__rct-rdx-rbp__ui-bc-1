/*
 *
 * AuthContainer actions
 *
 */

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED
} from './constants';

import axios from 'axios';
import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import {Api} from '../Api';

export function login({username, password}) {
  return dispatch => {
    console.log('ok');
    dispatch({type: LOGIN});

    axios.post(`${Api.login}`, {username, password})
      .then(res => {
        // cookie.save('token', res.data.token, {path: '/'});
        dispatch({type: LOGIN_SUCCEEDED, payload: jwt_decode(res.data.token)});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: LOGIN_FAILED});
      });
  }
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED,
  };
}

export function loginSucceeded() {
  return {
    type: LOGIN_SUCCEEDED,
  };
}

