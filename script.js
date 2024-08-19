let humanScore = 0,
  computerScore = 0,
  draws = 0;
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
      choice = "Scissor";
      break;
    default:
      alert("there is something wrong with the computer choice.");
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Please enter your choice(r=Rock, p=Paper, s=Scissor): ");
  if (choice !== "r" && choice !== "p" && choice !== "s" && choice != "exit") {
    alert("Please enter a valid option");
    return getHumanChoice();
  }
  return choice.toLowerCase();
}

function checkResult() {
  while (true) {
    let computerChoice = getComputerChoice();
    let userChoice = getHumanChoice();
    if (userChoice == "exit") {
      alert("You've exited the game.");
      return;
    }
    if (computerChoice == "Rock" && userChoice == "r") {
      alert("The opponent chose " + computerChoice + "\n It's a Draw !");
      draws++;
    } else if (computerChoice == "Rock" && userChoice == "p") {
      alert(
        "The opponent chose " +
          computerChoice +
          "\n congratulation, You've won !"
      );
      humanScore++;
    } else if (computerChoice == "Rock" && userChoice == "s") {
      alert("The opponent chose " + computerChoice + "\n You've lost !");
      computerScore++;
    } else if (computerChoice == "Paper" && userChoice == "p") {
      alert("The opponent chose " + computerChoice + "\n It's a Draw !");
      draws++;
    } else if (computerChoice == "Paper" && userChoice == "s") {
      alert(
        "The opponent chose " +
          computerChoice +
          "\n congratulation, You've won !"
      );
      humanScore++;
    } else if (computerChoice == "Paper" && userChoice == "r") {
      alert("The opponent chose " + computerChoice + "\n You've lost !");
      computerScore++;
    } else if (computerChoice == "scissor" && userChoice == "s") {
      alert("The opponent chose " + computerChoice + "\n It's a Draw !");
      draws++;
    } else if (computerChoice == "scissor" && userChoice == "r") {
      alert(
        "The opponent chose " +
          computerChoice +
          "\n congratulation, You've won !"
      );
      humanScore++;
    } else if (computerChoice == "scissor" && userChoice == "p") {
      alert("The opponent chose " + computerChoice + "\n You've lost !");
      computerScore++;
    }
    // else {
    //   alert("something's Wrong. PLEASE TRY AGAIN!");
    // }
    if (humanScore == 5 || computerScore == 5 || draws == 5) {
      totalResult();
      return;
    }
  }
}

function totalResult() {
  if (humanScore == 5) {
    alert(
      "THE GAME HAS ENDED !!! " +
        "\n You've WON. " +
        humanScore +
        " to " +
        computerScore +
        " with " +
        draws +
        "draws"
    );
  }
  if (computerScore == 5) {
    alert(
      "THE GAME HAS ENDED !!! " +
        "\n You've LOST. " +
        computerScore +
        " to " +
        humanScore +
        " with " +
        draws +
        "draws"
    );
  }
  if (draws == 5) {
    alert(
      "THE GAME HAS ENDED !!! " +
        "\n It's a DRAW.  " +
        humanScore +
        " to " +
        computerScore +
        " with " +
        draws +
        "draws"
    );
  }
}

checkResult();
