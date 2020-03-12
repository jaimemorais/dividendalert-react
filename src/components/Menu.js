import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HashRouter } from 'react-router-dom';
import { LogoutButton } from './LogoutButton'
import { useSelector } from 'react-redux';
import userLoggedReducer from '../redux/reducers/userLoggedReducer';


export default function DividendAlertMenu() {


  const { showLogoutButton } = useSelector(() => {
    return {
      showLogoutButton: userLoggedReducer.authenticated
    };
  });

    
  return (
    <>                    
      <HashRouter>        
        <Navbar bg="primary" variant="dark" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>Dividend Alert</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">    
              
              {!showLogoutButton ? (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                ) : null
              } 

              <LinkContainer to="/mystocks">
                <Nav.Link>My Stocks</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/dividends">
                <Nav.Link>Dividends</Nav.Link>
              </LinkContainer>
              
              {showLogoutButton ?
                (<LogoutButton />) : null
              }

            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
      </HashRouter>
    </>
  );

}
