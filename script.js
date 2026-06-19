function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    };
}

console.log(getComputerChoice())


    function getHumanChoice() {
        let input = prompt("Choose\: rock, paper, or scissors?").toLowerCase();

        switch (input) {
            case "rock":
                console.log("You picked rock!");
                break;
            case "paper":
                console.log("You picked paper!");
                break;
            case "scissors":
                console.log("You picked scissors!");
                break;
            default:
                console.log("Oops. Please try again.");
        }
}

console.log(getHumanChoice());