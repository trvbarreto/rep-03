function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * 3);

    console.log(choices[random]);
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! Rock beats Paper"; 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats "; 
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You Lose! Rock beats Scissors"; 
    } else {
        return "It's a tie!"; 
    }
}


// Tests
console.log(playRound("ROCK", "Scissors"));
console.log(playRound("Paper", "scissors"));
console.log(playRound("ScIsSorS", "Scissors"));