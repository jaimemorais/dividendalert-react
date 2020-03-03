import React from 'react';
import { useHistory } from "react-router-dom";
import { logout } from "../services/dividendAlertAuthService";

// Function Component

export const LogoutButton = () => {
  const history = useHistory();

  function handleClick() {
    logout();
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
}

