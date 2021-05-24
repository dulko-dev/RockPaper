import React, { forwardRef } from "react";
import { images } from "./imageOfCards";

function Cards(_, ref) {
  const { seconds, minutes } = ref;

  let activeCard = "";
  let coupleCards = [];
  let gameResult = 0;

  const handleClick = (e) => {
    activeCard = e.target;
    activeCard.classList.remove("blank");
    if (activeCard === coupleCards[0]) return;
    if (coupleCards.length === 0) {
      coupleCards[0] = activeCard;
      return;
    } else {
      coupleCards[1] = activeCard;
      const blockEvent = document.querySelector(".cards__wrapped");
      blockEvent.classList.add("block");
      checkCard(coupleCards[0], coupleCards[1]);
    }
  };

  const checkCard = (card1, card2) => {
    setTimeout(() => {
      if (card1.name === card2.name) {
        coupleCards.forEach((card) => card.classList.add("winner", "block"));
        gameResult++;
        checkGameWinner();
      } else {
        coupleCards.forEach((card) => card.classList.add("blank"));
      }
      activeCard = "";
      coupleCards = [];
      const blockEvent = document.querySelector(".cards__wrapped");
      blockEvent.classList.remove("block");
    }, 500);
  };

  const checkGameWinner = () => {
    if (gameResult === images.length / 2) {
      alert(
        `Congratulation, your time is ${minutes.current.innerText} minutes and ${seconds.current.innerText} seconds`
      );
      window.location.href = window.location.href;
      return;
    }
  };

  return (
    <div className="cards">
      <div className="cards__wrapped block">
        {images
          .sort(() => Math.random() - 0.5)
          .map((card) => (
            <img
              key={Math.random() * 1000}
              style={{ backgroundImage: `url(${card.pic})` }}
              className="card blank"
              name={card.name}
              check="false"
              onClick={handleClick}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}

export default forwardRef(Cards);
