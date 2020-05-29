// question.js

const questionsEasyOrig = require('./questionEasy.json');
const steps = require('./steps');
//TODO: ha kérdés sorrendet variálnék, itt kell questionsEasy-t shuffle
const questionsEasy = questionsEasyOrig



let actualQuestion = null;
let askedQuestions = [];
let currentQuestionCount = 0;

let getCurrentQuestionCount = () => {
    return currentQuestionCount;
}

let askQuestion = (questionIndex = 0) => {
    steps.getElement(questionIndex);

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
    // console.log(JSON.stringify(halfAnswer(questionIndex)));
    audienceAnswer(questionIndex);
    telephoneAnswer(questionIndex);
}

let halfAnswer = (questionIndex) => {
    //let halfOftheAnswers = [];
    let wrongCount = 0
    const currentQuestion = questionsEasy[currentQuestionCount]

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const currentWriteAnswer = currentQuestion.answers[i].mark + ' ' + currentQuestion.answers[i].answer
        if (currentQuestion.answers[i].correct) {
            console.log(currentWriteAnswer);
        } else if (wrongCount === 0) {
            console.log(currentWriteAnswer)
            wrongCount++
        }
    }
}

let audienceAnswer = (questionIndex) => {
    const currentQuestion = questionsEasy[questionIndex]

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const currentWriteAnswer = currentQuestion.answers[i].mark + ' ' + currentQuestion.answers[i].answer
        if (currentQuestion.answers[i].correct) {
            console.log("a közönség 40%-a erre szavazott: ", currentWriteAnswer);
        } else {
            console.log("a közönség 20%-a erre szavazott: ", currentWriteAnswer);
        }
    }

}

let telephoneAnswer = (questionIndex) => {
    const currentQuestion = questionsEasy[questionIndex]

    let wrongAnswer;
    let correctAnswer;
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const currentWriteAnswer = currentQuestion.answers[i].mark + ' ' + currentQuestion.answers[i].answer
        if (currentQuestion.answers[i].correct) {
            correctAnswer = currentWriteAnswer;
        } else {
            wrongAnswer = currentWriteAnswer
        }
    }

    if (randomNumber >= 1 && randomNumber <= 70) {
        console.log("a telefonon válaszoló ezt mondta: ", correctAnswer)
    } else {
        console.log("a telefonon válaszoló ezt mondta: ", wrongAnswer)
    }
}
let checkAnswer = (key) => {
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
        console.log("A válasz helytelen volt, véget ért a játék");
        process.exit();
    }
}

module.exports = {
    askQuestion: askQuestion,
    getCurrentQuestionCount: getCurrentQuestionCount,
    checkAnswer: checkAnswer,
    halfAnswer: halfAnswer,
    telephoneAnswer: telephoneAnswer
};

