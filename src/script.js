console.log("The script is loaded");

const computerScore = 0;
const humanScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 10);

  if (compChoice <= 3) {
    return "rock";
  } else if (compChoice > 3 && compChoice < 7) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What are you throwing?");
  if (!humanChoice) return "Invalid";

  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    return "Invalid";
  }
}

function playRound() {
  let compChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  const displayHuman =
    humanChoice !== "Invalid"
      ? humanChoice[0].toUpperCase() + humanChoice.slice(1)
      : humanChoice;

  const displayComp = compChoice[0].toUpperCase() + compChoice.slice(1);

  console.log(displayHuman, displayComp);

  if (humanChoice === "Invalid") return "loss";
  if (humanChoice === compChoice) return "tie";

  if (
    (humanChoice === "rock" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "rock")
  ) {
    return "loss";
  } else {
    return "win";
  }
}

function getFinalWinner(results) {
  const winCount = results.filter((result) => result === "win").length;
  const lossCount = results.filter((result) => result === "loss").length;

  if (winCount > lossCount) return "You win the game!";
  if (lossCount > winCount) return "Computer wins the game!";
  return "The game is a tie!";
}

function playGame() {
  let scores = Array.from({ length: 5 }, () => playRound());

  const formattedScores = scores.map((s) =>
    typeof s === "string" ? s[0].toUpperCase() + s.slice(1) : s,
  );

  const declareWinner = getFinalWinner(scores);

  console.log(formattedScores);
  return declareWinner;
}
