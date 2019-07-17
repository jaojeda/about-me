function compareNumbers(guess) {
    if(guess > 4) {
        return 1;
    }
    else if(guess === 4) {
        return 0;
    }
    else {
        return -1;
    }
    
};

export default compareNumbers;