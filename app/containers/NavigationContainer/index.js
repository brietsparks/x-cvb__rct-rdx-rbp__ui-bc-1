/*
 *
 * NavigationContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectNavigationContainer from './selectors';

import Navigation from '../../components/Navigation';
import AuthContainer from '../AuthContainer';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navigation/>
        <AuthContainer/>
      </div>
    );
  }
}

NavigationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NavigationContainer: makeSelectNavigationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
