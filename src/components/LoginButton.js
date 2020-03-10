import React from 'react';
import { useHistory } from "react-router-dom";
import { login } from "../services/dividendAlertAuthService";
import { useDispatch } from "react-redux";
import { loginSuccessAction } from '../redux/actions';

export const LoginButton = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  function handleClick() {
    dispatch(loginSuccessAction());
    login();
    history.push("/login");
  }

  return (
    <button type="submit" onClick={handleClick}>
      Login
    </button>
  );
}

