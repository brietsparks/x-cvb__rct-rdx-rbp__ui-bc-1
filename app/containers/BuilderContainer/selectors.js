import { createSelector } from 'reselect';

/**
 * Direct selector to the builderContainer state domain
 */
const selectBuilderContainerDomain = () => (state) => state.get('builderContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by BuilderContainer
 */

const makeSelectBuilderContainer = () => createSelector(
  selectBuilderContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBuilderContainer;
export {
  selectBuilderContainerDomain
};
