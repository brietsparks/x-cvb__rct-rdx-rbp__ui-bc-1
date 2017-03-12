/**
*
* Login
*
*/

import React from 'react';
// import styled from 'styled-components';

import { fromJS } from 'immutable';


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

        <label>Email</label>
        <input type="text" onChange={this.onChange.bind(this, 'email')} />

        <label>Password</label>
        <input type="password" onChange={this.onChange.bind(this, 'password')}/>

        <button onClick={this.onSubmit}>Login</button>
      </div>
    );
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
