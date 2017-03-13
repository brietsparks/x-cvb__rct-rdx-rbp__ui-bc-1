/*
 *
 * ExpsContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectExpsContainer, makeExpTree } from './selectors';

export class ExpsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props);
    return (
      <div>
      </div>
    );
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
