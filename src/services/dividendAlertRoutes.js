import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MyStocks from '../components/MyStocks'
import Dividends from '../components/Dividends'
import Login from '../components/Login'
import Home from '../components/Home'

import { isAuthenticated } from "./authService";

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
            <Route exact path="/login" component={Login} />            
            <PrivateRoute path='/mystocks' component={MyStocks} />
            <Route path='/dividends' component={Dividends} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </HashRouter>
);

export default Routes;