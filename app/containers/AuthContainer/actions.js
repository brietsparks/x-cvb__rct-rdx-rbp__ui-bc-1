/*
 *
 * AuthContainer actions
 *
 */

import {
  LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED,
  REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED
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

export function register({email, password}) {
  return dispatch => {
    console.log('register');
    console.log({email, password});
    dispatch({type: REGISTER});

  }
}

export function registerFailed() {
  return {
    type: REGISTER_FAILED
  }
}

export function registerSucceeded() {
  return {
    type: REGISTER_SUCCEEDED
  }
}

