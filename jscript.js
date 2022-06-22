let userInput;
let counter = 0;
let counterM;
let userMarks = 0;
let pcMarks = 0;
let userTemp;
let pcTemp;
let clicks = 0 ;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    
    userInput = "rock";
    console.log('User input is rock');
    computerPlay();
    counterM= ++counter
    console.log(counter, "-----");
    comparingCode();

})

const paper = document.querySelector('#paper');
paper.addEventListener('click' , () => {
    userInput = "paper";
    console.log('User input is paper');
    computerPlay();
    counterM = ++counter
    console.log(counter, "-----");
    comparingCode();

})

const s = document.querySelector('#s');
s.addEventListener('click' , () => {
    userInput = "scissor";
    console.log('User input is scissor');
    computerPlay();
    counterM = ++counter
    console.log(counter, "-----");
    comparingCode();
})


function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
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
        console.log("Computer Wins the round");
        pcMarks = pcMarks++;
    } else if (userInput==="rock" && computerGuess===2){
        console.log("User Wins the round");
        userMarks = userMarks++;
    } else if (userInput==="paper" && computerGuess===0){
        console.log("User Wins the round");
        userMarks = userMarks++;
    } else if (userInput==="paper" && computerGuess===2){
        console.log("Computer Wins the round");
        pcMarks = pcMarks++;
    } else if (userInput==="scissor" && computerGuess===0){
        console.log("Computer Wins the round");
        pcMarks = pcMarks++;
    } else if (userInput==="scissor" && computerGuess===1){
        console.log("User Wins the round");
        userMarks = userMarks++;
    }else {
        console.log("Invalid");
    }
}

rock.addEventListener('click', function () {
	clicks = ++clicks;
    console.log("Clicks " , clicks);
});

paper.addEventListener('click', function () {
	clicks = ++clicks;
    console.log("Clicks " , clicks);
});

s.addEventListener('click', function () {
	clicks = ++clicks;
    console.log("Clicks " , clicks);
});
