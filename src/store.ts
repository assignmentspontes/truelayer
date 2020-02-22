import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { todo, recorder } from "./reducers";
import { recorder as recorderMiddleware } from "./middlewares";

const rootReducer = combineReducers({ todo, recorder });

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(recorderMiddleware()))
);
