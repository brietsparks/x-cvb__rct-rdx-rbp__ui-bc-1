
import { fromJS } from 'immutable';
import expsContainerReducer from '../reducer';

describe('expsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(expsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
