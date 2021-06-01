import React, { useContext } from "react";
import { AppContext } from "../AppContex";

function Intro() {
  const { hidden } = useContext(AppContext);
  const [isHidden, setIsHidden] = hidden;

  return (
    <div
      className="intro"
      style={
        isHidden
          ? { opacity: "0", display: "none" }
          : { opacity: "1", display: "block" }
      }
    >
      <h2>Rock Paper and Scissors</h2>
      <button className="intro__btn" onClick={() => setIsHidden(true)}>
        Let's play
      </button>
    </div>
  );
}

export default Intro;
