// Rock paper Scissors
// put a smurf on the button to play the game!
document.querySelector("button").addEventListener('click', playRPS)

//have a function call a random number 
function computerPlay() {
    const random = Math.floor(Math.random()*3);
    return random

    //failed function, I was trying to make it more human readable, the function works!
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

// write a function that takes in the player selection and is case insensitive

function playerSelection() {
    const playerInput = document.querySelector('input').value.toLowerCase()
    if (playerInput === "rock" || playerInput === "r"){
        return 1
    } else if (playerInput === "scissor" || playerInput === "scissors" || playerInput === "s"){
        return 0
    } else if(playerInput === "paper" || playerInput === "p") {
        return 2
    } else { return 5}
}

// wrote variables keeping track of the score
let cpuWin = 0
let playerWin = 0

// write a function that takes both inputs and returns the winner

function playRPS() {
const player = playerSelection()
const cpu = computerPlay()
let answer = ""

//Scissors = 0
//Rock = 1
//Paper = 2

if (player === 5 ){
     answer = `Please write "Rock" or (R) , "Paper" or (P), "Scissors" or (S)`} 
     
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
    // after the if statement resolves the text reflects the outcome
    document.querySelector("h4").textContent = `Player score: ${playerWin}, Computer score: ${cpuWin}`
    document.querySelector("h3").textContent = answer

    // at the end we run the reset function checking to see if the round end has been reached
    reset()
   
}





function reset(){
    if (playerWin === 5){
        playerWin = 0
        cpuWin = 0
        document.querySelector("h3").textContent = ""
        document.querySelector("h4").textContent = "You Win!"
    } else if (cpuWin === 5){
        playerWin = 0
        cpuWin =0
        document.querySelector("h3").textContent = ""
        document.querySelector("h4").textContent = "Rando-Tron wins!!"
    }
}