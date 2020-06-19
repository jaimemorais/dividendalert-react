import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import dividendAlertApi from '../services/dividendAlertApiService';
import { loginAuth } from '../services/dividendAlertAuthService';
import { Form } from './FormStyledComponent';
import { Container } from './ContainerStyledComponent';
import { useDispatch } from "react-redux";
import { loginSuccessAction } from '../redux/actions';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  
  async function handleSignIn(e) {
    e.preventDefault();
    
    if (!email || !password) {
      this.setState({ error: "Fill e-mail and password fields!" });
    } else {

      try {

        // login post
        var bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('pwd', password);
        const response = await dividendAlertApi.post(process.env.REACT_APP_DIVIDENDALERT_ENDPOINT_LOGIN, bodyFormData);
        
        loginAuth(response.data.jwtToken);        
        dispatch(loginSuccessAction());        

        history.push("/mystocks");
      } catch (err) {
        if (err.response != null && err.response.status === 401) {
          setErrorMessage("Invalid credentials.");
        }
        else {
          setErrorMessage("Error : " + err);          
        }        
      }

    }
  };

  
  return (
    <Container>
      <Form onSubmit={handleSignIn}>          
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}          
        />
         
         <button type="submit">
           Login
         </button>
        
        <hr />
        <Link to="/signup">Sign Up</Link>

      </Form>
    </Container>
  );
  
}
