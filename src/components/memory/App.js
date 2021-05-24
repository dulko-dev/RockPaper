import React, { useRef } from "react";
import Cards from "./Cards";

function App() {
  const secondRef = useRef(0);
  const minuteRef = useRef(0);

  const timeInterval = () => {
    let value = Number(secondRef.current.innerText++);
    if (value === 60) {
      Number(minuteRef.current.innerText++);
      secondRef.current.innerText = 0;
    }
  };

  const startGame = () => {
    const start = document.querySelectorAll(".blank");
    const btn = document.querySelector(".memory__btn");
    const unblock = document.querySelector(".block");
    unblock.classList.remove("block");

    start.forEach((card) => {
      card.classList.remove("blank");
    });

    setTimeout(() => {
      start.forEach((card) => {
        card.classList.add("blank");
      });
      const idInterval = setInterval(timeInterval, 1000);
      return () => {
        clearInterval(idInterval);
      };
    }, 2000);

    btn.setAttribute("disabled", "");
  };

  return (
    <div className="memory">
      <h2>Memory Card</h2>
      <div className="memory__info">
        <div className="memory__timer">
          Timer: <span ref={minuteRef}>{minuteRef.current}</span> :{" "}
          <span ref={secondRef}>{secondRef.current}</span>
        </div>
        <button className="memory__btn" onClick={startGame}>
          Start Game
        </button>
      </div>
      <Cards ref={{ seconds: secondRef, minutes: minuteRef }} />
    </div>
  );
}

export default App;
