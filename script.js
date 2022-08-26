function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * 3);

    console.log(choices[random]);
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return playerWinCount++, "You Win! Rock beats Scissors"; 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return computerWinCount++, "You Lose. Paper beats Rock"; 
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return playerWinCount++, "You Win! Paper beats Rock"; 
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return computerWinCount++, "You Lose. Scissors beats Paper"; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return playerWinCount++, "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return computerWinCount++, "You Lose. Rock beats Scissors"; 
    } else {
        return "It is a tie!"; 
    }
}

function game() {

    console.log(playerWinCount);
    console.log(computerWinCount);
}

game();