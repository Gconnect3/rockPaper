// Rock paper Scissors
//have a function call a random number 
// have a switch statement implement the logic of those numbers to rock paper scissor

function computerPlay() {
    const random = Math.floor(Math.random()*3);
    return random
    /*switch (random){
        case 0 : return "Scissors";
        break;
        case 1 : return "Rock";
        break;
        case 2 : return "Paper";
        break;
        default : return "Error"
    }*/
}

// write a function that takes in the player selection

function playerSelection() {
    const rock = document.querySelector('input').value.toLowerCase()
    if (rock === "rock"){
        return 1
    } else if (rock === "scissor" || rock === "scissors"){
        return 0
    } else if(rock === "paper") {
        return 2
    } else { return 5}
}

// write a function that takes both inputs and returns the winner

function playRPS() {
const player = playerSelection()
const cpu = computerPlay()
let answer = ""
let cpuWin = 0
let playerWin = 0
    
if (player === 5 ){
     answer = "Please write `Rock`, `Paper` or `Scissors`"} 
     
     else if (player === cpu){
         answer = "The game is a Draw!"
    } 
    else if ((player === 1) && (cpu === 0)){
        answer = "You win!!! Rock beats Scissors!"
        //return "Player Loss"
    }
     else if ((player === 0) && (cpu === 1)){
        answer = "You lose!!! Rock beats Scissors!"
        //return "Player Win"
    }
     else if ((player === 1) && (cpu === 2)){
        answer = "You lose!!! Paper beats Rock!"
        //return "Player Loss"
    }
    else if ((player === 2) && (cpu === 1)){
        answer = "You win!!! Paper beats Rock!"
        //return "Player Win"
    } else if ((player === 0) && (cpu === 2)){
        answer = "You Win!!! Scissors beats Paper"
     //   return "Player Win"
    }
    else if ((player === 2) && (cpu === 0)){
        answer = "You lose!!! Scissors beats Paper"
        //return "Player Loss"
    }    
    else {
        answer =  "Error 10"
        //return "Error 10"
    }

    
/*if (playRPS === "Player Win"){
    playerWin += 1
} else if (playRPS === "Player Loss"){
    cpuWin += 1
} else {}*/
    document.querySelector("h4").textContent = `Player score: ${playerWin}, Computer score: ${cpuWin} `
    document.querySelector("h3").textContent = answer
   
}


document.querySelector("button").addEventListener('click', playRPS)