import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models";
import { toggleRecording, clearRecording } from "../actions/recorder";
import { RecorderButtons } from "./RecorderButtons";
import { clearTodos } from "../actions/todo";

export const Recorders: React.FC = () => {
  const isRecording = useSelector((state: State) => state.recorder.recording);
  const todoActions = useSelector((state: State) => state.recorder.actions);
  const dispatch = useDispatch();

  const onPlayRecording = () => {
    if (isRecording || todoActions.length === 0) return;

    dispatch(clearTodos());

    const editableTodoActions = Array.from(todoActions);

    const intervalId = setInterval(() => {
      if (editableTodoActions.length === 0) {
        clearInterval(intervalId);
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
        onToggleRecording={() => dispatch(toggleRecording())}
        onClearRecording={() => dispatch(clearRecording())}
        onPlayRecording={onPlayRecording}
      ></RecorderButtons>
    </div>
  );
};
