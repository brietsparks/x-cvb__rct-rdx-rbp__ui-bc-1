/*
 *
 * BuilderContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectBuilderContainer from './selectors';

import ExpsContainer from '../ExpsContainer';

export class BuilderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Builder</h1>
        <ExpsContainer />
      </div>
    );
  }
}

BuilderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BuilderContainer: makeSelectBuilderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer);
