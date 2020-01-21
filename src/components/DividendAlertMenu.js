import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './DividendAlertMenu.css';
import {
  HashRouter,  
  NavLink
} from "react-router-dom";

class DividendAlertMenu extends React.Component {
  render () {
    
    return (
      
      <Menu width={ 200 } noOverlay={ true } >
        <HashRouter>
          <NavLink to="/">Home</NavLink>
          <br/>
          <NavLink to="/mystocks">My Stocks</NavLink>
          <br/>
          <NavLink to="/dividends">Dividends</NavLink>  
        </HashRouter>
      </Menu>

    );
  }
}

export default DividendAlertMenu;