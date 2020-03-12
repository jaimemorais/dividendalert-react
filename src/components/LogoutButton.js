import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../services/dividendAlertAuthService";
import { logoutAction } from '../redux/actions';

export const LogoutButton = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  function handleClick() {
    dispatch(logoutAction());

    logoutAuth();
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
}

