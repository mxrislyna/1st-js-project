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



function capitalize(word){
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

    function playGame(){
        let humanScore = 0;
        let computerScore = 0;
        
        function playRound (humanChoice, computerChoice) {  

            if (humanChoice === computerChoice) {   
            console.log("The computer copied you! Try again!");   
        } else if (humanChoice === "rock" && computerChoice === "paper") {   
            computerScore ++;   
            console.log("You lose! Paper beats Rock!");   
        } else if (humanChoice === "paper" && computerChoice === "scissors") {   
            computerScore ++;   
            console.log("You lose! Scissors beats Paper!");   
        } else if (humanChoice === "scissors" && computerChoice === "rock") {    
            computerScore ++;   
            console.log("You lose! Rock beats Scissors!");    
        } else { 
            humanScore ++;  
            console.log(`You Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}!`);  
        }    
        } 
        
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
        }

        if (humanScore > computerScore) {
            console.log ("You won! Congratulations!");
        } else if (humanScore < computerScore) {
            console.log ("You lost the game!");
        } else {
            console.log ("It's a tie!")
        }
    }   

playGame()





