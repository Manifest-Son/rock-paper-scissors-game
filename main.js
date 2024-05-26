document.addEventListener('DOMContentLoaded', function () {
  let compScore = 0;
  let playerScore = 0;

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "DRAW";
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      playerScore++;
      return 'PLAYER WINS';
    } else {
      compScore++;
      return 'COMPUTER WINS';
    }
  }

  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("display-word").textContent = result;
    document.getElementById('player-emoji-input').textContent = getEmoji(playerChoice);
    document.getElementById('computer-emoji-input').textContent = getEmoji(computerChoice);
    updateScoreboard();
  }

  function getEmoji(choice) {
    switch (choice) {
      case 'rock':
        return '✊';
      case 'paper':
        return '✋';
      case 'scissors':
        return '✌️';
      default:
        return '';
    }
  }

  function updateScoreboard() {
    document.getElementById("computer-scores").textContent = `${compScore}`;
    document.getElementById("player-scores").textContent = `${playerScore}`;
  }

  document.getElementById('rock-button').addEventListener('click', function () {
    playGame('rock');
  });

  document.getElementById('paper-button').addEventListener('click', function () {
    playGame('paper');
  });

  document.getElementById('scissors-button').addEventListener('click', function () {
    playGame('scissors');
  });
});