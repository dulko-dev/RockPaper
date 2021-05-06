import React from "react";

function ScoreBoard() {
  return (
    <div className="scoreBoard">
      <div className="scoreBoard__player">
        <h2>Player</h2>
        <p>0</p>
      </div>
      <div className="scoreBoard__computer">
        <h2>Computer</h2>
        <p>0</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
