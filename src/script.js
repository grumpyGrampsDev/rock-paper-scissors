console.log("The script is loaded");

// STATE (shared)

let roundsPlayed = 0;
let results = [];
let currentRoundContainer = null;
let prompt;

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

function init() {
  prompt = document.querySelector(".prompt");
}

function ensureRoundExists() {
  if (!currentRoundContainer) {
    startNewRound();
  }
}

function logMessage(message) {
  ensureRoundExists();

  const entry = document.createElement("p");
  entry.textContent = message;

  currentRoundContainer.appendChild(entry);

  // AUTO-SCROLL FIX
  requestAnimationFrame(() => {
    logContainer.scrollTo({
      top: logContainer.scrollHeight,

      behavior: "smooth",
    });
  });
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

  if (wins > losses) return "Player wins";
  if (losses > wins) return "Old man wins";
  return "Tie";
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
        const winner = getFinalWinner(results);
        logMessage(winner);
        if (winner === "Player wins") {
          prompt.textContent = "You've bested me this time.";
        } else if (winner === "Old man wins") {
          prompt.textContent = "I've won this time.";
        } else {
          prompt.textContent = "We are evenly matched.";
        }
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
  prompt.textContent = "Choose your weapon";
  startNewRound();
  logMessage("New game started");
}

// INIT
init();
userSelect();
newGameBtn.addEventListener("click", resetGame);
