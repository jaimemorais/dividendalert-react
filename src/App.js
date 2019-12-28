import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'

function App() {
  return (
    
    <div className="App" id="App-Container">
      <main id="page-wrap">      
      <DividendAlertMenu pageWrapId={ "page-wrap" } outerContainerId={ "App-Container" }  />
        <header >
          <p>
            Dividend Alert
          </p>        
        </header>    
      </main>      
      

    </div>
  );
}

export default App;
