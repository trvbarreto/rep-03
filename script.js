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

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        results.textContent = "You Win! Rock beats Scissors";
        playerPoints++;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        results.textContent = "You Lose. Paper beats Rock";
        computerPoints++;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        results.textContent = "You Win! Paper beats Rock"; 
        playerPoints++;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        results.textContent = "You Lose. Scissors beats Paper"; 
        computerPoints++;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        results.textContent = "You Win! Scissors beats Paper";
        playerPoints++;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        results.textContent = "You Lose. Rock beats Scissors"; 
        computerPoints++;
    } else {
        results.textContent = "It is a tie!"; 
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value));
});