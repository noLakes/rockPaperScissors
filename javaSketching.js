let playerPoints = 0;
let computerPoints = 0;

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

function updateScore() {
    score.textContent = "Player: " + playerPoints + " / Computer: " + computerPoints;
    if (playerPoints >= 5) {
        alert("You Win!");
        playerPoints = 0;
        computerPoints = 0;
        score.textContent = "Player: " + playerPoints + " / Computer: " + computerPoints;
        display.textContent = "Choose your move to begin another game.";
    }
    else if (computerPoints >= 5) {
        alert("You Lose.");
        playerPoints = 0;
        computerPoints = 0;
        score.textContent = "Player: " + playerPoints + " / Computer: " + computerPoints;
        display.textContent = "Choose your move to begin another game.";
    }
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

        //win/lose/draw functions    
    function win() {
        playerPoints ++;
        display.textContent = "You Win! " + playerSelection + " beats " + computerSelection + ".";
        updateScore();
    }
    function lose() {
        computerPoints ++;
        display.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        updateScore();
    }
    function draw() {
        display.textContent = "It's a draw! You both chose " + playerSelection + ".";
        updateScore();
    }

}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('Rock', computerPlay())
});
   

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('Paper', computerPlay())
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('Scissors', computerPlay())
});

const display = document.querySelector("#display");

const score = document.querySelector('#score');

