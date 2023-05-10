var readlineSync = require('readline-sync');

let score = 0;

let questions = [
    {
        question : 'Which one of these is the hottest planet in the solar system?',
        options : ['Mercury', 'Venus', 'Mars', 'Earth'],
        correctAnswer : 'Venus'
    },
    {
        question : 'What is the formula for Nitric Acid?',
        options : ['H^2NO^4', 'NO^2', 'HNO^3', 'NaSO^4'],
        correctAnswer : 'HNO^3'
    },
    {
        question : 'How many moons does saturn have?',
        options : ['20', '12', '67', '83'],
        correctAnswer : '83'
    },
    {
        question : 'Which of the following does not support a command line interface?',
        options : ['Android', 'Windows', 'Linux', 'MacOS'],
        correctAnswer : 'Android'
    },
    {
        question : 'Which one of the following is not an example of a herbivores animal?',
        options : ['Cow', 'Hyena', 'Rhino', 'Kangaroo'],
        correctAnswer : 'Hyena'
    },
    {
        question : 'Which country won the football world cup in 2018?',
        options : ['Australia', 'USA', 'Italy', 'France'],
        correctAnswer : 'France'
    },
    {
        question : 'How many players play in a match of Basketball?',
        options : ['5', '11', '7', '9'],
        correctAnswer : '5'
    },
    {
        question : 'Which of the following is not considered a foul in the game of Cricket?',
        options : ['Ball tampering', 'Obstructing the field', 'Handled the ball', 'Cover drive'],
        correctAnswer : 'Cover drive'
    },
    {
        question : 'The TATA Group was founded in which year?',
        options : ['1991', '1965', '1947', '1868'],
        correctAnswer : '1868'
    },
    {
        question : 'If the temperature in celsius is 40 degree, what would it be in Kelvin?',
        options : ['313.15', '273.15', '183.25', '202.50'],
        correctAnswer : '313.15'
    },
];

function simulateQuiz(questionNumber, question, options, correctAnswer) {
    let selectedAnswer = readlineSync.keyInSelect(options, `Question Number ${questionNumber} - ${question}`);
    if(options[selectedAnswer] === correctAnswer) {
        console.log(`\nDamn! You're a genius. +4 points.\n`);
        score += 4;
    }
    else {
        console.log('\nOh no. You lost a point.\n');
        score -= 1;
    }
}

let age = readlineSync.question('\nWhat\'s your age? ');

if(age >=18) {
    console.log('\nYou are eligible to play this quiz');

    for(let i = 0; i < questions.length; i++) {
        simulateQuiz(i+1, questions[i].question, questions[i].options, questions[i].correctAnswer);
    }
    console.log(`Drumrolls!!! Your final score is ${score} out of ${questions.length*4}.`);
}
else {
    console.log(`Access Denied! Wait another ${18-age} ${18-age > 1 ? 'years' : 'year'} to play this quiz`);
}
