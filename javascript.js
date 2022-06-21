let userInput;
let counter = 0;
let counterM;
let userMarks;
let pcMarks;
let userTemp;
let pcTemp;


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    countCheck();
    userInput = "rock";
    console.log('User input is rock');
    computerPlay();
    counter = ++counter
    console.log(counter, "-----");
    comparingCode();

})

const paper = document.querySelector('#paper');
paper.addEventListener('click' , () => {
    countCheck();
    userInput = "paper";
    console.log('User input is paper');
    computerPlay();
    counter = ++counter
    console.log(counter);
    comparingCode();

})

const s = document.querySelector('#s');
s.addEventListener('click' , () => {
    countCheck();
    userInput = "scissor";
    console.log('User input is scissor');
    computerPlay();
    counter = ++counter
    console.log(counter);
    comparingCode();
})


console.log(userInput);

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    if(randomNum===0){
        console.log("Computer Guess is Rock");
        computerGuess = 0;
        return computerGuess;
    } else if (randomNum===1){
        console.log("Computer Guess is Paper");
        computerGuess = 1;
        return computerGuess;
    } else {
        console.log("Computer Guess is Scissor")
        computerGuess = 2;
        return computerGuess;
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

function countCheck(){
    
    if(counter = 5){

        if (userMarks < pcMarks) {
            console.log("PC Wins bish")
        }else {
            console.log("User Wins bish")
        }

    } else {
    
        console.log("counter is---------------------- "  ,counter);
        
    }
}