import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { HashRouter } from "react-router-dom";


class DividendAlertMenu extends React.Component {
  render () {
    
    return (
      <>            
        <HashRouter>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand>Dividend Alert</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
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
      </>
    );
  }
}

export default DividendAlertMenu;