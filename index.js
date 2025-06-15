let computerScore = 0;
let userScore = 0;

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

function getUserChoice() {
    const choice = prompt("Enter one of them: Rock ,Paper ,Scissors");
    return choice.toLowerCase();
}

function playRound(computerChoice,userChoice) {

}

