const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound() {

  const computerSelection = getComputerChoice();

  const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You Lose! Paper beats Rock!");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock beats Scissors!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You Win! Paper beats Rock!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You Lose! Scissors beat Paper!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You Lose! Rock beats Scissors!");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beat paper!");
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();