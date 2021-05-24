import React from "react";
import { Link } from "react-router-dom";
import spock from "../assets/bg/rockPaper-bg.png";
import simpsons from "../assets/bg/simpsons-bg.png";
import quiz from "../assets/bg/quiz-bg.png";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Link to="/rock" className="app__rock app__all">
          <img src={spock} style={{ width: "100%" }} />
        </Link>
        <Link to="/memory" className="app__memory app__all">
          <img src={simpsons} style={{ width: "100%" }} />
        </Link>
        <Link to="/quiz" className="app__quiz app__all">
          <img src={quiz} style={{ width: "100%" }} />
        </Link>
      </div>
    </div>
  );
}

export default App;
