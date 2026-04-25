console.log("The script is loaded");

function getComputerChoice(string) {
  let choice = Math.floor(Math.random() * 10);
  if (choice <= 3) {
    console.log("Rock");
  } else if (choice > 3 && choice < 7) {
    console.log("Paper");
  } else if (choice >= 7 && choice <= 10) {
    console.log("Scissors");
  } else {
    console.log("A value outside the expected range was returned");
  }
}
