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
  render() {
    return (
      <div>
        <h2>Auth</h2>
        <Login login={this.props.login}/>
        <Register register={this.props.register}/>
      </div>
    );
  }
}

Auth.propTypes = {
  login: React.PropTypes.func.isRequired,
  register: React.PropTypes.func.isRequired
};

export default Auth;
