/*
PSEUDOCODE for TheOdinProject RPS Game

1. Interface
2. Input
3. Output
4. How to get Output from Input

1. 
> console.log()

2.
> Initialize win counter.  
> Ask user to select from either rock, paper, or scissor.
> Store user input in a variable.
> Have computer select a random option from rock, paper, or scissor.
> Store computer input in a variable.

3.
> Compare user input and computer input.
> Use conditional statements to test user input against computer input.
> Update win counter by 1 depending on outcome.
> Display round outcome to user.
> Repeat process until one player reaches a certain number of victories.
> Display overall game outcome to user.
> Display reset button.
> Reset button resets win counter to 0.
*/

let userWins = 0;
let computerWins = 0;

function getComputerSelection() {
    const generateChoice = Math.floor(Math.random() * 3 + 1);
    let computerSelection;

    switch (generateChoice) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors"
            break;
        default:
            computerSelection = "an error has ocurred"
    }
    return computerSelection;
}

// Plays a round
function playRound(computerSelection, playerSelection) {

    let roundResult;

    if (playerSelection == computerSelection) {
        return roundResult = "It's a tie.";
    
    } else if (playerSelection == "rock") {
        // console.log("rock works");
        switch (computerSelection) {
            case "paper":
                computerWins++;
                return roundResult = "You lose! Paper beats rock.";
                break;
            case "scissors":
                userWins++;
                return roundResult = "You win! Rock beats scissors.";
                break;
            default:
                return roundResult = "Something went wrong.";
        }
    
    } else if (playerSelection == "paper") {
        // console.log("paper works");
        switch(computerSelection) {
            case "rock":
                userWins++;
                return roundResult = "You win! Paper beats rock.";
                break;
            case "scissors":
                computerWins++;
                return roundResult = "You lose! Scissors beats paper.";
                break;
            default:
                return roundResult = "Something went wrong.";
        }
    
    } else if (playerSelection == "scissors") {
        // console.log("scissors work");
        switch(computerSelection) {
            case "paper":
                userWins++;
                return roundResult = "You win! Scissors beats paper.";
                break;
            case "rock":
                computerWins++;
                return roundResult = "You lose! Rock beats scissors.";
                break;
            default:
                return roundResult = "Something went wrong.";
        }
    }
}

// Loops game till best of 5
// Pseudocode:
// > Game function called
// > Set userWins and computerWins back to 0
// > Call playRound() 5 times
// > Increase wins for each round
// >> If user wins, increase userWins counter by 1
// >> If computer wins, increase computerWins counter by 1
// > Once someone has reached 3 wins, end game.
// > Display victory/loss flag.
function game() {
    alert("Best out of 5. Game start!")
    userWins = 0;
    computerWins = 0;
    let playerSelection;
    let computerSelection;
    let result;

    // Loops for best out of 5 rounds.
    for (let i = 0; i < 999; i++) {
        // Breaks the loop once someone reaches 3 points.
        if (userWins == 3) { 
            break; 
        } else if (computerWins == 3) {
            break;
        } 
        // Gets player input
        playerSelection = prompt("Rock, paper, or scissors?");
        // Accounts for case sensitivity
        playerSelection = playerSelection.toLowerCase();
        // Gets computer selection
        computerSelection = getComputerSelection();
        // Plays round and stores result | Validates correct user input
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) {
            alert("Please enter a valid weapon: rock, paper, or scissors.")
            continue;
        }
        result = playRound(playerSelection, computerSelection);
        alert(result + "\nScore: " + userWins + " | " + computerWins);
    }

    if (userWins > computerWins) {
        alert("Game over. You win!");
    } else if (computerWins > userWins) {
        alert("Game over. You lose!");
     } else {
        alert("Game over. It's a tie!");
    }

}

game();