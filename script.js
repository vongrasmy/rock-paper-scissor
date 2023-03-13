
let playerSelection;
let playerWins = 0;
let draw = 0;
let computerWins = 0;
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
        document.getElementById("round-result").innerHTML = "Results: You both chose " + playerSelection + ". It's a draw!"
        return draw+=1;
    } else if((computerSelection == 0) & (playerSelectionNum == 1)){
        playerWins+=1;
        document.getElementById("round-result").innerHTML ="Results: You chose " + playerSelection + ". Computer chose rock. You win! "
        return playerWins;

    } else if((computerSelection == 1) & (playerSelectionNum == 0)){
        
        document.getElementById("round-result").innerHTML ="Results: You chose " + playerSelection + ". Computer chose paper. You lose!"
        return computerWins +=1;

    }else if((computerSelection == 2) & (playerSelectionNum == 1)){
        
        document.getElementById("round-result").innerHTML ="Results: You chose " + playerSelection + ". Computer chose scissor. You lose!"
         return computerWins +=1;

    } else if((computerSelection == 1) & (playerSelectionNum == 2)){
         playerWins+=1;
         document.getElementById("round-result").innerHTML = "Results: You chose " + playerSelection + ". Computer chose paper. You win!"
         return playerWins;

    }else if((computerSelection == 2) & (playerSelectionNum == 0)){
         playerWins+=1;
         document.getElementById("round-result").innerHTML = "Results: You chose " + playerSelection+ ". Computer chose scissor. You win!"
         return playerWins;

    }else if((computerSelection == 0) & (playerSelectionNum == 2)){
         
        document.getElementById("round-result").innerHTML = "Results: You chose " + playerSelection + ". Computer chose rock. You lose!"
         return computerWins +=1;

    }
   
   
    
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerSelection = button.id;
        let computerSelection = getComputerChoice();
       let roundOutput = playRound(computerSelection,playerSelection)
        console.log(roundOutput);
        if( roundOutput== 1){
            console.log(playerWins+=1);
            document.getElementById("player-score").innerHTML = "Player Wins: " + playerWins;
        }else if (roundOutput == 2){
            console.log(computerWins +=1);
            document.getElementById("computer-score").innerHTML = "Computer Wins: " + computerWins;
        }else if (roundOutput == 3){
            console.log(draw +=1);
            document.getElementById("draws").innerHTML = "Draws: " + draw;
        }

        if(playerWins == 5){
            document.getElementById("winner-announcement").innerHTML = "You won 5 rounds!";
        } else if(computerWins == 5){
            document.getElementById("winner-announcement").innerHTML = "The computer won 5 rounds!";
        }
      });
    });

/*function game(){
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


game(); */