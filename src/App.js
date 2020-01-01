import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'
import MyStocks from './components/MyStocks'
import Dividends from './components/Dividends'
import {  
  Switch,
  Route,  
  HashRouter
} from "react-router-dom";

function App() {
  return (
    
    <div className="App" id="App-Container">
      
      <header className="App-header">        
          Dividend Alert - Title        
      </header>    

      <DividendAlertMenu />


      <div id="content" className="content">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/mystocks' component={MyStocks} />
            <Route path='/dividends' component={Dividends} />
          </Switch>
        </HashRouter>
      </div>

    </div>
  );
}

function Home() {
  return <h2>Home component</h2>;
}


export default App;
