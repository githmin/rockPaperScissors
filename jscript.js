console.log("Hello World! This is a Rock Paper Scissor Game!");




function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    if(randomNum===0){
        console.log("Rock");
    } else if (randomNum===1){
        console.log("Paper");
    } else {
        console.log("Scissor")
    }
}

 computerPlay()