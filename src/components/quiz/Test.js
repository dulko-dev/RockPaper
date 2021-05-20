import React, { useState, useContext, useEffect } from "react";
import QuizNav from "./QuizNav";
import { AppContext } from "../AppContex";

function Test() {
  const { quizResult } = useContext(AppContext);
  const [quizScore, setQuizScore] = quizResult;
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const getUserName = JSON.parse(localStorage.getItem("user"));
  const getCategory = JSON.parse(localStorage.getItem("question"));

  console.log(getCategory);
  const quizCategory = getCategory[0].category;
  const quizDifficulty = getCategory[0].difficulty;
  const question = getCategory[questionNumber].question;
  const questionAnswers = getCategory[questionNumber].incorrect_answers;
  const correctAnswer = getCategory[questionNumber].correct_answer;

  useEffect(() => {
    let arrAns = [...questionAnswers,correctAnswer];
    setQuizAnswer(arrAns.sort(() => Math.random() - 0.5));
  }, [question]);

  console.log(quizAnswer);

  const changeQuestion = () => {
    if (questionNumber >= 9) {
      alert("game is over");
      return;
    }
    setQuestionNumber(questionNumber + 1);
    setQuizAnswer([]);
  };

  return (
    <div className="test">
      <QuizNav />
      <div className="test__configure">
        <div className="username">Welcome {getUserName} </div>
        <div className="records">
          <p>Category: {quizCategory}</p>
          <p>Diffuculty: {quizDifficulty}</p>
          <p>score: {quizScore}</p>
        </div>
      </div>
      <div className="test__table">
        <p>Question: {question}</p>
        {quizAnswer.map((answer) => (
          <p key={answer}>{answer}</p>
        ))}
        <button onClick={changeQuestion}>Next</button>
      </div>
    </div>
  );
}

export default Test;
