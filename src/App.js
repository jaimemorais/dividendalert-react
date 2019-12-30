import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'

function App() {
  return (
    
    <div className="App" id="App-Container">
         
      <DividendAlertMenu />

      <header className="App-header">        
          Dividend Alert - Title        
      </header>    
      
      <div id="content" className="content">
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>

    </div>
  );
}

export default App;
