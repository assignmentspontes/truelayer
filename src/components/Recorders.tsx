import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models";
import { toggleRecording } from "../actions/recorder";
import { Recorder } from "./Recorder";

export const Recorders: React.FC = () => {
  const isRecording = useSelector((state: State) => state.recorder.recording);
  const dispatch = useDispatch();

  return (
    <div>
      <Recorder
        recording={isRecording}
        onToggleRecording={() => dispatch(toggleRecording())}
      ></Recorder>
    </div>
  );
};
