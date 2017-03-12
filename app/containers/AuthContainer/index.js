/*
 *
 * AuthContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthContainer from './selectors';

import { login, register } from './actions';
import Auth from '../../components/Auth';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Auth
          login={this.props.login}
          register={this.props.register}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
