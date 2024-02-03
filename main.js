function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomChoice = choices[(Math.floor(Math.random() * choices.length))];
  return randomChoice;
} // Randomly chooses

const btnRock = document.querySelector('.player .rock');
const btnPaper = document.querySelector('.player .paper');
const btnScissors = document.querySelector('.player .scissors');
const score = document.querySelector('.current-score');


let p = 0;
let c = 0;
score.textContent = ('PLAYER: ' + p + ' COMPUTER: ' + c);

btnRock.addEventListener('click', () => {
  if (playRound('rock') == 'loss') {
    score.textContent = ('PLAYER: ' + p + ' COMPUTER: ' + ++c)
  } else if (playRound('rock') == 'win') {
    score.textContent = ('PLAYER: ' + ++p + ' COMPUTER: ' + c)
  };

});
btnPaper.addEventListener('click', () => {
  if (playRound('paper') == 'loss') {
    score.textContent = ('PLAYER: ' + p + ' COMPUTER: ' + ++c)
  } else if (playRound('rock') == 'win') {
    score.textContent = ('PLAYER: ' + ++p + ' COMPUTER: ' + c)
  }
});
btnScissors.addEventListener('click', () => {
  if (playRound('scissors') == 'loss') {
    score.textContent = ('PLAYER: ' + p + ' COMPUTER: ' + ++c)
  } else if (playRound('rock') == 'win') {
    score.textContent = ('PLAYER: ' + ++p + ' COMPUTER: ' + c)
  }
})
// if playround is loss, then c++


//Create a function the returns the choosen weapon
//When btnRock is clicked, return string rock and so on

function playRound(weapon) {
  let playerSelection = weapon;
  let computerSelection = getComputerChoice();
  if ((playerSelection == 'rock')
    && (computerSelection == 'paper')) {
    return ('loss');
  } else if ((playerSelection === 'paper')
    && (computerSelection === 'scissors')) {
    return ('loss');
  } else if ((playerSelection === 'scissors')
    && (computerSelection === 'rock')) {
    return ('loss');
  } else if ((playerSelection === 'paper')
    && (computerSelection === 'rock')) {
    return ('win');
  } else if ((playerSelection === 'scissors')
    && (computerSelection === 'paper')) {
    return ('win');
  } else if ((playerSelection === 'rock')
    && (computerSelection === 'scissors')) {
    return ('win');
  } else if (playerSelection === computerSelection) {
    return ('tie');
  };
}

function playGame() {
  let p = 0;
  let c = 0;
  // for (let i = 1; i < 6; i++) {
  //   let round = playRound();
  //   console.log('Round ' + i);
  //   console.log(round);
  //   if (round.includes('tie')) {
  //     i--;
  //     console.log('Try again!'); // Checks if the choice is valid or if it is a tie and replays the round
  //   } else if (round.includes('Win')) {
  //     p++;
  //   }
  //   else if (round.includes('Loose')) {
  //     c++;
  //   };
  //   console.log('Current Score: ' + 'Player:' + p + ' AI:' + c);
  //   if (p == 3 || c == 3) {
  //     i = 6;
  //   } //Checks if a score is 3 and ends the loop, concludes the game
  // };
  let winner;
  if (p > c) {
    winner = 'GAME OVER: YOU WON!'
  }
  else if (c > p) {
    winner = 'GAME OVER: YOU LOST!'
  };
  console.log(winner);
}
