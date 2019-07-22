
function getThrow() {
    
    //referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random    
    const randomNumber = Math.floor(Math.random() * Math.floor(3));
    
    const computerThrow = getThrowFromNumber(randomNumber);
    
    return computerThrow;
}

function didPlayerWin(userThrow, opThrow) {
    if(userThrow === 'rock' && opThrow === 'scissors') {
        return true;
    }
    else if(userThrow === 'paper' && opThrow === 'rock') {
        return true;
    }
    else if(userThrow === 'scissors' && opThrow === 'paper') {
        return true;
    }
    else {
        return false;
    }}
    

function getThrowFromNumber(randomNumber) {
    if(randomNumber === 0) {
        return 'rock';
    }
    else if(randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

export { getThrow, getThrowFromNumber, didPlayerWin };