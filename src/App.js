import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'

function App() {
  return (
    <div className="App" id="App-Container">

      <DividendAlertMenu pageWrapId={ "page-wrap" } outerContainerId={ "App-Container" }  />

      <main id="page-wrap">      
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
