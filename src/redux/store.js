import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer.js';
import feedReducer from './reducers/feedReducer.js';
import articleReducer from './reducers/articleReducer.js';
import userDetailsReducer from './reducers/userDetailsReducer.js';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  feed: feedReducer,
  article: articleReducer,
  user_details: userDetailsReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
