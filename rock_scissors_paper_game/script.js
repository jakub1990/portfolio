let uScore = 0;
let cS = 0;
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
let statusLeft = document.querySelector(".user-status");
let statusRight = document.querySelector(".computer-status");
let result = document.querySelector(".result-para")


function win(userChoice, computerChoice) {
 uScore ++;
  statusLeft.innerHTML = convertToWord(userChoice);
 statusRight.innerHTML = convertToWord(computerChoice); 
 userScore.innerHTML = uScore;
 result.innerHTML = "You won!";
}

function loose(userChoice, computerChoice) {
  cS++;
 statusLeft.innerHTML = convertToWord(computerChoice);
 statusRight.innerHTML = convertToWord(userChoice); 
 computerScore.innerHTML = cS;
 result.innerHTML = "You lost  :-(";
}

function draw(userChoice, computerChoice) {
  result.innerHTML = "Draw!";
}


function getComputerChoice() {
  const choices = ['r','s','p'];
  const choicesRandom = Math.floor(Math.random() * 3);
  return choices[choicesRandom];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
    win(userChoice, computerChoice);
    break;
    case 'ps':
    case 'sr':
    case 'rp':
    loose(userChoice, computerChoice);
    break;
    case 'pp':
    case 'ss':
    case 'rr':
    draw(userChoice, computerChoice);
  } 
}



function main() {
  rock.addEventListener("click", function(){
    game("r");
  })
  scissors.addEventListener("click", function(){
    game("s");
  })
  paper.addEventListener("click", function(){
    game("p");
  })
}

main();
function convertToWord(letter) {
if(letter === "r") return "Rock";
if(letter === "p") return "Paper";
return "Scissors";
}