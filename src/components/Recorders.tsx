import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models";
import {
  toggleRecording,
  clearRecording,
  playRecording
} from "../actions/recorder";
import { RecorderButtons } from "./RecorderButtons";
import { clearTodos, TodoAction } from "../actions/todo";

export const Recorders: React.FC = () => {
  const isRecording = useSelector((state: State) => state.recorder.recording);
  const isPlaying = useSelector((state: State) => state.recorder.playing);
  const todoActions = useSelector((state: State) => state.recorder.actions);
  const dispatch = useDispatch();

  const onPlayRecording = () => {
    if (isRecording || todoActions.length === 0) return;

    dispatch(clearTodos());
    dispatch(playRecording());

    replayActions(todoActions);
  };

  const replayActions = (todoActions: TodoAction[]) => {
    const editableTodoActions = Array.from(todoActions);

    const interval = setInterval(() => {
      if (editableTodoActions.length === 0) {
        clearInterval(interval);
        dispatch(clearRecording());
        return;
      }

      const todoAction = editableTodoActions.shift();

      dispatch(todoAction);
    }, 1000);
  };

  return (
    <div>
      <RecorderButtons
        recording={isRecording}
        playing={isPlaying}
        hasRecords={todoActions.length > 0}
        onToggleRecording={() => dispatch(toggleRecording())}
        onClearRecording={() => dispatch(clearRecording())}
        onPlayRecording={onPlayRecording}
      ></RecorderButtons>
    </div>
  );
};
