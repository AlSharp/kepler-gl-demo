import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import thunk from 'redux-thunk';

import {appReducer} from '../reducers';

const initialState = {};

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer
});

let middlewares = [thunk];

if (!PRODUCTION) {
  const logger = require('redux-logger').createLogger();
  middlewares = [...middlewares, logger];
}

const middlewareEnhancer = enhanceReduxMiddleware(middlewares);
const enhancers = [applyMiddleware(...middlewareEnhancer)];

export default createStore(
  reducers,
  initialState,
  compose(...enhancers)
)