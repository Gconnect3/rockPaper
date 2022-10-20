// Rock paper Scissors



// put a smurf on the images to play the game!
//Gave values to player input as follows:
//Scissors = 0
//Rock = 1
//Paper = 2
document.querySelector("#rock").addEventListener('click', () => {playRPS(1)})
document.querySelector("#paper").addEventListener('click', () => {playRPS(2)})
document.querySelector("#scissors").addEventListener('click',() => {playRPS(0)})

// wrote variables keeping track of the score
let cpuWin = 0
let playerWin = 0

//return a random number: 1,2 or 3 as computer response  
function computerPlay() {
    const random = Math.floor(Math.random()*3);
    return random
}

// write a function that takes both inputs and returns the winner

function playRPS(player) {
const cpu = computerPlay()
let answer = ""

    if (player === cpu){
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
        answer =  "Error, check logs!"
        
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