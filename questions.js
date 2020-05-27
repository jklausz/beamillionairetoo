// question.js

const questionsEasy = require('./questionEasy.json');

let actualQuestion = null;
let askedQuestions = [];
let currentQuestionCount = 0;

function getCurrentQuestionCount() {
    return currentQuestionCount;
}

function askQuestion(questionIndex = 0) {
    //questionArrEasy[0]: az első kérdés a jsonból
    console.log(questionsEasy[questionIndex].question);
    console.log("a " + questionsEasy[questionIndex].answers[0].answer);
    console.log("b " + questionsEasy[questionIndex].answers[1].answer);
    console.log("c " + questionsEasy[questionIndex].answers[2].answer);
    console.log("d " + questionsEasy[questionIndex].answers[3].answer);
    //benne van-e mar a kerdes az askedQuestions-be?
    //nem -> akkor kerdezzuk es rakjuk bele
    //igen -> akkor kerdezzunk masikat
    //hozzadni a kerdes indexet askedQuestions
    //actualQuestion =  random question
    //return random question
}

function checkAnswer(key)
 {
    console.log("a " + key + " választ választottad")
    // kikeresi a nulladik kérdés válaszaiból
    // azt a választ, amelyiknek a betűjele megegyezik a lenyomott billentyűvel
    // const givenAnswer = questionArrEasy[0].answers.find(answer => answer.mark === key)
    let givenAnswer = null
    for (let i = 0; i < questionsEasy[currentQuestionCount].answers.length; i++) {
        if (questionsEasy[currentQuestionCount].answers[i].mark === key) {
            givenAnswer = questionsEasy[currentQuestionCount].answers[i];
        }
    }

    //helyes válasz?

    if (givenAnswer.correct) {
        console.log("helyes");
        currentQuestionCount++;
        askQuestion(currentQuestionCount);
    } else {
        console.log("helytelen");
    }
}

module.exports = {
    askQuestion: askQuestion,
    getCurrentQuestionCount: getCurrentQuestionCount,
    checkAnswer: checkAnswer
};

