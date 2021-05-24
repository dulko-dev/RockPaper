import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import QuizSetup from "./QuizSetup";
import Test from "./Test";
import blackboard from "../../assets/quiz/blackboard.png";
import QuizNav from "./QuizNav";

function App() {
  const [hidden] = useState(false);
  const history = useHistory();
  
  const backQuiz = () => {
    history.push("/");
  };

  return (
    <div className="quiz">
      <div className="quiz__container">
        <button className="quiz__back" onClick={backQuiz}>
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </button>
        <QuizNav />
        <div className="quiz__setup">
          <QuizSetup className="quiz__form" />
          {hidden && <Test />}
          <div className="quiz__image">
            <img src={blackboard} alt="blackboard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
