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
  REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED
} from './constants';

const initialState = fromJS({
  waiting: null,
  user: null
});

function authContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('waiting', LOGIN);
    case LOGIN_FAILED:
      return state.set('waiting', null);
    case LOGIN_SUCCEEDED:
      return state.set('waiting', null)
        .set('user', action.payload);


    case REGISTER:
      return state.set('waiting', REGISTER);
    case REGISTER_FAILED:
      return state.set('waiting', null);
    case REGISTER_SUCCEEDED:
      return state.set('waiting', null)
        .set('user', action.payload);

    default:
      return state;
  }
}

export default authContainerReducer;
