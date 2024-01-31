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

              return "Draw!";

        } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || 
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || 
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')){

             return `You won! ${playerSelection.toLowerCase()} beats ${computerSelection}.`;
        } else {
            return `You lost, ${computerSelection} beats ${playerSelection.toLowerCase()} :(.`;
        }
         
}



function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = "";

    for(let i = 1; i <= 5; i++){
     let userInput = prompt(`Round ${i}: What hand do you want to play?`);
     roundWinner = playRockPaperScissors(userInput, getComputerChoice());

     if(roundWinner.includes("won")){
        playerScore++;
       } else if (roundWinner.includes("lost")){
        computerScore++;
       } 

       console.log(roundWinner);
    }

    console.log(`
    Your Score: ${playerScore}
    Computer Score: ${computerScore}

    Winner: ${playerScore > computerScore ? "You!" : "Computer"}`);
}

playGame();