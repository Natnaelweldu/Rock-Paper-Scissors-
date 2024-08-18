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
