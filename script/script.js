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
let cpuWin = 0
let playerWin = 0
// write a function that takes both inputs and returns the winner

function playRPS() {
const player = playerSelection()
const cpu = computerPlay()
let answer = ""

    
if (player === 5 ){
     answer = "Please write `Rock`, `Paper` or `Scissors`"} 
     
     else if (player === cpu){
         answer = "The game is a Draw!"
    } 
    else if ((player === 1) && (cpu === 0)){
        answer = "You win!!! Rock beats Scissors!"
        playerWin += 1
    }
     else if ((player === 0) && (cpu === 1)){
        answer = "You lose!!! Rock beats Scissors!"
        cpuWin += 1
    }
     else if ((player === 1) && (cpu === 2)){
        answer = "You lose!!! Paper beats Rock!"
        cpuWin += 1
    }
    else if ((player === 2) && (cpu === 1)){
        answer = "You win!!! Paper beats Rock!"
        playerWin += 1
    } else if ((player === 0) && (cpu === 2)){
        answer = "You Win!!! Scissors beats Paper"
        playerWin += 1
    }
    else if ((player === 2) && (cpu === 0)){
        answer = "You lose!!! Scissors beats Paper"
        cpuWin += 1
    }    
    else {
        answer =  "Error 10"
        
    }
    
    document.querySelector("h4").textContent = `Player score: ${playerWin}, Computer score: ${cpuWin} `
    document.querySelector("h3").textContent = answer
    reset()
   
}


document.querySelector("button").addEventListener('click', playRPS)


function reset(){
    if (playerWin === 5){
        playerWin = 0
        cpuWin = 0
        document.querySelector("h4").textContent = "You Win!"
    } else if (cpuWin === 5){
        playerWin = 0
        cpuWin =0
        document.querySelector("h4").textContent = "You Lose!"
    }
}