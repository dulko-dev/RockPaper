import React, { useContext } from "react";
import { AppContext } from "../AppContex";

function ScoreBoard() {
  const { scoreBoard } = useContext(AppContext);
  const [score] = scoreBoard;

  return (
    <div className="scoreBoard">
      <div className="scoreBoard__player">
        <h2>Player</h2>
        <p>{score.player}</p>
      </div>
      <div className="scoreBoard__computer">
        <h2>Computer</h2>
        <p>{score.computer}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
