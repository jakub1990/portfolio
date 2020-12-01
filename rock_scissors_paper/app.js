const game = () => {
    let pScore = 0; 
    let cScore = 0;
     const matchScreen = document.querySelector('.match');
    const playBtn = document.querySelector('.intro button');
    //start game
    const startGame = () => {
      const introScreen = document.querySelector('.intro');
      playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        matchScreen.classList.add('fadeIn');
      });
    }
    
    const playMatch = () => {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player-hand');
      const computerHand = document.querySelector('.computer-hand');
      const hands = document.querySelectorAll('.hands img');
      
      
      hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
          this.style.animation = '';
        });
      });
      
      const computerOptions = ['rock','scissors','paper'];
      options.forEach(option => {
        option.addEventListener('click', function() {
        const computerNum = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNum];
       setTimeout(() => {   
         compareHands(this.textContent, computerChoice);
             playerHand.src = `https://github.com/developedbyed/rock-paper-scissor/blob/master/assets/${this.textContent}.png?raw=true`;
          computerHand.src = `https://github.com/developedbyed/rock-paper-scissor/blob/master/assets/${computerChoice}.png?raw=true`;
       },2000);
          playerHand.style.animation = 'playerAnim 2s ease';
          computerHand.style.animation = 'compAnim 2s ease';
        });
      });
    }
    
    const updateScore = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
     
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }
    
    
    const compareHands = (playerChoice,computerChoice) => {
       const winner = document.querySelector('.winner');
       const gameOverUser = document.querySelector('.user');
      const gameOverComp = document.querySelector('.comp');
      const buttonUser = document.querySelector('.user button');
       const buttonComp = document.querySelector('.comp button');
      
       
     
      if(playerChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return;
      }
      
      if(playerChoice === 'rock') {
        if(computerChoice === 'scissors') {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        }
      }
      
      if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
       }
     }
      
       if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
         }
       }
    }
    startGame();
    playMatch();
    compareHands();
  }
  
  game();
  