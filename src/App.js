import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'
import Routes from './services/dividendAlertRoutes'
import "./styles/global";

export default () => (
  <div className="App" id="App-Container">
        
    <header className="App-header">        
        Dividend Alert - Title        
    </header>    

    <DividendAlertMenu />

    <Routes/>

  </div>
);
