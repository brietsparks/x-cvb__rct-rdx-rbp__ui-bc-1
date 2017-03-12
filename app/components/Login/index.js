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
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <input type="text" onChange={this.onChange.bind(this, 'username')}/>
        <input type="password" onChange={this.onChange.bind(this, 'password')}/>
        <button onClick={this.onSubmit}>Login</button>
      </div>
    );
  }

  onSubmit = () => {
    this.props.login({
      username: this.state.username,
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

};

export default Login;
