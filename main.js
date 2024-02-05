
const btnRock = document.querySelector('.player .rock');
const btnPaper = document.querySelector('.player .paper');
const btnScissors = document.querySelector('.player .scissors');
const score = document.querySelector('.current-score');
const roundStatus = document.querySelector('.game-status');
const gameWinner = document.querySelector('.game-over>h1>span');
const gameOver = document.querySelector('.modal-container');
const startButton = document.querySelector('.start-button');
const comChoice = document.querySelector('.computer-choice');
let p = 0;
let c = 0;
comChoice.style.display = 'none'
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomChoice = choices[(Math.floor(Math.random() * choices.length))];
  if (randomChoice === 'rock') {
    comChoice.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
  } else if (randomChoice === 'paper') {
    comChoice.innerHTML = '<i class="fa-solid fa-hand"></i>';
  } else if (randomChoice === 'scissors') {
    comChoice.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
  }
  comChoice.style.display = 'inline-block';
  return randomChoice;
}
function startGame() {
  p = 0;
  c = 0;
  gameOver.style.display = '';
  score.textContent = 'PLAYER: ' + p + ` -` + ' COMPUTER: ' + c;
  btnRock.addEventListener('click', (e) => {
    e.preventDefault();
    setScore(playRound('rock'));
    console.log(p, c)
  });
  btnPaper.addEventListener('click', (e) => {
    e.preventDefault();
    setScore(playRound('paper'))
  });
  btnScissors.addEventListener('click', (e) => {
    e.preventDefault();
    setScore(playRound('scissors'))
  });
}
function setScore(param) {
  if (param === 'win') {
    score.textContent = 'PLAYER: ' + ++p + ` -` + ' COMPUTER: ' + c;
    roundStatus.textContent = 'ROUND WIN';
  } else if (param === 'loss') {
    score.textContent = 'PLAYER: ' + p + ` -` + ' COMPUTER: ' + ++c;
    roundStatus.textContent = 'ROUND LOSS';
  } else if (param === 'tie') {
    roundStatus.textContent = 'IT\'S A TIE, TRY AGAIN';
  };
  if (score.textContent.includes('5')) {
    gameOver.style.display = 'block';
    finishGame();
  };

};
function finishGame() {
  if (score.textContent.includes('PLAYER: 5')) {
    gameWinner.style.color = '#05c7f2';
    gameWinner.textContent = ' PLAYER WINS!';
  } else if (score.textContent.includes('COMPUTER: 5')) {
    gameWinner.style.color = '#a904bf'
    gameWinner.textContent = ' COMPUTER WINS!';
  }
};

//
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if
    (playerSelection === computerSelection) {
    return ('tie');
  } else if
    (((playerSelection === 'rock') && (computerSelection === 'paper')) ||
    ((playerSelection === 'paper') && (computerSelection === 'scissors')) ||
    ((playerSelection === 'scissors') && (computerSelection === 'rock'))) {
    return ('loss');
  }
  else if
    (((playerSelection === 'paper') && (computerSelection === 'rock')) ||
    ((playerSelection === 'scissors') && (computerSelection === 'paper')) ||
    ((playerSelection === 'rock') && (computerSelection === 'scissors'))) {
    return ('win');
  };
};
startButton.addEventListener('click', () => { document.location.reload() });
startGame();