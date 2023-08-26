import { useState } from "react";
import utileriasGame from "./utileriasGame";

const useGame = () => {
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [lastResult, setLastResult] = useState("");
  const [currentWinner, setCurrentWinner] = useState("Tie");
  const [playerChoice, setPlayerChoice] = useState("nada");
  const [computerChoice, setComputerChoice] = useState("nada");

  const { choosePath, checkResult, newCurrentWinner, choices } = utileriasGame();

  function updateResultStates(result) {
    if (result === "Player") {
      setPlayerWins(playerWins + 1);
    } else if (result === "Computer") {
      setComputerWins(computerWins + 1);
    }
    setLastResult(result);
  }

  function handlePlayerChoice(playerSelection) {
    computerSelection = Math.floor(Math.random() * 3);

    gameResult = checkResult(playerSelection, computerSelection);

    setPlayerChoice(choices[playerSelection]);
    setComputerChoice(choices[computerSelection]);

    newPlayerWins = playerWins;
    newComputerWins = computerWins;

    if (gameResult === "Win") {
      newPlayerWins = newPlayerWins + 1;
      winnerAfterPlay = newCurrentWinner(newPlayerWins, newComputerWins);
      setCurrentWinner(winnerAfterPlay);
      updateResultStates("Player");
    } else if (gameResult === "Lose") {
      newComputerWins = newComputerWins + 1;
      winnerAfterPlay = newCurrentWinner(newPlayerWins, newComputerWins);
      setCurrentWinner(winnerAfterPlay);
      updateResultStates("Computer");
    } else {
      updateResultStates("Tie");
    }
  }

  return {
    choosePath,
    handlePlayerChoice,
    playerWins,
    computerWins,
    lastResult,
    currentWinner,
    playerChoice,
    computerChoice,
  };
};

export default useGame;
