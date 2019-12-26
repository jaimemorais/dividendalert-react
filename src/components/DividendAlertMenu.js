import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class DividendAlertMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (

      <Menu>
        <a id="stock-list" className="menu-item" href="/stocklist">My Stocks</a>
        <a id="dividends" className="menu-item" href="/dividends">Dividends</a>        
        <a onClick={ this.showSettings } className="menu-item--small" href="/settings">Settings</a>
      </Menu>

    );
  }
}

export default DividendAlertMenu;