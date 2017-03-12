/*
 *
 * AuthContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import {
  LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED,
  REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED,
  LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCEEDED
} from './constants';

const initialState = fromJS({
  _lastAction: null,
  user: null
});

function authContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('_lastAction', LOGIN);
    case LOGIN_FAILED:
      return state.set('_lastAction', LOGIN_FAILED);
    case LOGIN_SUCCEEDED:
      return state.set('_lastAction', LOGIN_SUCCEEDED)
        .set('user', action.payload);


    case REGISTER:
      return state.set('_lastAction', REGISTER);
    case REGISTER_FAILED:
      return state.set('_lastAction', REGISTER_FAILED);
    case REGISTER_SUCCEEDED:
      return state.set('_lastAction', REGISTER_SUCCEEDED)
        .set('user', action.payload);

    case LOGOUT:
      return state.set('_lastAction', LOGOUT)
        .set('user', null);

    default:
      return state;
  }
}

export default authContainerReducer;
