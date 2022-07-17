import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import "./App.css";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <div className="component">
          <TrackList />{" "}
        </div>
        <div className="component">
          <Controller />{" "}
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
