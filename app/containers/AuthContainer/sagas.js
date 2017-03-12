import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import {
  loginSucceeded, loginFailed
} from './actions';

import {
  LOGIN
} from './constants';

import { Api } from '../Api';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

function attemptLogin({ username, password }) {
  return fetch(Api.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then(response => response.json());
}

function* login(action) {
  try {
    const token = yield call(attemptLogin, action.credentials);
    yield put(loginSucceeded(token));
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

export function* loginSaga() {
  yield* takeLatest(LOGIN, login)
}

// All sagas to be loaded
export default [
  defaultSaga,
];
