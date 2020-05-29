// index

const questions = require('./questions');
const reader = require("readline-sync");

// kiválasztja random az egyik objektet, majd kiírja ezt az objektet:
// let randomNumber = Math.floor(Math.random() * questionArrEasy.length);
// console.log(questionArrEasy[randomNumber])

// kiírja a random objektből a questiont:
// console.log(questionArrEasy[randomNumber].question);

// kiírja a helyes választ:
// console.log(questionArrEasy[randomNumber].correct);

const main = () => {
    const MAX_QUESTION_COUNT = 30
    // console.log("Press q to exit, s to start")

    let key = reader.keyIn("Press q to exit, s to start: ");
    if (key === 'q') {
        process.exit();
    } else if (key === 's') {
        //startGame();
        console.log("start game");
        gameInProgress = true;

        questions.askQuestion(questions.getCurrentQuestionCount());

        for (let i = questions.getCurrentQuestionCount(); i <= MAX_QUESTION_COUNT; i++) {
            key = reader.keyIn('Nyomd meg az egyik gombot a következők közül: a, b, c és d:   ');
            console.log('Vagy nyomd meg a q betűt a kilépéshez');
            //itt válaszolt kérdésre
            if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {
                questions.checkAnswer(key);
            } else if (key === 'q') {
                process.exit();
            }
        }
    }
}

main();
