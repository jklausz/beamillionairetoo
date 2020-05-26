// index

const stepsArr = require('./mixedFiles/steps');

const questionArrEasy = require('./functions/questions').questionArrEasy;

console.log(questionArrEasy[0].question);
console.log(questionArrEasy[0].correct);
console.log(questionArrEasy[0].answer1);
console.log(questionArrEasy[0].answer2);
console.log(questionArrEasy[0].answer3);
console.log(questionArrEasy[0].answer4);
console.log(questionArrEasy[0].answers);

// kiválasztja random az egyik objektet, majd kiírja ezt az objektet:
let randomNumber = Math.floor(Math.random() * questionArrEasy.length);
console.log(questionArrEasy[randomNumber])

// kiírja a random objektből a questiont:
console.log(questionArrEasy[randomNumber].question);

// kiírja a helyes választ:
console.log(questionArrEasy[randomNumber].correct);

const main = () => {

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
        if (key === 'q') {
            process.exit();
        }
        if (gameInProgress === false && key.name === 's') {
            startGame();
        }
        if (key === 'a') {
            console.clear();
            checkAnswer(0);

        } else if (key === 'b') {
            console.clear();
            checkAnswer(1);

        } else if (key === 'c') {
            console.clear();
            checkAnswer(2);

        } else if (key === 'd') {
            console.clear();
            checkAnswer(3);
        }
    });

};


main();
