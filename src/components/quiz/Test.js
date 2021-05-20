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
    let arrAns = [...questionAnswers, correctAnswer];
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

  const chooseAnswer = (name, e) => {
    const elementName = name;
    const elementSelected = e.target;
    const restElement = document.querySelectorAll(".answer__choose");
    if (elementName === correctAnswer) {
      elementSelected.style.backgroundColor = "green";
      restElement.forEach((element) => {
        element.style.pointerEvents = "none";
      });
      setQuizScore(quizScore + 1);
    } else {
      elementSelected.style.backgroundColor = "red";
      restElement.forEach((element) => {
        element.style.pointerEvents = "none";
      });
    }
  };

  return (
    <div className="test">
      <QuizNav />
      <div className="test__configure">
        <div className="username">
          Welcome <span>{getUserName} </span>
        </div>
        <div className="records">
          <p>
            Category: <span>{quizCategory}</span>
          </p>
          <p>
            Diffuculty: <span> {quizDifficulty}</span>
          </p>
          <p>
            score: <span> {quizScore} </span>
          </p>
        </div>
      </div>
      <div className="test__table">
        <div className="question">Question {questionNumber + 1}</div>
        <p className="question__answers">{question}</p>
        <div className="answer">
          {quizAnswer.map((answer, index) => (
            <p
              className="answer__choose"
              onClick={(e) => chooseAnswer(answer, e)}
              key={index}
            >
              {answer}
            </p>
          ))}
        </div>
        <div className="btn_component">
          <button className="btn_reset">Reset</button>
          <button className="btn_confirm" onClick={changeQuestion}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
