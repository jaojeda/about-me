import { getThrow, didPlayerWin } from './get-throw.js';

const throwButton = document.getElementById('throw-button');
const opHand = document.getElementById('hand');

let winCounter = 0;
let lossCounter = 0;

throwButton.addEventListener('click', throwDown);

function throwDown() {

    const opThrow = getThrow();
    makeVisible(opHand, opThrow);

    const userSelection = document.querySelector('input:checked');
    const userThrow = userSelection.value;

    const draw = opThrow === userThrow;
    const win = didPlayerWin(userThrow, opThrow);

    evaluateThrowdown(draw, win);
}

function evaluateThrowdown(draw, win) {
    if(draw) {
        displayMessage('message', 'Draw! Try again!');
    }
    else if(win) {
        displayMessage('message', 'Got me!');
        winCounter++;
        displayMessage('win-count', winCounter);
    }
    else {
        displayMessage('message', 'Sorry, wanna try again?');
        lossCounter++;
        displayMessage('loss-count', lossCounter);
    }
}

function makeVisible(elem, hand) {
    elem.classList.remove('invisible');
    const src = 'assets/' + hand + '.png';
    elem.src = src;
}

function displayMessage(id, msg) {
    console.log(id, msg);
    document.getElementById(id).textContent = msg;
}

//compare see opponent choice
    //click button
    //generate r p s
    //show image
    //give choice to "referee"

//choose r p s
    //click on choice
    //give choice to "referee"

//compare who beats who
    //take coice from both players
    //decided who beat who

//tally wins and losses
    //update score