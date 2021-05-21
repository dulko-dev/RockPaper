import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });
  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [quizScore, setQuizScore] = useState(0);


  return (
    <AppContext.Provider
      value={{
        hidden: [isHidden, setIsHidden],
        scoreBoard: [score, setScore],
        name: [userName, setUserName],
        question: [questions, setQuestions],
        quizResult: [quizScore, setQuizScore],
   
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
