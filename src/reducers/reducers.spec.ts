import { todo, recorder } from "./index";
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CLEAR_TODOS
} from "../actions/todo/contants";
import { Todo, TodoState, RecorderState } from "../models/index";
import { STORE_ACTION, CLEAR_RECORDING } from "../actions/recorder/constants";
import { CreateTodoAction } from "../actions/todo/types";

// Getting hit by this bug so comparisons are more verbose: https://github.com/facebook/jest/issues/9531

describe("todo reducer", () => {
  test("returns initial state on undefined", () => {
    const result = todo(undefined, { type: "@@INIT" } as any);

    expect(result).toEqual({ data: [], idCounter: 0 });
  });

  test("handles ADD_TODO", () => {
    const initialState: TodoState = { data: [], idCounter: 0 };

    const result = todo(initialState, {
      type: CREATE_TODO,
      description: "desc",
      name: "name"
    });

    expect(result.idCounter).toBe(1);
    expect(result.data.length).toBe(1);
    expect(result.data[0].id).toBe(0);
    expect(result.data[0].description).toBe("desc");
    expect(result.data[0].name).toBe("name");
  });

  test("handles UPDATE_TODO", () => {
    const oldTodo = new Todo(1, "name", "desc", new Date());
    const initialState: TodoState = {
      data: [oldTodo],
      idCounter: 2
    };

    const result = todo(initialState, {
      type: UPDATE_TODO,
      id: oldTodo.id,
      description: "better desc",
      name: "better name"
    });

    expect(result.idCounter).toBe(2);
    expect(result.data.length).toBe(1);
    expect(result.data[0].id).toBe(oldTodo.id);
    expect(result.data[0].creationDate).toBe(oldTodo.creationDate);
    expect(result.data[0].description).toBe("better desc");
    expect(result.data[0].name).toBe("better name");
  });

  test("handles DELETE_TODO", () => {
    const oldTodo = new Todo(1, "name", "desc", new Date());
    const initialState: TodoState = {
      data: [oldTodo],
      idCounter: 2
    };

    const result = todo(initialState, {
      type: DELETE_TODO,
      id: oldTodo.id
    });

    expect(result.idCounter).toBe(2);
    expect(result.data.length).toBe(0);
  });

  test("handles CLEAR_TODO", () => {
    const oldTodo = new Todo(1, "name", "desc", new Date());
    const initialState: TodoState = {
      data: [oldTodo],
      idCounter: 2
    };

    const result = todo(initialState, {
      type: CLEAR_TODOS
    });

    expect(result.idCounter).toBe(0);
    expect(result.data.length).toBe(0);
  });
});

describe("recorder reducer", () => {
  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
  const removeItemSpy = jest.spyOn(Storage.prototype, "removeItem");

  beforeEach(() => {
    setItemSpy.mockClear();
    removeItemSpy.mockClear();
  });

  test("returns initial state on undefined", () => {
    const result = recorder(undefined, { type: "@@INIT" } as any);

    expect(result).toEqual({ recording: false, playing: false, actions: [] });
  });

  test("handles STORE_RECORDING when recording", () => {
    const initialState: RecorderState = {
      recording: true,
      playing: false,
      actions: []
    };

    const todoAction: CreateTodoAction = {
      type: CREATE_TODO,
      description: "desc",
      name: "name"
    };

    const result = recorder(initialState, {
      type: STORE_ACTION,
      todoAction
    });

    expect(result).toEqual({
      recording: true,
      playing: false,
      actions: [todoAction]
    });

    expect(setItemSpy.mock.calls.length).toBe(1);
    expect(setItemSpy.mock.calls[0]).toEqual([
      "recordedActions",
      JSON.stringify([todoAction])
    ]);
  });

  test("handles STORE_RECORDING when not recording", () => {
    const initialState: RecorderState = {
      recording: false,
      playing: false,
      actions: []
    };

    const todoAction: CreateTodoAction = {
      type: CREATE_TODO,
      description: "desc",
      name: "name"
    };

    const result = recorder(initialState, {
      type: STORE_ACTION,
      todoAction
    });

    expect(result).toEqual({
      recording: false,
      playing: false,
      actions: []
    });

    expect(setItemSpy.mock.calls.length).toBe(0);
  });

  test("handles CLEAR_RECORDING", () => {
    const initialState: RecorderState = {
      recording: false,
      playing: true,
      actions: [
        {
          type: CREATE_TODO,
          description: "desc",
          name: "name"
        }
      ]
    };

    const result = recorder(initialState, {
      type: CLEAR_RECORDING
    });

    expect(result).toEqual({
      recording: false,
      playing: false,
      actions: []
    });

    expect(removeItemSpy.mock.calls.length).toBe(1);
    expect(removeItemSpy.mock.calls[0]).toEqual(["recordedActions"]);
  });
});
