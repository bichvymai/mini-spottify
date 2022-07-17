import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Controller() {
  const player = useMusicPlayer();

  return (
    <div>
      <button onClick={player.playPreviousTrack}>Previous</button>
      <button onClick={player.togglePlay}>Play</button>
      <button onClick={player.playNextTrack}>Next</button>
    </div>
  );
}

export default Controller;
