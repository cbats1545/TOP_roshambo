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

I'm not so sure I should've went the route of if/else; probably a switch statement situation