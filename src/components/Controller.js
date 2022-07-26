import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Icon from "@mdi/react";
import { mdiPlayCircle } from "@mdi/js";
import { mdiPauseBox } from "@mdi/js";
import { mdiSkipPreviousOutline } from "@mdi/js";
import { mdiSkipNextOutline } from "@mdi/js";

function Controller() {
  const player = useMusicPlayer();
  console.log(player);
  return (
    <div className="controller">
      <div className="icon">
        <Icon
          path={mdiSkipPreviousOutline}
          size={1}
          color="gray"
          onClick={player.playPreviousTrack}
        ></Icon>
      </div>
      <div
        className="icon"
        onClick={() => player.togglePlay(player.currentTrackIndex)}
      >
        {/* <Icon
          path={mdiPlayCircle}
          size={1}
          color="gray"
          onClick={() => player.togglePlay(player.currentTrackIndex)} */}

        {player.isPlaying ? (
          <Icon path={mdiPauseBox} size={1} color="gray"></Icon>
        ) : (
          <Icon path={mdiPlayCircle} size={1} color="gray" />
        )}
        {/* </Icon> */}
      </div>
      <div className="icon">
        <Icon
          path={mdiSkipNextOutline}
          size={1}
          color="gray"
          onClick={player.playNextTrack}
        >
          Next
        </Icon>
      </div>
    </div>
  );
}

export default Controller;
