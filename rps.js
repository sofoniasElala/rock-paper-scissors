function getComputerChoice(){
    randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 1) return "Rock";
    if(randomNum === 2) return "Paper";
    return "Scissors";
}