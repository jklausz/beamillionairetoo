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

    //meghatározza, hogy milyen hosszú a játék: money.length 
    const money = ['1. szint - 5000 Ft',
        '2. szint - 10000 Ft',
        '3. szint - 25000 Ft',
        '4. szint - 50000 Ft',
        '5. szint - 100000 Ft',
        '6. szint - 200000 Ft',
        '7. szint - 300000 Ft',
        '8. szint - 500000 Ft',
        '9. szint - 800000 Ft',
        '10. szint - 1500000 Ft',
        '11. szint - 3000000 Ft',
        '12. szint - 5000000 Ft',
        '13. szint - 10000000 Ft',
        '14. szint - 20000000 Ft',
        '15. szint - 40000000 Ft'
    ]


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

        let currentQuestionCount = 0

        if (gameInProgress && currentQuestionCount < money.length) {


            console.log(money[currentQuestionCount])
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

            askQuestion(questionArrEasy, currentQuestionCount);
            // fájlból hívva:
            //  questions.askQuestion(questionArrEasy, currentQuestionCount);



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
                    currentQuestionCount++
                } else {
                    console.log("helytelen")
                    gameInProgress = false;
                }

                //  console.clear()
                //itt fogsz indexet növelni a válaszok tömbben
		  if (key === 'o') {
       		     steps.moveToNextStep()
        	}
  	     	 else if (key === 'p') {
           	 console.log(steps.getCurrentStep())
        }
    };

};

main();
