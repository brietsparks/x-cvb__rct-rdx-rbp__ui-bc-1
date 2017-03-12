/*
 *
 * BuilderContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectBuilderContainer from './selectors';

import Auth from '../../components/Auth';

export class BuilderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const auth = <Auth/>;

    return (
      <div>
        <h1>Builder</h1>
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
