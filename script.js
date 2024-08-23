let humanScore = 0,
  computerScore = 0,
  draws = 0;

let rockButton = document.getElementById("rock-box");
let paperButton = document.getElementById("paper-box");
let scissorsButton = document.getElementById("scissors-box");
let result = document.getElementById("result");
let computerScoreBox = document.getElementById("computerScore");
let playerScoreBox = document.getElementById("playerScore");
let container = document.getElementById("container");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let choice;
  switch (random) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
    default:
      alert("there is something wrong with the computer choice.");
      getComputerChoice();
  }
  return choice;
}

function getChoice() {
  let choice;
  rockButton.addEventListener("click", () => {
    checkResult("Rock");
  });
  paperButton.addEventListener("click", () => {
    checkResult("Paper");
  });
  scissorsButton.addEventListener("click", () => {
    checkResult("Scissors");
  });
}

function checkResult(choice) {
  let computerChoice = getComputerChoice();
  let userChoice = choice;

  if (computerChoice == userChoice) {
    result.textContent =
      "The opponent chose " + computerChoice + "\n It's a Draw !";
    draws++;
  } else if (computerChoice == "Rock" && userChoice == "Paper") {
    result.textContent =
      "The opponent chose " +
      computerChoice +
      "\n congratulation, You've won !";
    humanScore++;
  } else if (computerChoice == "Rock" && userChoice == "Scissors") {
    result.textContent =
      "The opponent chose " + computerChoice + "\n You've lost !";
    computerScore++;
  } else if (computerChoice == "Paper" && userChoice == "Scissors") {
    result.textContent =
      "The opponent chose " +
      computerChoice +
      "\n congratulation, You've won !";
    humanScore++;
  } else if (computerChoice == "Paper" && userChoice == "Rock") {
    result.textContent =
      "The opponent chose " + computerChoice + "\n You've lost !";
    computerScore++;
  } else if (computerChoice == "scissor" && userChoice == "Rock") {
    result.textContent =
      "The opponent chose " +
      computerChoice +
      "\n congratulation, You've won !";
    humanScore++;
  } else if (computerChoice == "scissor" && userChoice == "Paper") {
    result.textContent =
      "The opponent chose " + computerChoice + "\n You've lost !";
    computerScore++;
  }

  playerScoreBox.innerText = humanScore;
  computerScoreBox.innerText = computerScore;

  if (humanScore == 3 || computerScore == 3 || draws == 3) {
    totalResult();
    return;
  }
}

function totalResult() {
  if (humanScore == 3) {
    result.textContent =
      "THE GAME HAS ENDED !!! " +
      "\n You've WON. " +
      humanScore +
      " to " +
      computerScore +
      " with " +
      draws +
      "draws";
  } else if (computerScore == 3) {
    result.textContent =
      "THE GAME HAS ENDED !!! " +
      "\n You've LOST. " +
      computerScore +
      " to " +
      humanScore +
      " with " +
      draws +
      "draws";
  } else if (draws == 3) {
    result.textContent =
      "THE GAME HAS ENDED !!! " +
      "\n It's a DRAW.  " +
      humanScore +
      " to " +
      computerScore +
      " with " +
      draws +
      "draws";
  }

  let resetButton = document.createElement("button");
  resetButton.setAttribute("id", "resetButton");
  resetButton.textContent = "Reset Game";
  container.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  draws = 0;
  result.textContent = "";
  playerScoreBox.innerText = humanScore;
  computerScoreBox.innerText = computerScore;
  container.removeChild(resetButton);
}

getChoice();
