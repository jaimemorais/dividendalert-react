import React from 'react';
import './App.css';
import DividendAlertMenu from './components/DividendAlertMenu'
import Home from './components/Home'
import MyStocks from './components/MyStocks'
import Dividends from './components/Dividends'
import {  
  Switch,
  Route,  
  HashRouter
} from "react-router-dom";


export default () => (
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
