import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { TodoAction } from "../actions/todo";
import * as TodoConstants from "../actions/todo/contants";

export function recorder() {
  const recorderMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {
    console.log("will dispatch", action);

    console.log(isTodoAction(action));

    return next(action);
  };

  return recorderMiddleware;
}

function isTodoAction(action: any): action is TodoAction {
  return action.type && Object.values(TodoConstants).includes(action.type);
}
