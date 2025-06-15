let computerScore = 0;
let userScore = 0;
let gameFinished = false;

const roundChoicesPara = document.querySelector('#round-choices');
const roundResultPara = document.querySelector('#round-result');
const gameResultPara = document.querySelector('#game-result');


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch(getRandom(3)) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    }
}

function getUserChoice(e) {
    const choice = e.target.textContent;
    return choice.toLowerCase();
}

function playRound(computerChoice,userChoice) {
    let result = '';
    if(userChoice === computerChoice) {
        result = "Draw";
    } else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        result = "User Won";
    } else {
        computerScore++;
        result = "Computer Won";
    }

    roundResultPara.innerText = `Round Result: ${result}\nUser Score:${userScore}\nComputer Score:${computerScore}`;
    if(computerScore === 5 || userScore === 5) {
        let gameResult = '';
        if(computerScore === 5 && userScore === 5){
        gameResult = "Game Result is Draw!";
        }
        else if(computerScore === 5) {
        gameResult = "Computer Won the Game";
        } else if(userScore === 5) {
        gameResult = "User Won the Game";
        }
        gameFinished = true;
        gameResultPara.innerText = gameResult;
    }
    
}

function resetTheGame() {
    userScore = computerScore = 0;
    gameResultPara.textContent = roundResultPara.textContent = roundChoicesPara.textContent = '';
    gameFinished = false;
}

const btns = document.querySelector('#buttons-container');

btns.addEventListener("click",(e) => {
    if(e.target.tagName !== "BUTTON") return;

    const userChoice = getUserChoice(e);
    const computerChoice = getComputerChoice();

    if(gameFinished) {
        resetTheGame();
    }

    roundChoicesPara.innerText = `computer choice: ${computerChoice} 
    user choice: ${userChoice}`;
    

    playRound(computerChoice,userChoice);
})