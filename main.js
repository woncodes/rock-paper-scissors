const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

const controller = new AbortController();
const { signal } = controller;

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach(choice => {
  choice.addEventListener('click', () => playRound(choice.value), { signal });
});

let playerScore = 0;
let computerScore = 0;

function displayScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  displayScore();
}

function playRound(playerSelection) {

  const computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    resultDisplay.textContent = "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    resultDisplay.textContent = "負けた!\r\nPaper beats Rock!";
    computerScore += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultDisplay.textContent = "勝った!\r\nRock beats Scissors!";
    playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    resultDisplay.textContent = "勝った!\r\nPaper beats Rock!";
    playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultDisplay.textContent = "負けた!\r\nScissors beat Paper!";
    computerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultDisplay.textContent = "負けた!\r\nRock beats Scissors!";
    computerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultDisplay.textContent = "勝った!\r\nScissors beat paper!";
    playerScore += 1;
  }

  if (playerScore == 5 && computerScore < 5) {
    resultDisplay.textContent = "Congrats! You've won the game!";
    gameEnd();
  } else if (computerScore == 5 && playerScore < 5) {
    resultDisplay.textContent = "Aw... You've lost. Better luck next time!";
    gameEnd();
  }

  displayScore();
}

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result-container");

const header = document.getElementById("header");
header.addEventListener("click", () => {
  window.location.reload();
})

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
  window.location.reload();
})

function gameEnd() {
  controller.abort();

  restartButton.style.display = "block";
}
