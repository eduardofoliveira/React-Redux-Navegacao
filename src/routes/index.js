import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import history from './history';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (false ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={Main} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
