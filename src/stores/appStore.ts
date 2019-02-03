import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Reducer
} from "redux";
import thunk from "redux-thunk";
import { cdsReducer } from "../containers/CdsContainer/store/reducers";
import { IRootState } from "./state";
import promise from "redux-promise-middleware";

const rootReducer: Reducer<IRootState> = combineReducers({
  cds: cdsReducer
});

// For Redux devtool in Chrome.
const composeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
);
