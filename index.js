// index
const Table = require('cli-table');
const chalk = require('chalk');
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
    console.log('Legyen Ön is milliomos!')
    const MAX_QUESTION_COUNT = steps.getLength();
    // console.log("Press q to exit, s to start")

    let audienceAsked = false;
    let phoneUsed = false;
    let halfUsed = false;
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
        let i = questions.getCurrentQuestionCount()
        while (i <= MAX_QUESTION_COUNT) {

            console.log('Megnézheted, hogy melyik szintnél tartasz, ha megnyomod az l betűt')
            if (halfUsed === false) {
                console.log('Használhatod a felezést - nyomd meg az f betűt');
            }
            if (phoneUsed === false) {
                console.log('Használhatod a telefont - nyomd meg az t betűt');
            }
            if (audienceAsked === false) {
                console.log('Használhatod a közönség segítségét - nyomd meg a k betűt');
            }


            if (i < MAX_QUESTION_COUNT) {
                key = reader.keyIn('Nyomd meg az egyik gombot a következők közül: a, b, c és d:   ');
                console.log('Vagy nyomd meg a q betűt a kilépéshez');
            }

            //itt válaszolt kérdésre
            if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {
                questions.checkAnswer(key);
                i++;
            } else if (key === 'q') {
                process.exit();
            } else if (key === 'l') {
                console.log('Szintek');
                steps.showLevel(questions.getCurrentQuestionCount());


            } else if (key === 'f') {
                console.log('felezés');
                if (halfUsed === false) {
                    questions.halfAnswer(questions.getCurrentQuestionCount());
                    halfUsed = true;
                } else {
                    console.log('A felezést már elhasználta');
                }
            } else if (key === 't') {
                console.log('telefon');
                if (phoneUsed === false) {
                    questions.telephoneAnswer(questions.getCurrentQuestionCount());
                    phoneUsed = true;
                } else {
                    console.log('A telefont már elhasználta');
                }

            } else if (key === 'k') {
                console.log('közönség');
                if (audienceAsked === false) {
                    questions.audienceAnswer(questions.getCurrentQuestionCount());
                    audienceAsked = true;
                } else {
                    console.log('A közönség segítségét már elhasználta');
                }
            }
            if (i === MAX_QUESTION_COUNT) {
                console.log('Gratulálunk,  Ön megnyerte a 40 millió Ft-ot!');
            }
        }
    }
}
main();
