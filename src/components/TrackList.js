import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPaying } = useMusicPlayer();

  return (
    <div className="track-list">
      <div className="current-song">{currentTrackName}</div>

      {trackList.map((track, index) => (
        <div className="song-title">{track.name}</div>
      ))}
    </div>
  );
}

export default TrackList;
