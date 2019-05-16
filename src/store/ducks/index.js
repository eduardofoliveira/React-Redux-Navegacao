import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import usuarios from './usuarios';

export default history => combineReducers({
  router: connectRouter(history),
  login,
  usuarios,
});
