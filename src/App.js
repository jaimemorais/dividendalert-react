import React from 'react';
import './styles/App.css';
import DividendAlertMenu from './components/Menu'
import Routes from './services/dividendAlertRoutes'


export default () => 
(
  <div className="App" id="App-Container">
        
    <DividendAlertMenu />

    <Routes/>

  </div>
);
