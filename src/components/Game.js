import React, { useContext, useEffect, useState } from "react";
import emptyPic from "../assets/emptyPic.png";
import { AppContext } from "./AppContex";

function Game() {
  const { hidden, scoreBoard } = useContext(AppContext);
  const [isHidden] = hidden;
  const [score, setScore] = scoreBoard;

  const [isDisabled, setIsDisabled] = useState(false);
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [info, setInfo] = useState("");
  const [round, setRound] = useState(1);
  const [readyToGo, setReadyToGo] = useState(true);

  useEffect(() => {
    const findOption = (player, computer) => {
      if (player === computer) {
        setInfo("draw");
        return;
      }

      if (player === "rock") {
        if (computer === "paper") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else if (computer === "scissors") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else if (computer === "lizard") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        }
        return;
      }

      if (player === "paper") {
        if (computer === "rock") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else if (computer === "scissors") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else if (computer === "lizard") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        }
        return;
      }

      if (player === "scissors") {
        if (computer === "rock") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else if (computer === "paper") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else if (computer === "lizard") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else {
          setInfo("player win");
          setScore({ ...score, computer: score.computer + 1 });
        }
        return;
      }

      if (player === "lizard") {
        if (computer === "rock") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else if (computer === "paper") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else if (computer === "scissors") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        }
        return;
      }

      if (player === "spock") {
        if (computer === "rock") {
          setInfo("player win");
          setScore({ ...score, player: score.player + 1 });
        } else if (computer === "paper") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else if (computer === "lizard") {
          setInfo("computer win");
          setScore({ ...score, computer: score.computer + 1 });
        } else {
          setInfo("player win");
          setScore({ ...score, computer: score.computer + 1 });
        }
        return;
      }
    };
    findOption(playerOption, computerOption);
  }, [round]);

  useEffect(() => {
    setTimeout(() => {
      setReadyToGo(true);
      setIsDisabled(false);
    }, 1000);
  }, [round]);

  const changeImg = (e) => {
    setPlayerOption(e.target.name);
    const computerArray = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomOption = Math.floor(Math.random() * 5);
    setComputerOption(computerArray[randomOption]);
    setReadyToGo(false);
    setIsDisabled(true);
    setRound(round + 1);
  };

  return (
    <div
      className="game"
      style={
        isHidden
          ? { opacity: "1", pointerEvents: "all" }
          : { opacity: "0", pointerEvents: "none" }
      }
    >
      <h3>Round {round}</h3>
      <h2>{readyToGo ? "select an option" : info}</h2>
      <div className="game__tools">
        <div className="game__img">
          {readyToGo ? (
            <>
              <img
                src={emptyPic}
                alt="empty"
                style={{ width: "200px", paddingRight: "20px" }}
              />
              <img src={emptyPic} alt="empty" style={{ width: "200px" }} />
            </>
          ) : (
            <>
              <img
                style={{
                  width: "200px",
                  height: "225px",
                  paddingRight: "20px",
                }}
                src={require(`../assets/${playerOption}.png`).default}
                alt="player"
              />
              <img
                style={{ width: "200px", height: "225px" }}
                src={require(`../assets/${computerOption}.png`).default}
                alt="computer"
              />
            </>
          )}
        </div>
        <div
          className="game__options"
          style={
            isDisabled
              ? { opacity: "0", pointerEvents: "none" }
              : { opacity: "1", pointerEvents: "all" }
          }
        >
          <button name="rock" onClick={changeImg}>
            rock
          </button>
          <button name="paper" onClick={changeImg}>
            paper
          </button>
          <button name="scissors" onClick={changeImg}>
            scissors
          </button>
          <button name="lizard" onClick={changeImg}>
            lizard
          </button>
          <button name="spock" onClick={changeImg}>
            spock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
