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
    stdin.on('data', (key)
 => {
        if (key === 'q') {
            process.exit();
        } else if (key === 's') {
            //startGame();
            console.log("start game");
            gameInProgress = true
        }

        if (gameInProgress && questions.getCurrentQuestionCount() < steps.getLength()) {


            //     console.log(questionArrEasy[1].question)

            // console.log(JSON.stringify(questionArrEasy[1]));

            questions.askQuestion(questions.getCurrentQuestionCount());
            // fájlból hívva:
            //  questions.askQuestion(questionArrEasy, currentQuestionCount);


            //itt válaszolt kérdésre
            if (key === 'a' || key === 'b' || key === 'c' || key === 'd') {


                questions.checkAnswer(key)
;

                //  console.clear()
                //itt fogsz indexet növelni a válaszok tömbben
                if (key === 'o') {
                    steps.moveToNextStep()
                } else if (key === 'p') {
                    console.log(steps.getCurrentStep())
                }
            }
        }
    })
}

main()
