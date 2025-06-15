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

function getUserChoice(e) {
    const choice = e.target.textContent;
    return choice.toLowerCase();
}

function playRound(computerChoice,userChoice) {
    if(userChoice === computerChoice) {
        userScore++;
        computerScore++;
        console.log("Draw");
    } else if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        console.log("User Won");
    } else {
        computerScore++;
        console.log("Computer Won");
    }
}



// function playGame() {
    
//     for (let round = 1; round <= 5; round++) {
//         const computerChoice = getComputerChoice();
//         const userChoice = getUserChoice();
        
//         playRound(computerChoice,userChoice);
//     }
    
//     let result;
//     if(userScore === computerScore) {
//         result = "Draw";
//     } else if ( userScore > computerScore) {
//         result = "user won";
//     } else {
//         result = "computer won";
//     }

//     console.log(`Result:${result}\n
//         Computer Score: ${computerScore}\n
//         User Score: ${userScore}`);
// }

// playGame();

const btns = document.querySelector('#buttons-container');

btns.addEventListener("click",(e) => {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice(e);
    console.log(`computer choice: ${computerChoice}\nuser choice: ${userChoice}`);
    playRound(computerChoice,userChoice);
})