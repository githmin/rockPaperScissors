console.log("Hello World! This is a Rock Paper Scissor Game!");

let computerGuess;
let userMarks;
let userInput;
let winner;
let pcMarks;
let numberOfGuesses;
let counter;
let varInput;


// function btnInput(){

//     const btnR = document.querySelector('#rock');
//     btnR.addEventListener('click', () => {
//     console.log("Rock Selected");
//     varInput = "rock";
//     return varInput;
//      });
//     const btnP = document.querySelector('#paper');
//     btnP.addEventListener('click', () =>{
//     console.log("Paper Selected");
//     varInput = "paper";
//     return varInput;
//     })
//     const btnS = document.querySelector('#scissor');
//     btnS.addEventListener('click' ,() => {
//     console.log("Scissor Selected");
//     varInput = "scissor";
//     return varInput;
//     })

// }


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
        pcMarks = pcMarks++;
    } else if (userInput==="rock" && computerGuess===2){
        console.log("User Wins");
        userMarks = userMarks++;
    } else if (userInput==="paper" && computerGuess===0){
        console.log("User Wins");
        userMarks = userMarks++;
    } else if (userInput==="paper" && computerGuess===2){
        console.log("Computer Wins");
        pcMarks = pcMarks++;
    } else if (userInput==="scissor" && computerGuess===0){
        console.log("Computer Wins");
        pcMarks = pcMarks++;
    } else if (userInput==="scissor" && computerGuess===1){
        console.log("User Wins");
        userMarks = userMarks++;
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



if (userMarks < pcMarks){
    winner = "The Computer"
}else {
    winner = "The User"
}
console.log("--------Winner is,", winner , "-------")