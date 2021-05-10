import React from "react";
import { images } from "./imageOfCards";

function Cards() {
  let pairs = [];
  console.log(pairs);
  const handleClick = (e) => {
    let card = e.target;
    console.log(card);
    if (card.getAttribute("check") === "found") {
      return;
    }

    if (card !== pairs[0]) {
      findCard(card);
      pairs.push(card);
    } else {
      findCard(card);
      pairs = [];
    }

    if (pairs.length > 2) {
      if (!checkName(pairs[0], pairs[1])) {
        findCard(pairs[0]);
        findCard(pairs[1]);
        pairs.shift();
        pairs.shift();
      } else {
        pairs.shift();
        pairs.shift();
      }
    }
  };

  let allBackCoverPic = document.getElementsByClassName("blank");
  if (allBackCoverPic.length < 1) {
    console.log(allBackCoverPic);
    let resetGame = document.querySelectorAll(".card");
    for (let i = 0; i < resetGame.length; i++) {
      resetGame[i].classList.add("blank");
      resetGame[i].setAttribute("check", "false");
      pairs = [];
    }
  }

  const findCard = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("blank");
    }
  };

  const checkName = (card1, card2) => {
    if (card1.getAttribute("name") === card2.getAttribute("name")) {
      card1.setAttribute("check", "found");
      card2.setAttribute("check", "found");
      return true;
    }
    return false;
  };

  return (
    <div className="cards">
    
        <div className="cards__wrapped">
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
              />
            ))}
        </div>
 
    </div>
  );
}

export default Cards;
