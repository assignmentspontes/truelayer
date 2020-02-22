import React from "react";

export const RecorderButtons: React.FC<{
  recording: boolean;
  onToggleRecording: () => void;
  onClearRecording: () => void;
  onPlayRecording: () => void;
}> = ({ recording, onToggleRecording, onClearRecording, onPlayRecording }) => {
  return (
    <div>
      <button onClick={onToggleRecording}>
        {recording ? "Stop recording" : "Record"}
      </button>
      <button onClick={onClearRecording}>Clear Recording</button>
      <button onClick={onPlayRecording}>Play Recording</button>
    </div>
  );
};
