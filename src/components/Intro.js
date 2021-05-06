import React, { useContext } from "react";
import { AppContext } from "./AppContex";

function Intro() {
  const [isHidden, setIsHidden] = useContext(AppContext);

  return (
    <>
      {isHidden ? (
        ""
      ) : (
        <div className="intro">
          <h2>Rock Paper and Scissors</h2>
          <button className="intro__btn" onClick={() => setIsHidden(true)}>
            Let's play
          </button>
        </div>
      )}
    </>
  );
}

export default Intro;
