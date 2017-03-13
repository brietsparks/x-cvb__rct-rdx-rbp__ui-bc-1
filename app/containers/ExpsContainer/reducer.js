/*
 *
 * ExpsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  projects: [
    {id: 1, parent_id: null, data: 'bar'},
    {id: 2, parent_id: null, data: 'bar'},
    {id: 3, parent_id: 1, data: 'bar'},
    {id: 4, parent_id: 1, data: 'bar'},
    {id: 5, parent_id: 2, data: 'bar'},
    {id: 6, parent_id: 3, data: 'bar'},
  ],
  contributions: [
    {id: 100, parent_id: 1, data: 'foo'},
    {id: 101, parent_id: 1, data: 'foo'},
    {id: 102, parent_id: 2, data: 'foo'},
    {id: 103, parent_id: 3, data: 'foo'},
    {id: 104, parent_id: 3, data: 'foo'},
    {id: 105, parent_id: 4, data: 'foo'},
    {id: 105, parent_id: 4, data: 'foo'},
    {id: 105, parent_id: 4, data: 'foo'},
    {id: 105, parent_id: 6, data: 'foo'}
  ]
});

function expsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default expsContainerReducer;
