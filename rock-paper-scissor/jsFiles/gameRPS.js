//Global Variables
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let scorePlayerHTML = document.getElementById("scorePlayer");
let scoreComputerHTML = document.getElementById("scoreComputer");
let messageHTML = document.getElementById("messageDiv");



console.log(scoreComputerHTML);
console.log(scorePlayerHTML);


//Functions for the game
function getComputerChoice (){

    let choices = ["rock", "paper", "scissors"];
    
    let randomIndex = Math.floor(Math.random() * choices.length);

    //console.log(choices[randomIndex]);
    return choices[randomIndex];

}

function displayWinner(playerScore, computerScore){
    if(playerScore == 5){
        console.log("Player Wins");
    }
    else if(computerScore == 5){
        console.log("Computer wom");
    }
}

function playerTurn(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection == computerSelection){
        messageHTML.innerHTML = `Tie! Both players selection were ${playerSelection} and  ${computerSelection}`
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        messageHTML.innerHTML = `You won! ${playerSelection} beats ${computerSelection}`
        playerScore++;
        scorePlayerHTML.innerHTML = playerScore
    

    } else {
        messageHTML.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore++
        scoreComputerHTML.innerHTML = computerScore
    

    }


    
    console.log(playerScore);
    console.log(computerScore)

    displayWinner(playerScore, computerScore);
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice()
        let playerChoice = button.value;
        playerTurn(playerChoice, computerChoice)
    });
  })
