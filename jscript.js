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
        computerGuess = 0;
        pcRock();
        return computerGuess;
    } else if (randomNum===1){
        console.log("Computer Guess is Paper");
        computerGuess = 1;
        pcPaper();
        return computerGuess;
    } else {
        console.log("Computer Guess is Scissor")
        computerGuess = 2;
        pcScissor();
        return computerGuess;
    }
}

function pcRock(){
    var pcRock = document.getElementById('rightImgID');
    if(pcRock.src !='./assets/rock.png'){
        pcRock.src = './assets/rock.png'
    }
 }

 function pcPaper(){
    var pcPaper = document.getElementById('rightImgID');
    if(pcPaper.src !='./assets/paper.png'){
        pcPaper.src = './assets/paper.png'
    }
 }

 function pcScissor(){
    var pcScissor = document.getElementById('rightImgID');
    if(pcScissor.src !='./assets/scissor.png'){
        pcScissor.src = './assets/scissor.png'
    }
 }



function comparingCode(){
    if (userInput==="rock" && computerGuess===0){
        console.log("Tie");
        winDisplayTie();
    } else if (userInput==="paper" && computerGuess===1){
        console.log("Tie");
        winDisplayTie();
    } else if (userInput==="scissor" && computerGuess===2){
        console.log("Tie");
        winDisplayTie();
    } else if (userInput==="rock" && computerGuess===1){
        console.log("Computer Wins the round");
        winDisplayPc();
        pcMarksUpdater();
        pcMarks++;
        return pcMarks;
    } else if (userInput==="rock" && computerGuess===2){
        console.log("User Wins the round");
        playerMarksUpdater();
        winDisplayUser();
        userMarks++;
        return userMarks;
    } else if (userInput==="paper" && computerGuess===0){
        console.log("User Wins the round");
        playerMarksUpdater();
        winDisplayUser();
        userMarks++;
        return userMarks;
    } else if (userInput==="paper" && computerGuess===2){
        console.log("Computer Wins the round");
        winDisplayPc();
        pcMarksUpdater();
        pcMarks++;
        return pcMarks;
    } else if (userInput==="scissor" && computerGuess===0){
        console.log("Computer Wins the round");
        winDisplayPc();
        pcMarksUpdater();
        pcMarks++;
        return pcMarks;
    } else if (userInput==="scissor" && computerGuess===1){
        console.log("User Wins the round");
        playerMarksUpdater();
        winDisplayUser();
        userMarks++;
        return userMarks;
    }else {
        console.log("Invalid");
    }
}

rock.addEventListener('click', function () {
    rockUpdate();
	clicks = ++clicks;
    console.log("Clicks " , clicks);

});

paper.addEventListener('click', function () {
    paperUpdate();
	clicks = ++clicks;
    console.log("Clicks " , clicks);
});


s.addEventListener('click', function () {
    scissorUpdate();
	clicks = ++clicks;
    console.log("Clicks " , clicks);
});

function rockUpdate(){
   var scissorUpdate = document.getElementById('leftImgID');
   if(scissorUpdate.src !='./assets/rock.png'){
       scissorUpdate.src = './assets/rock.png'
   }
 }

function paperUpdate(){
    var scissorUpdate = document.getElementById('leftImgID');
    if(scissorUpdate.src !='./assets/paper.png'){
        scissorUpdate.src = './assets/paper.png'
    }
 }
 
 function scissorUpdate(){
    var scissorUpdate = document.getElementById('leftImgID');
    if(scissorUpdate.src !='./assets/scissor.png'){
        scissorUpdate.src = './assets/scissor.png'
    }
 }

function winDisplayUser(){
     var winnerDisplay = document.getElementById('winnerDisplay');
     winnerDisplay.textContent = "You Won!";
}

function winDisplayPc(){
    var winnerDisplay = document.getElementById('winnerDisplay');
    winnerDisplay.textContent = "Computer Won!";
}

function winDisplayTie(){
    var winnerDisplay = document.getElementById('winnerDisplay');
    winnerDisplay.textContent = "Its a Tie!";
}


function playerMarksUpdater(){
    var playerUpdater = document.getElementById('playerMarksCounterID');
    playerUpdater.textContent = userMarks;
}

function pcMarksUpdater(){
    var pcUpdater = document.getElementById('computerMarksCounterID');
    pcUpdater.textContent = pcMarks;
}