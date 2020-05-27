// index

// const stepsArr = require('./steps.js');
const questionArrEasy = require('./questionEasy.json');
const steps = require('./steps');
const questions = require('./questions');

// console.log(questionArrEasy[0].question);
// console.log(questionArrEasy[0].correct);
// console.log(questionArrEasy[0].answers);

// kiválasztja random az egyik objektet, majd kiírja ezt az objektet:
// let randomNumber = Math.floor(Math.random() * questionArrEasy.length);
// console.log(questionArrEasy[randomNumber])

// kiírja a random objektből a questiont:
// console.log(questionArrEasy[randomNumber].question);

// kiírja a helyes választ:
// console.log(questionArrEasy[randomNumber].correct);

const main = () => {
    console.log("Press q to exit, s to start")
    const stdin = process.stdin;
    let gameInProgress = false
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
        if (key === 'q') {
            process.exit();
        }

        else if (key === 's') {
            //startGame();
            console.log("start game")
            gameInProgress = true
        }

        if (gameInProgress) {

            //     console.log(questionArrEasy[1].question)


            // console.log(JSON.stringify(questionArrEasy[1]));

            const askQuestion = (questionArrEasy, questionIndex = 0) => {
                //questionArrEasy[0]: az első kérdés a jsonból
                console.log(questionArrEasy[questionIndex].question)
                console.log("a " + questionArrEasy[questionIndex].answers[0].answer)
                console.log("b " + questionArrEasy[questionIndex].answers[1].answer)
                console.log("c " + questionArrEasy[questionIndex].answers[2].answer)
                console.log("d " + questionArrEasy[questionIndex].answers[3].answer)
            }

            askQuestion(questionArrEasy, 1);




            //itt válaszolt kérdésre
            if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {

                console.log("a " + key + " választ választottad")
                // kikeresi a nulladik kérdés válaszaiból 
                // azt a választ, amelyiknek a betűjele megegyezik a lenyomott billentyűvel
                // const givenAnswer = questionArrEasy[0].answers.find(answer => answer.mark === key)
                let givenAnswer = null
                for (let i = 0; i < questionArrEasy[0].answers.length; i++) {
                    if (questionArrEasy[0].answers[i].mark === key) {
                        givenAnswer = questionArrEasy[0].answers[i];
                    }
                }



                //helyes válasz?

                if (givenAnswer.correct) {
                    console.log("helyes")
                } else {
                    console.log("helytelen")
                }

                //  console.clear()
                //itt fogsz indexet növelni a válaszok tömbben
            } else if (key === 'o') {
                steps.moveToNextStep()
            } else if (key === 'p') {
                console.log(steps.getCurrentStep())
            }
        }
    });

};


main();
