/**
*
* Auth
*
*/

import React from 'react';
// import styled from 'styled-components';

import Login from '../Login';
import Register from '../Register';

class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.checkForRefresh(this.props.user);
  }

  render() {
    return (
      <div>
        <h2>Auth</h2>
        {this.userIsLoggedIn() ? this.renderUserAuth() : this.renderGuestAuth()}
      </div>
    );
  }

  renderGuestAuth() {
    return (
      <div>
        <Login
          _lastAction={this.props._lastAction}
          login={this.props.login}
        />
        <Register
          _lastAction={this.props._lastAction}
          register={this.props.register}
        />
      </div>
    );
  }

  renderUserAuth() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  userIsLoggedIn() {
    return null !== this.props.user;
  }

}

Auth.propTypes = {
  _lastAction: React.PropTypes.string,
  login: React.PropTypes.func.isRequired,
  register: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired
};

export default Auth;
