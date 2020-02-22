import React from "react";

export const RecorderButtons: React.FC<{
  recording: boolean;
  playing: boolean;
  hasRecords: boolean;
  onToggleRecording: () => void;
  onClearRecording: () => void;
  onPlayRecording: () => void;
}> = ({
  recording,
  playing,
  hasRecords,
  onToggleRecording,
  onClearRecording,
  onPlayRecording
}) => {
  return (
    <div>
      <button onClick={onToggleRecording} disabled={playing}>
        {recording ? "Stop recording" : "Record"}
      </button>
      <button onClick={onClearRecording} disabled={playing || !hasRecords}>
        Clear Recording
      </button>
      <button
        onClick={onPlayRecording}
        disabled={playing || !hasRecords || recording}
      >
        Play Recording
      </button>
    </div>
  );
};
