const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach(choice => {
  choice.addEventListener('click', () => {
    playRound(choice.value);
  })
})

let playerScore = 0;
let computerScore = 0;

function reset() {
  playerScore = 0;
  computerScore = 0;
}

function playRound(playerSelection) {

  const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
      console.log("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      console.log("You Lose! Paper beats Rock!");
      computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      console.log("You win! Rock beats Scissors!");
      playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      console.log("You Win! Paper beats Rock!");
      playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      console.log("You Lose! Scissors beat Paper!");
      computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      console.log("You Lose! Rock beats Scissors!");
      computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      console.log("You win! Scissors beat paper!");
      playerScore += 1;
    }
  
    if (playerScore == 5 && computerScore < 5) {
      console.log("Congrats! You've won the game!");
      // reset();
    } else if (computerScore == 5 && playerScore < 5) {
      console.log("Aw... You've lost. Better luck next time!");
      // reset();
    }
}
