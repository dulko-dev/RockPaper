import React, { useRef } from "react";
import Cards from "./Cards";
import { useHistory } from "react-router-dom";

function App() {
  const secondRef = useRef(0);
  const minuteRef = useRef(0);
  const history = useHistory();

  const timeInterval = () => {
    let value = secondRef.current && Number(secondRef.current.innerText++);
    if (value === 60) {
      Number(minuteRef.current.innerText++);
      secondRef.current.innerText = 0;
    }
  };

  const startGame = () => {
    const start = document.querySelectorAll(".blank");
    const btn = document.querySelector(".memory__btn");
    const unblock = document.querySelector(".block");

    start.forEach((card) => {
      card.classList.remove("blank");
    });

    setTimeout(() => {
      start.forEach((card) => {
        card.classList.add("blank");
        unblock.classList.remove("block");
      });
      const idInterval = setInterval(timeInterval, 1000);
      return () => {
        clearInterval(idInterval);
      };
    }, 2500);

    btn.setAttribute("disabled", "");
  };

  const backMemory = () => {
    history.push("/");
  };

  return (
    <div className="memory">
      <div className="memory__container">
        <button onClick={backMemory} className="memory__back">
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </button>
        <h2>Memory Card</h2>
        <div className="memory__info">
          <div className="memory__timer">
            Timer <span ref={minuteRef}>{minuteRef.current}</span> :{" "}
            <span ref={secondRef}>{secondRef.current}</span>
          </div>
          <button className="memory__btn" onClick={startGame}>
            Start Game
          </button>
        </div>
        <Cards ref={{ seconds: secondRef, minutes: minuteRef }} />
      </div>
    </div>
  );
}

export default App;
