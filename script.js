
function getComputerChoice() {

    return Math.floor(Math.random() * 3);
}

function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();

    let playerSelectionNum;
    let playerWins = 0;
    let computerWins = 1;
    let draw = 2;

    if (playerSelection === "rock"){
        playerSelectionNum = 0;
    } else if (playerSelection === "paper"){
        playerSelectionNum = 1;
    } else if (playerSelection === "scissor"){
        playerSelectionNum = 2;
    }

    if (computerSelection == playerSelectionNum){
        console.log("It's a draw!")
        return draw+=1;
    } else if((computerSelection == 0) & (playerSelectionNum == 1)){
        playerWins+=1;
        console.log(playerSelection + " beats rock you win! ")
        return playerWins;

    } else if((computerSelection == 1) & (playerSelectionNum == 0)){
        
        console.log("Paper beats " + playerSelection + " you lose!")
        return computerWins +=1;

    }else if((computerSelection == 2) & (playerSelectionNum == 1)){
        
         console.log("Scissor beats " + playerSelection + " you lose!")
         return computerWins +=1;

    } else if((computerSelection == 1) & (playerSelectionNum == 2)){
         playerWins+=1;
         console.log( playerSelection+ " beats paper you win!")
         return playerWins;

    }else if((computerSelection == 2) & (playerSelectionNum == 0)){
         playerWins+=1;
         console.log( playerSelection+ " beats scissor you win!")
         return playerWins;

    }else if((computerSelection == 0) & (playerSelectionNum == 2)){
         
         console.log( "Rock beats " + playerSelection + " you lose!")
         return computerWins +=1;

    }
   
   
    
}




function game(){
        let playerWins = 0;
        let draw = 0;
        let computerWins = 0;
    for (let i = 0; i< 5; i++){
        

        let playerSelection = prompt("Rock, Paper, or Scissor?");

        let computerSelection = getComputerChoice();
        let roundOutput = playRound(computerSelection,playerSelection)
        if( roundOutput== 1){
            playerWins+=1;
        }else if (roundOutput == 2){
            computerWins +=1;
        }else if (roundOutput == 3){
            draw +=1;
        }
    }

    if(playerWins > computerWins){
        console.log("\nRounds Won: " + playerWins  + "\nRounds Lost: " + computerWins + "\nDraws: " +  draw + "\nYou Win!")
    }else if(playerWins < computerWins){
        console.log("\nRounds Won: " + playerWins  + "\nRounds Lost: " + computerWins + "\nDraws: " +  draw + " \nYou Lost!")
    }
    
   
}


game(); 