/**
*
* Login
*
*/

import React from 'react';
// import styled from 'styled-components';

import { fromJS } from 'immutable';
import { LOGIN_FAILED } from '../../containers/AuthContainer/constants';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = fromJS({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        {this.message()}

        <label>Email</label>
        <input type="text" onChange={this.onChange.bind(this, 'email')} />

        <label>Password</label>
        <input type="password" onChange={this.onChange.bind(this, 'password')}/>

        <button onClick={this.onSubmit}>Login</button>
      </div>
    );
  }

  message() {
    if(LOGIN_FAILED === this.props._lastAction) {
      return (
        <p>Invalid credentials.</p>
      );
    }
  }

  onSubmit = () => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  onChange(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default Login;
