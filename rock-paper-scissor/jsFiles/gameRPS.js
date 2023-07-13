function getComputerChoice (){

    let choices = ["rock", "paper", "scissors"];
    
    let randomIndex = Math.floor(Math.random() * choices.length);

    //console.log(choices[randomIndex]);
    return choices[randomIndex];

}

function playerTurn(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    //Tie
    if(playerSelection == computerSelection){
        console.log(`Tie! Both players selection were ${playerSelection} and  ${computerSelection}`)
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)

    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)

    }
}

/*for(let i = 0; i <= 5; i++ ){
    let choiceComputer = getComputerChoice();

    let choice = prompt("Enter your choice");

    playerTurn(choice, choiceComputer);

}*/
