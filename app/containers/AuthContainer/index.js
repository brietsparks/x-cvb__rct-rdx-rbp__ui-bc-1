/*
 *
 * AuthContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthContainer from './selectors';

import { login } from './actions';
import Auth from '../../components/Auth';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Auth login={this.props.login}/>
      </div>
    );
  }
}

AuthContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  AuthContainer: makeSelectAuthContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: ({username, password}) => dispatch(login({username, password})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
