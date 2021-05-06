import React, { useContext } from "react";
import spock from "../assets/spock.png";
import lizard from "../assets/lizard.png";
import { AppContext } from "./AppContex";

function Game() {
  const [isHidden] = useContext(AppContext);
  return (
    <>
      {isHidden && (
        <div className="game">
          <h2>Choose an option</h2>
          <div className="game__tools">
            <div className="game__img">
              <img style={{ width: "200px" }} src={spock} alt="player" />
              <img style={{ width: "200px" }} src={lizard} alt="computer" />
            </div>
            <div className="game__options">
              <button className="rock">rock</button>
              <button className="paper">paper</button>
              <button className="scissors">scissors</button>
              <button className="lizard">lizard</button>
              <button className="spock">spock</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
