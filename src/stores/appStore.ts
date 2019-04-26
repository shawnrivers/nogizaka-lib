import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { CdsReducers } from '../containers/Cds/reducers';
import { IRootState } from './state';
import promise from 'redux-promise-middleware';
import { MembersReducers } from '../containers/Members/reducers';

const rootReducer: Reducer<IRootState> = combineReducers({
  cds: CdsReducers,
  members: MembersReducers,
});

// For Redux devtool in Chrome.
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(rootReducer, composeEnhancers(middleware));
