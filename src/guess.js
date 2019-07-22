import compareNumbers from '../src/compareNumbers.js';

const userInput = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-button');
const triesDisplay = document.getElementById('tries-counter');
const winLose = document.getElementById('answer-message');

let tries = 4;

let correctNumber = Math.floor(Math.random() * 20) + 1;

submitButton.addEventListener('click', startGame);


function startGame(){

    
    if(userInput.value < 1 || userInput.value > 20){
        alert("That's not a number between 1 and 20!");
        return;
    } else {

        let guess = parseInt(userInput.value);

        tries -= 1;

        let triesMessage = 'You have ' + tries + ' left.';
        let answerMessage = '';

        if((compareNumbers(guess, correctNumber) === 0)) {
            submitButton.disabled = true;
            triesMessage = 'You got it with ' + tries + ' tries left.';
            answerMessage = 'You guessed right! Great job!';
            resultMessage(triesMessage, answerMessage);
            return;
        }
        if(tries !== 0) {
            if((compareNumbers(guess, correctNumber) === 1)) {
                answerMessage = 'You guessed too high! Try again.';
            }

            else if((compareNumbers(guess, correctNumber) === -1)) {
                answerMessage = 'You guessed low! Try again';
            }
        } else {

            submitButton.disabled = true;
            answerMessage = 'Sorry, you are all out of tries.';
        }


        resultMessage(triesMessage, answerMessage);
    }
}
function resultMessage(triesMessage, answerMessage) {
    triesDisplay.textContent = triesMessage;
    winLose.textContent = answerMessage;
}

