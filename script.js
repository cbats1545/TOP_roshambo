// function to serve as the computer player
// using random number choice and assigning ranges to choice
const computerPlay = () => {
    let choice = Math.floor(Math.random()*30) + 1;
    if (choice <= 10) {
        return "ROCK";
    } else if (choice > 20) {
        return "PAPER";
    } 
    return "SCISSORS";

}
/*
// function to play a round of the game
// two params req'd: playerSelection and computerSelection
const playRound = (playerSelection = "ROCK", computerSelection = "SCISSORS") => {
    // need select from player
    let player = prompt("Rock, paper, or scissors?", "RoShamBo");
    player.toUpperCase();
    // need select from computer
    let computer = computerPlay();
    // compare answers
    // if rock beats scissors
    if (player === "ROCK" && computer === "SCISSORS") {
        return "You win. Rock smashes scissors.";
    } else if (player === "SCISSORS" && computer === "PAPER") {
        // if scissors beats paper
        return "You win. Scissors cut through paper.";
    } else if (player === "PAPER" && computer === "ROCK") {
        // if paper beats rock
        return "You win. "
    }
    
}
*/
const playRound = (playerSelection, computerSelection) => {
    let player = prompt("Rock, paper, or scissors?");
    playerSelection = player.toUpperCase();
    let computer = computerPlay();
    computerSelection = computer.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound();