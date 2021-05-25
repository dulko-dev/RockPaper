import React, { useState, useContext, useEffect } from "react";
import QuizNav from "./QuizNav";
import { AppContext } from "../AppContex";
import { useHistory } from "react-router-dom";

function Test() {
  const { quizResult, name } = useContext(AppContext);
  const history = useHistory();
  const [quizScore, setQuizScore] = quizResult;
  const [userName, setUserName] = name;
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [giveAnswer, setGiveAnswer] = useState(false);

  const getUserName = JSON.parse(localStorage.getItem("user"));
  const getCategory = JSON.parse(localStorage.getItem("question"));
  const getEmpty = JSON.parse(localStorage.getItem("empty"));

  let quizCategory = [];
  let quizDifficulty;
  let question;
  let questionAnswers = [];
  let correctAnswer;

  if (getCategory) {
    quizCategory = getCategory[0].category;
    quizDifficulty = getCategory[0].difficulty;
    question = getCategory[questionNumber].question;
    questionAnswers = getCategory[questionNumber].incorrect_answers;
    correctAnswer = getCategory[questionNumber].correct_answer;
  }

  useEffect(() => {
    let arrAns = [...questionAnswers, correctAnswer];
    setQuizAnswer(arrAns.sort(() => Math.random() - 0.5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  const changeQuestion = () => {
    if (questionNumber >= 9) {
      alert(
        `${userName} thank you for join it. Your score is ${quizScore}. Congratulations!`
      );
      handleReset();
    }
    if (!giveAnswer) {
      return;
    }
    setQuestionNumber(questionNumber + 1);
    setGiveAnswer(false);
    setQuizAnswer([]);
  };

  const chooseAnswer = (name, e) => {
    setGiveAnswer(true);
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
        const attt = element.dataset["element"];
        if (attt === correctAnswer) {
          element.style.backgroundColor = "green";
        }
      });
    }
  };

  const handleReset = () => {
    localStorage.clear();
    history.push("/quiz");
    setUserName("");
    setQuizScore(0);
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
        {getEmpty ? (
          <>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <p style={{ fontSize: "3em", paddingBottom: "20px" }}>
                Sorry we don't have questions for that category
              </p>
              <button
                type="button"
                onClick={handleReset}
                style={{
                  padding: "20px 50px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "rgb(235, 79, 79)",
                  color: "rgb(226, 226, 226)",
                }}
              >
                Quit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="question">Question {questionNumber + 1}</div>
            <p className="question__answers">{question}</p>
            <div className="answer">
              {quizAnswer.map((answer, index) => (
                <p
                  data-element={answer}
                  className="answer__choose"
                  onClick={(e) => chooseAnswer(answer, e)}
                  key={index}
                >
                  {answer}
                </p>
              ))}
            </div>
            <div className="btn_component">
              <button className="btn_quit" onClick={handleReset}>
                Quit
              </button>
              <button className="btn_confirm" onClick={changeQuestion}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Test;
