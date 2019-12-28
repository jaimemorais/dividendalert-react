import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'

function App() {
  return (
    
    <div className="App" id="App-Container">
      
      <div id="page-wrap">      
        <DividendAlertMenu pageWrapId={ "page-wrap" } outerContainerId={ "App-Container" }  />
        <header className="header">
          <h3>
            Dividend Alert
          </h3>        
        </header>    
        
        <div id="content" className="content">
          <p>teste</p>
        </div>
        
      </div>      
      

    </div>
  );
}

export default App;
