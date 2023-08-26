const winConditions = {
  Piedra: { Tijera: "Win", Papel: "Lose" },
  Papel: { Piedra: "Win", Tijera: "Lose" },
  Tijera: { Papel: "Win", Piedra: "Lose" },
};

playerPath = require("./assets/images/player.webp");
computerPath = require("./assets/images/computer.jpg");
tiePath = require("./assets/images/tie.webp");

const choices = {
    0: "Piedra",
    1: "Papel",
    2: "Tijera",
};

const utileriasGame = () => {
  function choosePath(currentWinner) {
    return currentWinner === "Player"
      ? playerPath
      : currentWinner === "Computer"
      ? computerPath
      : tiePath;
  }

  function checkResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie";
    }
    return winConditions[choices[playerSelection]][choices[computerSelection]];
  }

  function newCurrentWinner(newPlayerWins, newComputerWins) {
    if (newPlayerWins === newComputerWins) {
      return "Tie";
    }
    if (newPlayerWins > newComputerWins) {
      return "Player";
    } else {
      return "Computer";
    }
  }
  return { choosePath, checkResult, newCurrentWinner, choices};
};

export default utileriasGame;
