let playerPoints = 0;
let computerPoints = 0;
let numOfGames = 0

function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    switch (computerMove) {
        case 1:
            computerMove = "Rock";
            break;

        case 2:
            computerMove = "Paper";
            break;
        
        case 3:
            computerMove = "Scissors";
            break;

        default:
            console.log("Something went horribly wrong...)");
        
    }

    return computerMove;
}

function playerSelection() {
    return prompt("Rock, Paper, Scissors, what do you choose?");
}

function playRound(playerSelection, computerSelection) {
    let caseInsensitive = playerSelection.toLowerCase();
    if (caseInsensitive == "rock") {
        switch (computerSelection) {
            case "Rock":
                return draw();
            
            case "Paper":
                return lose();
            
            case "Scissors":
                return win();
        }
    }
    else if (caseInsensitive == "paper") {
        switch (computerSelection) {
            case "Rock":
                return win();
            
            case "Paper":
                return draw();
            
            case "Scissors":
                return lose();
        }
        }
    else if (caseInsensitive == "scissors") {
        switch (computerSelection) {
            case "Rock":
                return lose();
            
            case "Paper":
                return win();
            
            case "Scissors":
                return draw();
        }
        }
    else {
        alert("You made a typo! The computer wins this round.");
        playerSelection = "TypeError ---> \"" + playerSelection + "\"";
        return lose();
    }

    
    //win/lose/draw functions    
    function win() {
        playerPoints ++;
        return "You Win! " + playerSelection + " beats " + computerSelection + "."
    }
    function lose() {
        computerPoints ++;
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    function draw() {
        return "It's a draw! You both chose " + playerSelection + ".";
    }

}

function gameStart() {
    numOfGames = prompt("Welcome, Human. How many rounds would you like to play?");
    if (isNaN(numOfGames)) {
        alert("Please enter a valid number!");
        gameStart();
    }
    playerPoints = 0;
    computerPoints = 0;
    game();
}

function game() {
    console.log("Let us begin. You chose to play " + numOfGames + " rounds of RPS");

    for (i = 1; i <= numOfGames; i ++) {
        console.log("Round: " + i);
        let result = playRound(playerSelection(), computerPlay());
        console.log(result);
        console.log("Player: " + playerPoints + " / Computer: " + computerPoints);
        }

        if (playerPoints > computerPoints) {
            console.log("You win! Player: " + playerPoints + " / Computer: " + computerPoints);    
        }
        else if (playerPoints < computerPoints) {
            console.log("You Lose. Player: " + playerPoints + " / Computer: " + computerPoints);
        }
        else {
            console.log("It's a draw. Player: " + playerPoints + " / Computer: " + computerPoints);
        }

    let replay = prompt("Play again?");
    if (replay.includes("Yes")) {
        gameStart();
    }
    else {
        console.log("Good game!");
    }
    
}



