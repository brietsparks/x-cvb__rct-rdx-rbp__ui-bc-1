/*
 *
 * AuthContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthContainer from './selectors';

import { login, register, logout, checkForRefresh } from './actions';
import Auth from '../../components/Auth';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const props = this.props;
    const auth = props.AuthContainer;

    return (
      <div>
        <Auth
          _lastAction={auth._lastAction}
          user={auth.user}

          login={props.login}
          register={props.register}
          logout={props.logout}
          checkForRefresh={props.checkForRefresh}
        />
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
    login: ({email, password}) => dispatch(login({email, password})),
    register: ({email, password}) => dispatch(register({email, password})),
    logout: () => dispatch(logout()),
    checkForRefresh: (user) => dispatch(checkForRefresh(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
