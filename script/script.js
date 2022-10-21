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
const rock = 'img/rock.png'
const paper = 'img/paper.png'
const scissors = "img/scissors.png"
const playerImg = document.querySelector("#player")
const computerImg = document.querySelector("#computer")
const vs = document.querySelector('.vs')
vs.classList.remove('hidden')

//Scissors = 0
//Rock = 1
//Paper = 2

    if (player === cpu){
         answer = "The game is a Draw!"
         switch (player) {
            case 0:
                playerImg.src = scissors;
                computerImg.src = scissors;
                break;
            case 1:
                playerImg.src = rock;
                computerImg.src = rock;
                break;
            case 2:
                playerImg.src = paper;
                computerImg.src = paper;
                break; 
            default:
                playerImg.src = "";
                computerImg.src = "";
                break;
         }
    } 
    else if ((player === 1) && (cpu === 0)){
        answer = "You win! Rock beats Scissors!"
        playerImg.src = rock;
        computerImg.src = scissors;
        playerWin += 1
    }
     else if ((player === 0) && (cpu === 1)){
        answer = "You lose! Rock beats Scissors!"
        playerImg.src = scissors;
        computerImg.src = rock;
        cpuWin += 1
    }
     else if ((player === 1) && (cpu === 2)){
        answer = "You lose! Paper beats Rock!"
        playerImg.src = rock;
        computerImg.src = paper;
        cpuWin += 1
    }
    else if ((player === 2) && (cpu === 1)){
        answer = "You win! Paper beats Rock!"
        playerImg.src = paper;
        computerImg.src = rock;
        playerWin += 1
    } else if ((player === 0) && (cpu === 2)){
        answer = "You Win! Scissors beats Paper"
        playerImg.src = scissors;
        computerImg.src = paper;
        playerWin += 1
    }
    else if ((player === 2) && (cpu === 0)){
        answer = "You lose! Scissors beats Paper"
        playerImg.src = paper;
        computerImg.src = scissors;
        cpuWin += 1
    }    
    else {
        answer =  "Error, check logs!"
        
    }
    // after the if statement resolves the text reflects the outcome
    document.querySelector(".score").classList.remove('hidden')
    document.querySelector(".score-player").textContent = `${playerWin}`
    document.querySelector(".score-cpu").textContent = `${cpuWin}`
    document.querySelector("h3").textContent = answer
   


    // at the end we run the reset function checking to see if the round end has been reached
    reset()
   
}


function reset(){
    const vs = document.querySelector('.vs')

    if (playerWin === 5){
        playerWin = 0
        cpuWin = 0
        document.querySelector(".score").classList.add('hidden')
        vs.classList.add("hidden");
        document.querySelector("h3").textContent = "You Win!"
    } else if (cpuWin === 5){
        playerWin = 0
        cpuWin =0
        vs.classList.add("hidden");
        document.querySelector(".score").classList.add('hidden')
        document.querySelector("h3").textContent = "Rando-Tron wins!!"
    }
}