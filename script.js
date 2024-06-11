'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let displayedNumber = document.querySelector('.number');
let body = document.querySelector('body');
let score = 20;
let highscore = 0;

const displayMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

// --------------
// function and logic for guessing number
// --------------
const startGame = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMesage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMesage('🎉 Corect number!');
    body.style.backgroundColor = '#60b347';
    displayedNumber.textContent = `${secretNumber}`;
    displayedNumber.style.width = `30rem`;
    displayedNumber.style.fontSize = `7rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(guess > secretNumber ? '⬇️ Too high!' : '⬆️ Too low!');
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      displayMesage('👿 You lose !');
      body.style.backgroundColor = '#b34747';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', startGame);

// --------------
// Again btn
// --------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;
  displayMesage('Start guessing... !');
  displayedNumber.style.width = `15rem`;
  displayedNumber.style.fontSize = `6rem`;

  secretNumber = Math.floor(Math.random() * 20 + 1);
  body.style.backgroundColor = '#222';

  displayedNumber.textContent = `?`;

  document.querySelector('.guess').value = '';
});

// --------------
// key down
// --------------
window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    document.querySelector('.guess').value++;
  } else if (e.key === 'ArrowDown') {
    document.querySelector('.guess').value--;
  } else if (e.key === 'Enter') {
    startGame();
  }
});
