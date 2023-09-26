//PLAYER
const playerRock = document.querySelector('.game__player-rock');
const playerPaper = document.querySelector('.game__player-paper');
const playerScissors = document.querySelector('.game__player-scissors');
//PC
const pcRock = document.querySelector('.pc_rock');
const pcPaper = document.querySelector('.pc_paper');
const pcScissors = document.querySelector('.pc_scissors');
const pcChose = document.querySelector('.pc_chose');

const result = document.querySelector('.result');
const score = document.querySelector('.scoreTitle');
const newGameBtn = document.querySelector('.new_game_btn');

let count = 0;

checkWinner();
const opponentArr = ['rock', 'paper', 'scissors'];

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function checkWinner(){
    if(playerRock.onclick = () =>{
        clearPC();
        if(opponentArr[randomInteger(0,3)] == 'rock') {
            pcChose.style = 'display: block';
            pcRock.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a rock';
            result.innerHTML = 'Draw!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 0;
            score.innerHTML = count;
        }
        else if (opponentArr[randomInteger(0,3)] == 'paper'){
            pcChose.style = 'display: block';
            pcPaper.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a paper';
            result.innerHTML = 'Lose!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count -= 1;
            score.innerHTML = count;
        }
        else {
            pcChose.style = 'display: block';
            pcScissors.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a scissors';
            result.innerHTML = 'Win!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 1;
            score.innerHTML = count;
        }
    });

    if(playerScissors.onclick = () =>{
        if(opponentArr[randomInteger(0,3)] == 'rock'){
            pcChose.style = 'display: block';
            pcRock.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a rock';
            result.innerHTML = 'Lose!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count -= 1;
            score.innerHTML = count;
        }
        else if (opponentArr[randomInteger(0,3)] == 'paper'){
            pcChose.style = 'display: block';
            pcPaper.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a paper';
            result.innerHTML = 'Win!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 1;
            score.innerHTML = count;
        }
        else{
            pcChose.style = 'display: block';
            pcScissors.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a scissors';
            result.innerHTML = 'Draw!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 0;
            score.innerHTML = count;
        }
    });
    
    if(playerPaper.onclick = () =>{
        if(opponentArr[randomInteger(0,3)] == 'rock'){
            pcChose.style = 'display: block';
            pcRock.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a rock';
            result.innerHTML = 'Win!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 1;
            score.innerHTML = count;
        }
        else if (opponentArr[randomInteger(0,3)] == 'paper'){
            pcChose.style = 'display: block';
            pcPaper.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a paper';
            result.innerHTML = 'Draw!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count += 0;
            score.innerHTML = count;
        }
        else {
            pcChose.style = 'display: block';
            pcScissors.style = 'display: block';
            result.style = 'display: block';
            newGameBtn.style = 'display: block';

            pcChose.innerHTML = 'PC picked a scissors';
            result.innerHTML = 'Lose!';
            banPlayerClicks();

            newGameBtn.onclick = () =>{
                allowPlayerClicks();
                clearPC();
            }

            count -= 1;
            score.innerHTML = count;
        }
    });
}

function clearPC(){
    pcRock.style = 'display: none';
    pcPaper.style = 'display: none';
    pcScissors.style = 'display: none';
    pcChose.style = 'display: none';
    result.style = 'display: none';
    newGameBtn.style = 'display: none';
}

function banPlayerClicks(){
    playerRock.style.pointerEvents = 'none';
    playerPaper.style.pointerEvents = 'none';
    playerScissors.style.pointerEvents = 'none';
}

function allowPlayerClicks(){
    playerRock.style.pointerEvents = 'auto';
    playerPaper.style.pointerEvents = 'auto';
    playerScissors.style.pointerEvents = 'auto';
}