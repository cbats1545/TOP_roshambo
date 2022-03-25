// function to serve as the computer player
// using random number choice and assigning ranges to choices
let computerPlay = () => {
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

let test = computerPlay();

console.log(test);