import React, { useContext } from "react";
import { AppContext } from "../AppContex";
import QuizNav from "./QuizNav";

function Test() {
  const { name, question } = useContext(AppContext);
  const [userName] = name;
  const [questions] = question;
  console.log(questions);

  return (
    <div className='test'>
        <QuizNav />
      <div style={{ fontSize: "100px" }}>{userName}</div>;
      {questions.results.map((quest) => (
        <p>{quest.question}</p>
      ))}
    </div>
  );
}

export default Test;
