import React, { useContext } from "react";
import ScoreBoard from "./ScoreBoard";
import Intro from "./Intro";
import Game from "./Game";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContex";

function App() {
  const history = useHistory();
  const { scoreBoard, hidden } = useContext(AppContext);
  const [score, setScore] = scoreBoard;
  const [isHidden, setIsHidden] = hidden;

  const backToMain = () => {
    history.push("/");
    setScore({ player: 0, computer: 0 });
    setIsHidden(false);
  };

  return (
    <div className="rockPaper">
      <div className="rockPaper__wrapped">
        <button onClick={backToMain} className="rockPaper__btn">
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </button>
        <ScoreBoard />
        <Intro />
        <Game />
      </div>
    </div>
  );
}

export default App;
