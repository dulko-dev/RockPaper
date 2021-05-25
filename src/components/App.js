import React from "react";
import { Link } from "react-router-dom";
import rockPaper from "../assets/bg/rockPaper-bg.png";
import memory from "../assets/bg/memory-bg.png";
import quiz from "../assets/bg/quiz-bg.png";

function App() {
  return (
    <div className="app">
      <h2 className="app__title">Take a chill and play some games</h2>
      <div className="app__container">
        <Link to="/rock" className="app__rock app__all">
          <img src={rockPaper} alt="rock paper scissors game" />
        </Link>
        <Link to="/memory" className="app__memory app__all">
          <img src={memory} alt="memory game" />
        </Link>
        <Link to="/quiz" className="app__quiz app__all">
          <img src={quiz} alt="quiz game" />
        </Link>
      </div>
    </div>
  );
}

export default App;
