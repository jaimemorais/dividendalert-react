import React from 'react';
import './styles/App.css';
import DividendAlertMenu from './components/DividendAlertMenu'
import Routes from './services/dividendAlertRoutes'
import { isAuthenticated } from "./services/dividendAlertAuthService";

export default () => (
  <div className="App" id="App-Container">
        
    <DividendAlertMenu />

    <Routes/>

    <p>isAuthenticated = {isAuthenticated() ? "yes" : "no"}</p>

  </div>
);
