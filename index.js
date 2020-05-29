// index

//importálja a question.js-t és a readline-sync-et:
const questions = require('./questions');
const reader = require("readline-sync");
const steps = require('./steps');
// kiválasztja random az egyik objektet, majd kiírja ezt az objektet:
// let randomNumber = Math.floor(Math.random() * questionArrEasy.length);
// console.log(questionArrEasy[randomNumber])

// kiírja a random objektből a questiont:
// console.log(questionArrEasy[randomNumber].question);

// kiírja a helyes választ:
// console.log(questionArrEasy[randomNumber].correct);

const main = () => {
    const MAX_QUESTION_COUNT = steps.getLength();
    // console.log("Press q to exit, s to start")

    // kiírja a usernek, hogy nyomja meg a kilépéshez a q-t vagy s-t az indításhoz: 
    let key = reader.keyIn("Press q to exit, s to start: ");
    // a user ha a q betűt megnyomja, kilépteti a játékból:
    if (key === 'q') {
        process.exit();
        // a user ha az s betűt megnyomja, elindul a játék:
    } else if (key === 's') {
        //startGame();
        console.log("start game");


        //console.log(JSON.stringify(halfAnswer(questionIndex)));

        // felteszi a kérdést:
        questions.askQuestion(questions.getCurrentQuestionCount());

        // megkéri a usert, hogy a feltett kérdésre adjon egy választ az a, b, c, d gombok közül valamenyik lenyomásával, vagy a q betűvel ki tud lépni
        for (let i = questions.getCurrentQuestionCount(); i <= MAX_QUESTION_COUNT; i++) {

            key = reader.keyIn('Nyomd meg az egyik gombot a következők közül: a, b, c és d:   ');
            console.log('Vagy nyomd meg a q betűt a kilépéshez');


            //itt válaszolt kérdésre
            if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {
                questions.checkAnswer(key);
            } else if (key === 'q') {
                process.exit();
            } else if (key === 'f') {
                console.log('felezés');
                questions.halfAnswer(questions.getCurrentQuestionCount());
            }
        }
    }
}

main();
