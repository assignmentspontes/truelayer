import React from "react";

export const Recorder: React.FC<{
  recording: boolean;
  onToggleRecording: () => void;
}> = ({ recording, onToggleRecording }) => {
  return (
    <button onClick={onToggleRecording}>
      {recording ? "Stop recording" : "Record"}
    </button>
  );
};
