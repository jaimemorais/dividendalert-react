import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import MyStocks from '../components/MyStocks'
import Dividends from '../components/Dividends'
import LoginForm from '../components/LoginForm'
import Home from '../components/Home'

import { isAuthenticated } from "./dividendAlertAuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />            
            <Route exact path="/login" component={LoginForm} />            
            <PrivateRoute path='/mystocks' component={MyStocks} />
            <PrivateRoute path='/dividends' component={Dividends} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </HashRouter>
);

export default Routes;