import React, { useState } from "react";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState([]);
  const [snake, setSnake] = useState([]);
  const [direct, setDirect] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  return (
    <div className="snake">
      <Board />
    </div>
  );
}

export default App;
