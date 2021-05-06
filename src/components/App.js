import React from "react";
import ScoreBoard from "./ScoreBoard";
import Intro from "./Intro";
import Game from "./Game";

function App() {
  return (
    <div className="app">
      <div className="app__wrapped">
        <ScoreBoard />
        <Intro />
        <Game />
      </div>
    </div>
  );
}

export default App;
