import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models";
import { toggleRecording, clearRecording } from "../actions/recorder";
import { RecorderButtons } from "./RecorderButtons";

export const Recorders: React.FC = () => {
  const isRecording = useSelector((state: State) => state.recorder.recording);
  const dispatch = useDispatch();

  return (
    <div>
      <RecorderButtons
        recording={isRecording}
        onToggleRecording={() => dispatch(toggleRecording())}
        onClearRecording={() => dispatch(clearRecording())}
      ></RecorderButtons>
    </div>
  );
};
