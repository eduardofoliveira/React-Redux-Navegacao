import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Logout from '../pages/Logout';

import history from './history';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const App = () => <Redirect to="/app" />;

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <PrivateRoute path="/app" component={Main} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route path="*" component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
