/**
*
* Auth
*
*/

import React from 'react';
// import styled from 'styled-components';

import Login from '../Login';

import {login} from '../../containers/AuthContainer/actions';


class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h2>Auth</h2>
        <Login login={login}/>
      </div>
    );
  }
}

Auth.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default Auth;
