import isYes from '../src/isYes.js';

const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');


quizButton.onclick = function() {
    

    let name = '';
    
    const firstName = prompt('What\'s your first name?');
    name = name + firstName;
    
    const lastName = prompt('What\'s your last name?');
    name = name + ' ' + lastName;

    const confirmed = confirm('Are you sure you want to take the quiz ' + firstName + '?');
    if(confirmed === false) {
        return;
    }

    let correctAnswers = 0;

    const questionOne = prompt('Do I have dogs (Y/N)?');

    const correctQuestionOne = true;
    if(isYes(questionOne) === correctQuestionOne) {
        correctAnswers += 1;
    }
    
    const questionTwo = prompt('Do I paint (Y/N)?');

    const correctQuestionTwo = true;
    if(isYes(questionTwo) === correctQuestionTwo) {
        correctAnswers += 1;
    }

    const questionThree = prompt('Am I a Portland native (Y/N)?');

    const correctQuestionThree = false;
    if(isYes(questionThree) === correctQuestionThree) {
        correctAnswers += 1;
    }

    alert('See your results!');
    
    let response = 'Okay ' + name;
    

    if(correctAnswers === 3) {
        response += ', you got ' + correctAnswers + '/3 questions right. Great job!';
    }
    else {
        response += ', you got ' + correctAnswers + '/3 questions right. Try again.';
    }

    result.textContent = response;
};  