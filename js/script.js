const playerRock = document.querySelector('.game__player-rock');
const playerPaper = document.querySelector('.game__player-paper');
const playerScissors = document.querySelector('.game__player-scissors');

checkWinner();
const opponentArr = ['rock', 'paper', 'scissors'];

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function checkWinner(){
    if(playerRock.onclick = () =>{
        if(opponentArr[randomInteger(0,3)] == 'rock') console.log('R Draw R');
        else if (opponentArr[randomInteger(0,3)] == 'paper') console.log('R Lose P');
        else console.log('R Win S');
    });

    if(playerScissors.onclick = () =>{
        if(opponentArr[randomInteger(0,3)] == 'rock') console.log('S Lose R');
        else if (opponentArr[randomInteger(0,3)] == 'paper') console.log('S Win P');
        else console.log('S Draw S');
    });
    
    if(playerPaper.onclick = () =>{
        if(opponentArr[randomInteger(0,3)] == 'rock') console.log('P Win R');
        else if (opponentArr[randomInteger(0,3)] == 'paper') console.log('P Draw P');
        else console.log('P Lose S');
    });
}
