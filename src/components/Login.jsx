import React from 'react';
import {
    Button
  } from 'reactstrap';

class Login extends React.Component {
  render () {
    
    return (
      <div>
        <p>Login</p>
        <input type="text" id="login" />
        <p>Password</p>
        <input type="text" id="password" />

        <br/>
        <Button>Login</Button>
      </div>
    );
  }
}

export default Login;