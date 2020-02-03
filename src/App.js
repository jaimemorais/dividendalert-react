import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'
import "./styles/global";
import Routes from './services/dividendAlertRoutes'

export default () => (
  <div className="App" id="App-Container">
        
    <DividendAlertMenu />

    <Routes/>

  </div>
);
