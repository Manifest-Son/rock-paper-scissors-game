const computerInputs = ["rock", "paper", "scissors"];
const emoji = [{ rock: "✊" }, { paper: "✋" }, { scissors: "✌️" }];

const playerScore = document.getElementById("player-scores");
const computerScore = document.getElementById("computer-scores");
const computerDisplay = document.getElementById("computer-emoji-input");
const playerDisplay = document.getElementById("player-emoji-input");
const overallDisplay = document.getElementById("display-word");

let playerWins = 0;
let computerWins = 0;

function rpsGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * computerInputs.length)];
  console.log(computerChoice);
  console.log(playerChoice);

  let result;
  if (playerChoice === computerChoice) {
    result = "DRAW";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "PLAYER WINS";
    playerWins++;
  } else {
    result = "COMPUTER WINS";
    computerWins++;
  }
  console.log(result);
  playerDisplay.innerHTML = ` ${emojis[playerChoice]}`;
  computerDisplay.innerHTML = `${emojis[computerChoice]}`;
  overallDisplay.innerHTML = `${result}`;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  playerScore.innerHTML = `${playerWins}`;
  computerScore.innerHTML = `${computerWins}`;
}
