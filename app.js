const game = () => {
  let scorePlayer = 0;
  let scoreComp = 0;

  const setName = () => {
    const name = document.querySelector(".name-btn");
    const player = document.querySelector(".player-title")

    name.addEventListener('click', () => {
        player.innerHTML = '<input type="text"/>';
        
    })

  };
  setName();
  const letsPlay = () => {
    const introBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const game = document.querySelector(".game");

    introBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      game.classList.remove("fadeOut");
    });
  };

  const play = () => {
    const options = document.querySelectorAll(".options button");
    const computerPossible = ["rock", "paper", "scissors"];
    const imagePlayer = document.querySelector(".palm-user");
    const imageComputer = document.querySelector(".palm-computer");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerChoice = Math.floor(Math.random() * 3);
        const computerRender = computerPossible[computerChoice];

        imagePlayer.src = `./assets/${this.textContent}.webp`;
        imageComputer.src = `./assets/${computerRender}.webp`;

        compareChoice(computerRender, option.textContent);
        updateScore();
      });
    });
  };

  const updateScore = () => {
    let playerScore = document.querySelector(".player-profile p");
    let computerScore = document.querySelector(".computer-profile p");
    computerScore.textContent = scoreComp;
    playerScore.textContent = scorePlayer;
  };

  const compareChoice = (computerRender, playerRender) => {
    const winner = document.querySelector(".winner");

    if (playerRender === computerRender) {
      winner.textContent = "it is a tie";
      return;
    }

    if (playerRender === "rock") {
      if (computerRender === "scissors") {
        winner.textContent = "player win";
        scorePlayer++;
        return;
      } else {
        winner.textContent = "computer win";
        scoreComp++;
        return;
      }
    }
    if (playerRender === "paper") {
      if (computerRender === "scissors") {
        winner.textContent = "computer win";
        scoreComp++;
        return;
      } else {
        winner.textContent = "player win";
        scorePlayer++;

        return;
      }
    }
    if (playerRender === "scissors") {
      if (computerRender === "rock") {
        winner.textContent = "computer win";
        scoreComp++;
        return;
      } else {
        winner.textContent = "player win";
        scorePlayer++;
        return;
      }
    }
  };

  letsPlay();
  play();
};
game();
