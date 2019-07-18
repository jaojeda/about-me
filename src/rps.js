import { getThrow } from './get-throw.js';
import { didPlayerWin } from './get-throw.js';

const throwButton = document.getElementById('throw-button');
const opHand = document.getElementById('hand');
const message = document.getElementById('message');
const winCountDisplay = document.getElementById('win-count');
const lossCountDisplay = document.getElementById('loss-count');

let winCounter = 0;
let lossCounter = 0;

throwButton.addEventListener('click', () => {
    const opThrow = getThrow();

    makeVisible(opHand, opThrow);

    const userSelection = document.querySelector('input:checked');

    const userThrow = userSelection.value;

    const draw = opThrow === userThrow;

    const win = didPlayerWin(userThrow, opThrow);

    if(draw) {
        displayMessage('Draw! Try again!');
    }
    else if(win) {
        displayMessage('Got me!');
        winCounter++;
        winCountDisplay.textContent = winCounter;
    } else {
        displayMessage('Sorry, wanna try again?');
        lossCounter++;
        lossCountDisplay.textContent = lossCounter;
    }
});

function makeVisible(elem, hand) {
    elem.classList.remove('invisible');
    const src = 'assets/' + hand + '.png';
    elem.src = src;
}

function displayMessage(msg) {
    message.textContent = msg;
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