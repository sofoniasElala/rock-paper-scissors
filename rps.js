const buttons = document.querySelectorAll('button');
const computerHand = document.querySelector('#compHand');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const winner = document.createElement('div');
let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computer = getComputerChoice();
        computerHand.textContent = computer;
        playRockPaperScissors(button.textContent, computer);
        updateScoreDisplay();
    })
});


function updateScoreDisplay(){
    playerScore.textContent = 'You: ' + playerWins;
    computerScore.textContent = 'Computer: ' + computerWins;

    if(playerWins === 5) {
        win('You!');
    } else if(computerWins === 5){
       win('Computer :(');
    }
}

function win(won){
    winner.textContent = `Winner: ${won}`;
        document.body.appendChild(winner);
        playerWins = 0;
        computerWins = 0;
}


function getComputerChoice(){
    randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 1) return "rock";
    if(randomNum === 2) return "paper";
    return "scissors";
}

function playRockPaperScissors(playerSelection, computerSelection){

    if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') || 
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') || 
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors')){

              playerWins += 0;

        } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || 
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || 
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')){

             playerWins++;
        } else {
            computerWins++;
        }
         
}