# TOP_roshambo
 Project: Rock Paper Scissors from TOP Foundations curriculum

 ## This ain't nothin' fancy. Just trying to get through the foundations curriculum while focusing on what the lesson/section topic.

computerPlay()
    function
        serves as computer player
        uses random number selection on 1 - 30
        1-10 ROCK
        11-20 SCISSORS
        21-30 PAPER

playRound()
    function
        play a single round of the game
        two param: playerSelection, computerSelection
        
game()
    function
        takes the playRound function and loops five times

results()
    function
        need to display results of the five matches vs the computer
        thinking of starting a tally and then whichever is higher than half(3) will be declared the winner