import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todo } from "./reducers";
import { recorder } from "./middlewares";

const rootReducer = combineReducers({ todo });

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(recorder()))
);
