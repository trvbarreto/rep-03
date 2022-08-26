function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * 3);

    return choices[random];
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

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    if (playerWinCount > computerWinCount) {
        console.log(`Player Wins! - Score: - ${playerWinCount} x ${computerWinCount}`);
    } else if (computerWinCount > playerWinCount) {
        console.log(`Computer Wins! - Score: - ${computerWinCount} x ${playerWinCount}`);
    } else {
        console.log(`It's a tie! - Score: - ${computerWinCount} x ${playerWinCount}`);
    }
}

game();