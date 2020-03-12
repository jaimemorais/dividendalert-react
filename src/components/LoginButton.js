import React from 'react';
import { loginAuth } from "../services/dividendAlertAuthService";
import { useDispatch } from "react-redux";
import { loginSuccessAction } from '../redux/actions';

export const LoginButton = () => {

  const dispatch = useDispatch();


  function handleClick() {
    dispatch(loginSuccessAction());
    loginAuth();
  }

  return (
    <button type="submit" onClick={handleClick}>
      Login
    </button>
  );
}

