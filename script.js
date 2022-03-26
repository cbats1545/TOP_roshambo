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

// function to play single round of roshambo
// two param req'd: one for playerSelection and one for computerSelection

const playRound = (playerSelection, computerSelection) => {
    let player = prompt("Rock, paper, or scissors?");
    playerSelection = player.toUpperCase();
    let computer = computerPlay();
    computerSelection = computer.toUpperCase();
    console.log(`Computer plays: ${computerSelection}`);
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
            return "You win. Paper covers rock.";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
            return "You win. Scissors cut paper.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK"){
            return "You win. Rock breaks scissors.";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            return "You lose. Paper covers rock.";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            return "You lose. Scissors cut paper.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            return "You lose. Rock breaks scissors.";
    }
    return "It's a tie!";
    }
    

// Don't forgot to call the function!!
let results = playRound();
console.log(results);