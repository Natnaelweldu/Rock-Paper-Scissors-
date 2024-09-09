let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let computerChoice;
let playerChoice;
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    playerChoice = e.target.textContent;
    changeGameBoard();
  });
});

function getComputerChoice() {
  let computerChoice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function getOutcome(player, computer) {
  if (computer === player) return "Game draw.";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    return "player wins";
  } else {
    computerScore++;
    return "Computer wins.";
  }
}

function changeGameBoard() {
  const resultBoard = document.querySelector("#result");
  const computerScoreBoard = document.querySelector(".computer #score");
  const playerScoreBoard = document.querySelector(".player #score");
  resultBoard.textContent = getOutcome(playerChoice, computerChoice);
  computerScoreBoard.textContent = computerScore;
  playerScoreBoard.textContent = playerScore;
}
