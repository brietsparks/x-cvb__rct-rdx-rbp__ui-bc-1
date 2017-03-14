/*
 *
 * ExpsContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectExpsContainer, makeExpTree } from './selectors';

import Project from '../../components/Project';
import Contribution from '../../components/Contribution';

export class ExpsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const projects = this.createProjectElements(this.props.ExpTree);

    console.log(this.props.ExpTree);

    return (
      <div>
        {projects}
      </div>
    );
  }

  createProjectElements = (projects) => {
    return projects.map(project => {
      return (
        <Project {...project}
                 key={project.id}
                 createProjectElements={this.createProjectElements}
                 createContributionElements={this.createContributionElements}
        />
      );
    });
  };

  createContributionElements = (contributions) => {
    return contributions.map(contribution => {
      return <Contribution {...contribution} key={contribution.id} />;
    })
  }
}

ExpsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ExpsContainer: makeSelectExpsContainer(),
  ExpTree: makeExpTree()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpsContainer);