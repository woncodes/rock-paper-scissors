const computerChoices = ["rock", "paper", "scissors"];

const computerSelection = getComputerChoice();

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beat Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beat paper!";
  }
}

console.log(playRound(playerSelection, computerSelection));