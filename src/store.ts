import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ noop: () => {} });

export default createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
