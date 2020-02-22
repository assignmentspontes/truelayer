import React from "react";

export const RecorderButtons: React.FC<{
  recording: boolean;
  onToggleRecording: () => void;
  onClearRecording: () => void;
}> = ({ recording, onToggleRecording, onClearRecording }) => {
  return (
    <div>
      <button onClick={onToggleRecording}>
        {recording ? "Stop recording" : "Record"}
      </button>
      <button onClick={onClearRecording}>Clear Recording</button>
    </div>
  );
};
