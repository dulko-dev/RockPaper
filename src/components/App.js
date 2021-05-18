import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/rock">Rock Paper Scissors</Link>
      </div>

      <div>
        <Link to="/memory">Memory Game</Link>
      </div>

      <div>
        <Link to="/quiz">Quiz</Link>
      </div>
    </>
  );
}

export default App;
