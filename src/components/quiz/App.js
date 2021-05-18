import React from "react";
import QuizSetup from "./QuizSetup";
import blackboard from "../../assets/quiz/blackboard.png";

function app() {
  return (
    <div className="quiz">
      <div className="quiz__container">
        <h1 className="quiz__title">Quiz for Everyone</h1>
        <div className="quiz__setup">
          <QuizSetup className="quiz__form" />
          <div className="quiz__image">
            <img src={blackboard} alt="blackboard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;
