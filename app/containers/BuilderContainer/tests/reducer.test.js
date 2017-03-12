
import { fromJS } from 'immutable';
import builderContainerReducer from '../reducer';

describe('builderContainerReducer', () => {
  it('returns the initial state', () => {
    expect(builderContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
