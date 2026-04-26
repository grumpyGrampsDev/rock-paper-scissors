console.log("The script is loaded");

const computerScore = 0;
const humanScore = 0;

function getComputerChoice(string) {
  let compChoice = Math.floor(Math.random() * 10);
  if (compChoice <= 3) {
    return "Rock";
  } else if (compChoice > 3 && compChoice < 7) {
    return "Paper";
  } else if (compChoice >= 7 && compChoice <= 10) {
    return "Scissors";
  } else {
    return "A value outside the expected range was returned";
  }
}

function getHumanChoice(string) {
  let humanChoice = prompt("What are you throwing?");
  if (!humanChoice) return "Invalid input";
  if (
    humanChoice.toLowerCase() === "rock" ||
    humanChoice.toLowerCase() === "paper" ||
    humanChoice.toLowerCase() === "scissors"
  ) {
    return humanChoice;
  } else {
    return "Throw an appropriate object.";
  }
}

function playRound() {
  // empty () passes values from getComputerChoice and getHumanChoice
  let compChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log(humanChoice, compChoice);
  if (humanChoice.toLowerCase() === compChoice.toLowerCase())
    return "We have a tie!";

  if (
    (humanChoice.toLowerCase() === "rock" &&
      compChoice.toLowerCase() === "paper") ||
    (humanChoice.toLowerCase() === "paper" &&
      compChoice.toLowerCase() === "scissors") ||
    (humanChoice.toLowerCase() === "scissors" &&
      compChoice.toLowerCase() === "rock")
  ) {
    return (
      "Rats! You've lost this round." +
      " " +
      compChoice +
      " " +
      "beats" +
      " " +
      humanChoice
    );
  } else {
    return (
      "Congrats! You've won this round." +
      " " +
      humanChoice +
      "beats" +
      " " +
      compChoice
    );
  }
}
