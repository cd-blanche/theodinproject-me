// Global Variables
userPoints = 0;
computerPoints = 0;

document.addEventListener('click', selectButton);

// Registers button
function selectButton(e) {
    const computerChoice = getComputerSelection();
    const roundWinner = document.querySelector('#round-winner');

    switch (e.target.id) {
        case 'rock':
            roundWinner.textContent = playRound(computerChoice, 'rock');
            break;
        case 'paper':
            roundWinner.textContent = playRound(computerChoice, 'paper');
            break;
        case 'scissors':
            roundWinner.textContent = playRound(computerChoice, 'scissors');
            break;
    };
};

// Plays a round
function playRound(computerSelection, playerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie.";
    
    } else if (playerSelection == "rock") {
        switch (computerSelection) {
            case "paper":
                updateScore(false);
                return "You lose! Paper beats rock.";
            case "scissors":
                updateScore(true);
                return "You win! Rock beats scissors.";
            default:
                return "Something went wrong.";
        };
    
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                updateScore(true);
                return "You win! Paper beats rock.";
            case "scissors":
                updateScore(false);
                return "You lose! Scissors beats paper.";
            default:
                return "Something went wrong.";
        };
    
    } else if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "paper":
                updateScore(true);
                return "You win! Scissors beats paper.";
            case "rock":
                updateScore(false);
                return "You lose! Rock beats scissors.";
            default:
                return "Something went wrong.";
        };
    };
};

function updateScore(winStatus) {
    const userScore = document.querySelector('#user-score');
    const computerScore = document.querySelector('#computer-score');

    if (winStatus) {
        userPoints += 1;
        userScore.textContent = userPoints;
    } else {
        computerPoints += 1;
        computerScore.textContent = computerPoints;
    };

    if (userPoints === 5) {
        endGame('User');
    } else if (computerPoints === 5) {
        endGame('Computer');
    };

};

function endGame(winner) {
    const winnerResult = document.querySelector('#winner');
    winnerResult.textContent = winner;
    document.removeEventListener('click', selectButton);
};

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
    };
    return computerSelection;
};
