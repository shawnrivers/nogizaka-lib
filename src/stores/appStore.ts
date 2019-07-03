import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { IRootState } from './state';
import { CdsReducers } from 'containers/Cds/reducers';
import { MembersReducers } from 'containers/Members/reducers';
import { SongsReducers } from 'containers/Songs/reducers';

const rootReducer: Reducer<IRootState> = combineReducers({
  cds: CdsReducers,
  members: MembersReducers,
  songs: SongsReducers,
});

// For Redux devtool in Chrome.
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(rootReducer, composeEnhancers(middleware));
