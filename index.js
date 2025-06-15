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
            return "scissor"
    }
}

function getUserChoice() {
    const choice = prompt("Rock:0 , Paper:1 ,Scissors:2 ")
    switch(choice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissor"
    }
}

