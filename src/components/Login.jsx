import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import dividendAlertApi from "../services/dividendAlertApiService";
import { login } from "../services/dividendAlertAuthService";

import { Form, Container } from "./LoginStyledComponents";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Fill e-mail and password fields!" });
    } else {
      try {

        var bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('pwd', password);

        const response = await dividendAlertApi.post("/users/login", bodyFormData);

        // TODO read the user.JwtToken here
        console.log(response);        
        console.log(JSON.parse(response.data));
        

        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Login error. Check your credentials. -- Backend message  : " + err
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>          
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
          <hr />
          <Link to="/signup">Sign Up</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);