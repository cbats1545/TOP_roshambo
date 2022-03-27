// function to serve as the computer player
// using random number choice and assigning ranges to choice

let victory = 0;
let defeat = 0;
let neither = 0;

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
    console.log(`Computer plays: ${computerSelection}. You played: ${playerSelection}`);
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
            victory++;
            return "You win. Paper covers rock.";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
            victory++;
            return "You win. Scissors cut paper.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
            victory++;
            return "You win. Rock breaks scissors.";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            defeat++;
            return "You lose. Paper covers rock.";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            defeat++;
            return "You lose. Scissors cut paper.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            defeat++;
            return "You lose. Rock breaks scissors.";
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
            neither++;
            return "It's a tie. Both accrue point.";
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
            neither++;
            return "It's a tie. Both accrue point.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
            neither++;
            return "It's a tie. Both accrue point.";
    }
    return "Improper answer. Game will need reset.";
    }
    

// need to find a way to deal with an incorrect input and then reset the turn
// need to find a way to deal with same answer situations

const game = () => {
    for (i = 0; i < 5; i++) {
        console.log(playRound());
    }

}

game();

const results = () => {
    if (victory >= 3 && neither <= 2) {
        alert( `You win!!!` );
    } else {
        alert( `You lose...`);
    }
}
console.log(victory);
console.log(defeat);
console.log(neither);
let ending = results();
console.log(ending);
