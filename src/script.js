console.log("The script is loaded");

// STATE (shared)

let roundsPlayed = 0;
let results = [];
let currentRoundContainer = null;

// DOM

const logContainer = document.getElementById("logContainer");
const newGameBtn = document.getElementById("newGame");

newGameBtn.classList.add("hidden");

// ROUND CARDS UI

function startNewRound() {
  currentRoundContainer = document.createElement("div");
  currentRoundContainer.classList.add("round-block");
  logContainer.appendChild(currentRoundContainer);
}

// LOGGING

function logMessage(message) {
  const entry = document.createElement("p");
  entry.textContent = message;

  if (!currentRoundContainer) {
    startNewRound();
  }

  currentRoundContainer.appendChild(entry);
}

// GAME LOGIC

function getComputerChoice() {
  const n = Math.floor(Math.random() * 10);

  if (n <= 3) return "rock";
  if (n < 7) return "paper";
  return "scissors";
}

function playRound(humanChoice) {
  const compChoice = getComputerChoice();

  logMessage(`${humanChoice} vs ${compChoice}`);

  if (humanChoice === compChoice) {
    logMessage("Tie");
    return "tie";
  }

  if (
    (humanChoice === "rock" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "rock")
  ) {
    logMessage("Loss");
    return "loss";
  }

  logMessage("Win");
  return "win";
}

function getFinalWinner(results) {
  const wins = results.filter((r) => r === "win").length;
  const losses = results.filter((r) => r === "loss").length;

  if (wins > losses) return "You win the game!";
  if (losses > wins) return "The Old Man wins the game!";
  return "The game is a tie!";
}

// INPUT HANDLING

function userSelect() {
  const btns = document.querySelectorAll(".choices");

  btns.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (roundsPlayed >= 5) return;

      const thrown = event.currentTarget.dataset.choice;

      logMessage(`You threw: ${thrown}`);

      const result = playRound(thrown);
      results.push(result);

      roundsPlayed++;

      if (roundsPlayed < 5) {
        startNewRound();
      }

      if (roundsPlayed === 5) {
        logMessage(getFinalWinner(results));
        newGameBtn.classList.remove("hidden");
      }
    });
  });
}

// RESET

function resetGame() {
  roundsPlayed = 0;
  results = [];
  currentRoundContainer = null;

  logContainer.replaceChildren();

  newGameBtn.classList.add("hidden");

  startNewRound();
  logMessage("New game started");
}

// INIT

newGameBtn.addEventListener("click", resetGame);

userSelect();
startNewRound();
