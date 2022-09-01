function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

const results = document.querySelector('.results');

'Teste'

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        results.textContent = "You Win! Rock beats Scissors"; 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        results.textContent = "You Lose. Paper beats Rock"; 
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        results.textContent = "You Win! Paper beats Rock"; 
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        results.textContent = "You Lose. Scissors beats Paper"; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        results.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        results.textContent = "You Lose. Rock beats Scissors"; 
    } else {
        results.textContent = "It is a tie!"; 
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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value));
});