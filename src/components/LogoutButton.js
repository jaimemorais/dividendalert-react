import React from 'react';
import { useHistory } from "react-router-dom";
import { logout } from "../services/dividendAlertAuthService";
import { useDispatch } from "react-redux";
import { logoutAction } from '../redux/actions';

export const LogoutButton = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  function handleClick() {
    dispatch(logoutAction());

    logout();
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
}
