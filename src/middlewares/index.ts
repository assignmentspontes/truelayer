import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { TodoAction } from "../actions/todo";
import * as TodoConstants from "../actions/todo/contants";
import { storeAction } from "../actions/recorder";

export function recorder() {
  const recorderMiddleware: Middleware = (store: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {
    if (isTodoAction(action)) {
      store.dispatch(storeAction(action));
    }

    return next(action);
  };

  return recorderMiddleware;
}

function isTodoAction(action: any): action is TodoAction {
  return action.type && Object.values(TodoConstants).includes(action.type);
}
