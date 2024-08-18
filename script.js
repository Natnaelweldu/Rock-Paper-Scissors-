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

getHumanChoice();
