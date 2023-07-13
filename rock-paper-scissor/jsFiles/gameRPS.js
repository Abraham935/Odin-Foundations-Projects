let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

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
        console.log(`Tie! Both players selection were ${playerSelection} and  ${computerSelection}`)
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    

    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++

    }
    
    console.log(playerScore);
    console.log(computerScore)

    displayWinner(playerScore, computerScore);
}

/*for(let i = 0; i <= 5; i++ ){
    let choiceComputer = getComputerChoice();

    let choice = prompt("Enter your choice");

    playerTurn(choice, choiceComputer);

}*/



// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice()
        let playerChoice = button.value;
        playerTurn(playerChoice, computerChoice)
    });
  })
