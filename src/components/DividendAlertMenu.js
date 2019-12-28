import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './DividendAlertMenu.css';

class DividendAlertMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();    
  }

  render () {
    
    return (

      <Menu width={ 200 } noOverlay={ true } >
        <a id="stock-list" href="/stocklist">My Stocks</a>
        <a id="dividends" href="/dividends">Dividends</a>        
        <a onClick={ this.showSettings } href="/settings">Settings</a>
      </Menu>

    );
  }
}

export default DividendAlertMenu;