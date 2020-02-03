import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Routes from '../services/dividendAlertRoutes'
import { HashRouter } from "react-router-dom";


class DividendAlertMenu extends React.Component {
  render () {
    
    return (
      <>            
        <HashRouter>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Dividend Alert</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/mystocks">
                  <Nav.Link>My Stocks</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dividends">
                  <Nav.Link>Dividends</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </HashRouter>

        <Routes/>
      </>
    );
  }
}

export default DividendAlertMenu;