var readlineSync = require('readline-sync');

let score = 0;

let questions = [
    {
        question : 'What is the capital of Russia?',
        options : ['Amsterdam', 'Moscow', 'Colombo', 'Kyiv'],
        correctAnswer : 'Moscow'
    },
    // {
    //     question : 'What is the capital of Italy?',
    //     answer : 'Rome'
    // },
    // {
    //     question : 'What is the capital of Sri Lanka?',
    //     answer : 'Colombo'
    // },
    // {
    //     question : 'What is the capital of Bangladesh?',
    //     answer : 'Dhaka'
    // },
    // {
    //     question : 'What is the capital of Japan?',
    //     answer : 'Tokyo'
    // },
    // {
    //     question : 'What is the capital of Egypt?',
    //     answer : 'Cairo'
    // },
    // {
    //     question : 'What is the capital of Uttar Pradesh?',
    //     answer : 'Lucknow'
    // },
    // {
    //     question : 'What is the capital of South Korea?',
    //     answer : 'Seoul'
    // },
    // {
    //     question : 'What is the capital of North Korea?',
    //     answer : 'Pyongyang'
    // },
    // {
    //     question : 'What is the capital of Indonesia?',
    //     answer : 'Jakarta'
    // }
];

function simulateQuiz(questionNumber, question, options, correctAnswer) {
    let selectedAnswer = readlineSync.keyInSelect(options, `Question Number ${questionNumber} - ${question}`);
    // animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
    // index = readlineSync.keyInSelect(animals, 'Which animal?');
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
