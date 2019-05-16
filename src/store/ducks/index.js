import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import usuarios from './usuarios';
import dominios from './dominios';

export default history => combineReducers({
  router: connectRouter(history),
  login,
  usuarios,
  dominios,
});
