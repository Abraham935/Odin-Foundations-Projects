//Global constants
const WINNING_SCORE = 5;

//Global Variables
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let scorePlayerHTML = document.getElementById("scorePlayer");
let scoreComputerHTML = document.getElementById("scoreComputer");
let messageHTML = document.getElementById("messageDiv");
let bodyHTML = document.getElementById("body")


//GAME FUNCTIONS

//Get computer choice
function getComputerChoice (){

    let choices = ["rock", "paper", "scissors"];
    
    let randomIndex = Math.floor(Math.random() * choices.length);

    //console.log(choices[randomIndex]);
    return choices[randomIndex];

}

//Change window when a winner is choose
function displayWinner(playerScore, computerScore){
    if(playerScore == 5){
        bodyHTML.innerHTML = `<div id="content">
        <h1>! You Won !</h1>
        <button class="retry" onClick="window.location.reload();"> Play Again </button>
       
    </div>`;

    }
    else if(computerScore == 5){
        bodyHTML.innerHTML = `<div id="content">
        <h1>! The Computer Won !</h1>
        <button class="retry" onClick="window.location.reload();"> Play Again </button>
    </div>`;
    }
}

//function to display message of who won round
function displayMessage(message) {
    messageHTML.innerHTML = message;

}

//Main function of the page to play the game
function playerTurn(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection == computerSelection){
        displayMessage(`Tie! Both players selection were ${playerSelection} and  ${computerSelection}`);
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        displayMessage(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        scorePlayerHTML.innerHTML = playerScore;
    

    } else {
        displayMessage(`You lose! ${computerSelection} beats ${playerSelection}`);  
        computerScore++;
        scoreComputerHTML.innerHTML = computerScore;
    

    }
    displayWinner(playerScore, computerScore);
}

//Loop that adds to each button functionality to play
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice()
        let playerChoice = button.value;
        playerTurn(playerChoice, computerChoice)
    });
  })
