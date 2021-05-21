import React, { useState } from "react";
import QuizSetup from "./QuizSetup";
import Test from "./Test";
import blackboard from "../../assets/quiz/blackboard.png";
import QuizNav from "./QuizNav";



function App() {
  const [hidden] = useState(false);
  return (
    <div className="quiz">
      <div className="quiz__container">
       <QuizNav />
        <div className="quiz__setup">
          <QuizSetup className="quiz__form"/>
          {hidden && <Test/>}
          <div className="quiz__image">
            <img src={blackboard} alt="blackboard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
