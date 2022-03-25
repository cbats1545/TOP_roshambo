// function to serve as the computer player
// using random number choice and assigning ranges to choices
const computerPlay = () => {
    let choice = Math.floor(Math.random()*30) + 1;
    // numbers 1-10 are ROCK
    // numbers 21-30 are PAPER
    // numbers 11-20 are SCISSORS
    if (choice <= 10) {
        return "ROCK";
    } else if (choice > 20) {
        return "PAPER";
    } 
    return "SCISSORS";

}

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
    // if scissors beats paper
    // if paper beats rock
    return player;
}