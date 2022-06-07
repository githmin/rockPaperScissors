console.log("Hello World! This is a Rock Paper Scissor Game!");

let computerGuess
let userMarks
let userInput

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    if(randomNum===0){
        console.log("Computer Guess is Rock");
        computerGuess = 0;
        return computerGuess;
    } else if (randomNum===1){
        console.log("Computer Guess is Paper");
        computerGuess = 1;
    } else {
        console.log("Computer Guess is Scissor")
        computerGuess = 2;
    }
}


function comparingCode(){
    if (userInput==="rock" && computerGuess===0){
        console.log("Tie");
    } else if (userInput==="paper" && computerGuess===1){
        console.log("Tie");
    } else if (userInput==="scissor" && computerGuess===2){
        console.log("Tie");
    } else if (userInput==="rock" && computerGuess===1){
        console.log("Computer Wins");
    } else if (userInput==="rock" && computerGuess===2){
        console.log("User Wins");
    } else if (userInput==="paper" && computerGuess===0){
        console.log("User Wins");
    } else if (userInput==="paper" && computerGuess===2){
        console.log("Computer Wins");
    } else if (userInput==="scissor" && computerGuess===0){
        console.log("Computer Wins");
    } else if (userInput==="scissor" && computerGuess===1){
        console.log("User Wins");
    }else {
        console.log("Invalid");
    }
}

function playerGuess() {
    userInput = window.prompt("Is it Rock , Paper or Scissors?");
    console.log("User Input is" ,userInput)
    return userInput;
}

for (let i = 0; i < 5; i++){
    playerGuess();
    computerPlay();
    comparingCode();
}