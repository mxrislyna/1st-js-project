function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
   
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    };
}

function getHumanChoice() {
    let input = prompt("Choose\: rock, paper, or scissors?").toLowerCase();

    switch (input) {
        case "rock":
            console.log("You picked rock!");
            return "rock";
        case "paper":
            console.log("You picked paper!");
            return "paper";
        case "scissors":
            console.log("You picked scissors!");
            return "scissors";
        default:
            console.log("Oops. Please try again.");
            return getHumanChoice();        
        }
}

let humanScore = 0;
let computerScore = 0;

function capitalize(word){
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound (humanChoice, computerChoice) {

   if (humanChoice === computerChoice) {
    return "The computer copied you! Try again!"; 
   } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "You lose! Paper beats Rock!";
   } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "You lose! Scissors beats Paper!";
   } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "You lose! Rock beats Scissors!"; 
   } else {
    humanScore += 1;
    return `You Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}!`;
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);