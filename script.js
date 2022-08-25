function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * 3);

    console.log(choices[random]);
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win! Rock beats Paper"); 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose! Paper beats Rock"); 
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win! Paper beats "); 
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper"); 
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win! Scissors beats Paper"); 
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose! Rock beats Scissors"); 
    } else {
        console.log("It's a tie!"); 
    }
}


// Tests
playRound("ROCK", "Scissors")
playRound("Paper", "scissors")
playRound("ScIsSorS", "Scissors")