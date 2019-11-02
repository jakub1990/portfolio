const userAnswer = document.querySelector(".answer");
const checkAnswer = document.querySelector(".check-number");
const gueses = document.querySelector(".gueses");
const tries = document.querySelector('.tries');
let gameStatus = document.querySelector('.game-status');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let triesCount = 1;
const baloons = document.querySelector('.baloons img');

checkAnswer.addEventListener('click', game);
  
function game() {
  console.log(randomNumber);
   if(triesCount === 1) {
    tries.innerHTML = 'Previous choosed number was: ' + '';
   }

  let userNumber = Number(userAnswer.value);
  if(triesCount === 10) {
    gameOver();
  }
  if(userNumber === randomNumber) {
    gueses.textContent = 'Cogratulations. You guessed the number!';
    gueses.style.color = 'green';
    baloons.style.display = 'block';
    
  } else if(userNumber > randomNumber) {
    gueses.textContent = 'Wrong! Chosen number is too high';
    gueses.style.color = 'red';
  } else {
    gueses.textContent = 'Chosen number is too low';
    gueses.style.color = '#E84855';
  }
  userAnswer.value = '';
  triesCount++;
  tries.innerHTML += userNumber + ' ';
}

function gameOver() {
  userAnswer.disabled = true;
  checkAnswer.disabled = true;
  gameStatus.innerHTML = 'Game Over';
  gameStatus.className = 'gameover';
  const newGameButton = document.createElement('button');
  newGameButton.textContent = "Start new Game";
  newGameButton.classList = 'newgamebutton';
  gameStatus.appendChild(newGameButton);
  newGameButton.addEventListener('click', newGame);
}

function newGame() {
  triesCount = 1;
  userAnswer.disabled = false;
  checkAnswer.disabled = false;
  userAnswer.focus();
  const paras = document.querySelectorAll('p');
  for(let i = 0; i < paras.length; i++) {
    paras[i].textContent = '';
  }
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  baloons.style.display = 'none';
}
