import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { CdsReducer } from '../containers/CdsContainer/store/reducers';
import { IRootState } from './state';
import promise from 'redux-promise-middleware';

const rootReducer: Reducer<IRootState> = combineReducers({
  cds: CdsReducer,
});

// For Redux devtool in Chrome.
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(rootReducer, composeEnhancers(middleware));
