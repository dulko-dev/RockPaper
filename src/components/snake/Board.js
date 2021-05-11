import React from "react";
import { CELL, COL, ROW } from "./const";

function Board() {
  const boardGame = [];

  for (let col = 0; col < COL; col++) {
    for (let row = 0; row < ROW; row++) {
      boardGame.push(<div className="cell" key={Math.random() * 1000}></div>);
    }
  }

  return (
    <div className="board" style={{ width: COL * CELL, height: ROW * CELL }}>
      {boardGame}
    </div>
  );
}

export default Board;
