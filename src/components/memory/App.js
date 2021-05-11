import React from "react";
import Cards from "./Cards";

function App() {
  const startGame = () => {
    let start = document.querySelectorAll(".blank");
    let btn = document.querySelector(".memory__btn");
    const unblock = document.querySelector(".block");
    unblock.classList.remove("block");

    start.forEach((card) => {
      card.classList.remove("blank");
    });

    setTimeout(() => {
      start.forEach((card) => {
        card.classList.add("blank");
      });
    }, 2000);

    btn.setAttribute("disabled", "");
  };

  return (
    <div className="memory">
      <h2>Memory Card</h2>
      <button className="memory__btn" onClick={startGame}>
        Start Game
      </button>
      <Cards />
    </div>
  );
}

export default App;
