import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import { createLogger } from 'redux-logger';

const middleWare = [
  thunk,
];

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

middleWare.push(loggerMiddleware)

const store = createStore(reducers, applyMiddleware(...middleWare));

export default store;
