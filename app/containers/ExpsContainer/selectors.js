import { createSelector } from 'reselect';

import CompositeTree from '../../utils/CompositeTree';

/**
 * Direct selector to the expsContainer state domain
 */
const selectExpsContainerDomain = (state) => state.get('expsContainer');

/**
 * Other specific selectors
 */
const selectProjects = state => selectExpsContainerDomain(state).get('projects');
const selectContributions = state => selectExpsContainerDomain(state).get('contributions');

const getExpTree = (projects, contributions) => {
  const tree = new CompositeTree;

  tree.setComposites({
    items: projects.toJS(),
    childrenField:'projects'
  });
  tree.setLeaves({
    items: contributions.toJS(),
    childrenField:'contributions'
  });

  return tree.getTree();
};


/**
 * Default selector used by ExpsContainer
 */

const makeSelectExpsContainer = () => createSelector(
  selectExpsContainerDomain,
  (substate) => substate.toJS()
);

const makeExpTree = () => createSelector(
  selectProjects,
  selectContributions,
  getExpTree
);

export {
  selectExpsContainerDomain,
  makeSelectExpsContainer,
  makeExpTree
};
