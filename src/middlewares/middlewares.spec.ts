import { recorder } from "./index";
import { TodoAction } from "../actions/todo/types";
import { CREATE_TODO } from "../actions/todo/contants";
import { STORE_ACTION, TOGGLE_RECORDING } from "../actions/recorder/constants";
import { RecorderAction } from "../actions/recorder/types";

const createRecorderMiddleware = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = (action: any) => recorder()(store)(next)(action);
  return { store, next, invoke };
};

test("dispatches Todo actions", () => {
  const { store, next, invoke } = createRecorderMiddleware();

  const action: TodoAction = {
    type: CREATE_TODO,
    name: "name",
    description: "desc"
  };

  invoke(action);

  expect(store.dispatch).toHaveBeenCalledWith({
    type: STORE_ACTION,
    todoAction: action
  });

  expect(next).toHaveBeenCalledWith(action);
});

test("does not dispatch when not a Todo action", () => {
  const { store, next, invoke } = createRecorderMiddleware();

  const action: RecorderAction = {
    type: TOGGLE_RECORDING
  };

  invoke(action);

  expect(store.dispatch).not.toHaveBeenCalled();

  expect(next).toHaveBeenCalledWith(action);
});
