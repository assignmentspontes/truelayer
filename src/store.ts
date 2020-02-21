import { createStore, combineReducers } from "redux";
import { todo } from "./reducers";

const rootReducer = combineReducers({ todo });

export default createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
