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
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Please enter your choice(r=Rock, p=Paper, s=Scissor): ");
  if (choice !== "r" && choice !== "p" && choice !== "s") {
    alert("Please enter a valid option");
    getHumanChoice();
  }
  return choice;
}

function checkResult() {
  let computerChoice = getComputerChoice();
  let userChoice = getHumanChoice();
  if (computerChoice == "Rock" && userChoice == "r") {
    alert("The opponent chose " + computerChoice + "\n It's a Draw !");
  } else if (computerChoice == "Rock" && userChoice == "p") {
    alert(
      "The opponent chose " + computerChoice + "\n congratulation, You've won !"
    );
  } else if (computerChoice == "Rock" && userChoice == "s") {
    alert("The opponent chose " + computerChoice + "\n You've lost !");
  } else if (computerChoice == "Paper" && userChoice == "p") {
    alert("The opponent chose " + computerChoice + "\n It's a Draw !");
  } else if (computerChoice == "Paper" && userChoice == "s") {
    alert(
      "The opponent chose " + computerChoice + "\n congratulation, You've won !"
    );
  } else if (computerChoice == "Paper" && userChoice == "p") {
    alert("The opponent chose " + computerChoice + "\n You've lost !");
  } else if (computerChoice == "scissor" && userChoice == "s") {
    alert("The opponent chose " + computerChoice + "\n It's a Draw !");
  } else if (computerChoice == "scissor" && userChoice == "r") {
    alert(
      "The opponent chose " + computerChoice + "\n congratulation, You've won !"
    );
  } else if (computerChoice == "scissor" && userChoice == "p") {
    alert("The opponent chose " + computerChoice + "\n You've lost !");
  } else {
    alert("something's Wrong. PLEASE TRY AGAIN!");
  }
}
