'use strict';
/*
console.log(document.querySelector('.message').textContent); //Kada imamo vise . citamo sa desna na levo!!
document.querySelector('.message').textContent = 'Correct Number!'; //Dajemo mu novu vrednost sve sto je posle =.
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 13; // da stavimo vrednost u polje inputa
console.log(document.querySelector('.guess').value); //Da dobijemo vrednost od inputa koristimo .value

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// KADA SE NESTO PONAVLJA VISE PUTA U TOKU KODA,PRAVIMO FUNKCIJU DA BI KOD BIO DRY!!!
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const numberDisplay = function (number) {
  document.querySelector('.number').textContent = number;
};
//Nece biti pozvano kao obicna funkcija, nego tek nakon interakcije
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value); //Ovo je isto kao i obicna funkcija samo sto smo je ovde pripisali .addEventListner('.click') metodi

  // When there is no input
  // SKRACENA (DRY)- verzija

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number 🚫'; //Primer koriscenja dry funkcije
    displayMessage('No number 🚫');
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    numberDisplay(secretNumber);
    // document.querySelector('.message').textContent = 'Correct number🎉';
    displayMessage('Correct number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').style.width = '30rem';
  } // When guess is to high
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? 'Number is too high😩' : 'Number is too low😭'
      );
      // guess > secretNumber ? 'Number is too high😩' : 'Number is too low😭'; //Ovde smo koristili turnary operator
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game over🤬';//I ovde koristimo funckiju
      displayMessage('Game over🤬');
      score--;
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  }
  //When guess is too low
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').textContent = '?';
  numberDisplay('?');
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing');
});
*/
// FULL VERZIJA
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
