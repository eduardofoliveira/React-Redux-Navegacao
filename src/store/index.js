import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';
import history from '../routes/history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const createAppropriateStore = createStore;

const store = createAppropriateStore(reducers(history), compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
