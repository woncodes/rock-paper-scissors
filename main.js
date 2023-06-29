const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach(choice => {
  choice.addEventListener('click', () => {
    playRound(choice.value);
    displayScore();
  })
})

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
      resultDisplay.textContent = "You Lose! Paper beats Rock!";
      computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      resultDisplay.textContent = "You win! Rock beats Scissors!";
      playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      resultDisplay.textContent = "You Win! Paper beats Rock!";
      playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      resultDisplay.textContent = "You Lose! Scissors beat Paper!";
      computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      resultDisplay.textContent = "You Lose! Rock beats Scissors!";
      computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      resultDisplay.textContent = "You win! Scissors beat paper!";
      playerScore += 1;
    }
  
    if (playerScore == 5 && computerScore < 5) {
      resultDisplay.textContent = "Congrats! You've won the game!";
    } else if (computerScore == 5 && playerScore < 5) {
      resultDisplay.textContent = "Aw... You've lost. Better luck next time!";
    }
}

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result-container");