// question.js

const questionsEasyOrig = require('./questionEasy.json');
const questionsMiddleOrig = require('./questionMiddle.json');
const questionsHardOrig = require('./questionHard.json');
const steps = require('./steps');


const shuffleArr = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

let easyShuffle = shuffleArr(JSON.parse(JSON.stringify(questionsEasyOrig)));
let middleShuffle = shuffleArr(JSON.parse(JSON.stringify(questionsMiddleOrig)));
let hardShuffle = shuffleArr(JSON.parse(JSON.stringify(questionsHardOrig)));

var size = 5;

/** 
[elem1, elem2]

[[elem1, elem2]]

[..tomb1, ...tomb2]

[elem1, elem2]
*/
let allQuestionsShuffled = [...easyShuffle.slice(0, size), ...middleShuffle.slice(0, size), ...hardShuffle.slice(0, size)]

let actualQuestion = null;
let askedQuestions = [];
let currentQuestionCount = 0;

let getCurrentQuestionCount = () => {
    return currentQuestionCount;
}

let askQuestion = (questionIndex = 0) => {
    steps.getElement(questionIndex);

    //questionArrEasy[0]: az első kérdés a jsonból
    console.log(allQuestionsShuffled[questionIndex].question);
    console.log("a " + allQuestionsShuffled[questionIndex].answers[0].answer);
    console.log("b " + allQuestionsShuffled[questionIndex].answers[1].answer);
    console.log("c " + allQuestionsShuffled[questionIndex].answers[2].answer);
    console.log("d " + allQuestionsShuffled[questionIndex].answers[3].answer);
    //benne van-e mar a kerdes az askedQuestions-be?
    //nem -> akkor kerdezzuk es rakjuk bele
    //igen -> akkor kerdezzunk masikat
    //hozzadni a kerdes indexet askedQuestions
    //actualQuestion =  random question
    //return random question
    // console.log(JSON.stringiqfy(halfAnswer(questionIndex)));
    // audienceAnswer(questionIndex);
    // telephoneAnswer(questionIndex);
}

let halfAnswer = (questionIndex) => {
    //let halfOftheAnswers = [];

    let wrongCount = 0;
    const currentQuestion = allQuestionsShuffled[currentQuestionCount]

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
    const currentQuestion = allQuestionsShuffled[questionIndex]

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
    const currentQuestion = allQuestionsShuffled[questionIndex]

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



// 1 jsonbe mindent bele
// 3 tömbbe szétszedni
// ShuffleArr fogad egy tömböt bemeneti argumentumként
// oda beírni, amit keverni akarok
// deklarálni egy változót, ami a kevert tömb lesz majd
// úgy inicializálni, hogy egyenlővé tenni vele a ShuffleArr fgv-t a kívánt bemeneti értékkel
// így a berakott tömb összekevert változata lesz a deklarált kevert tömb változó


let checkAnswer = (key) => {
    console.log("a " + key + " választ választottad")
    // kikeresi a nulladik kérdés válaszaiból
    // azt a választ, amelyiknek a betűjele megegyezik a lenyomott billentyűvel
    // const givenAnswer = questionArrEasy[0].answers.find(answer => answer.mark === key)
    let givenAnswer = null
    for (let i = 0; i < allQuestionsShuffled[currentQuestionCount].answers.length; i++) {
        if (allQuestionsShuffled[currentQuestionCount].answers[i].mark === key) {
            givenAnswer = allQuestionsShuffled[currentQuestionCount].answers[i];
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
    telephoneAnswer: telephoneAnswer,
    audienceAnswer: audienceAnswer,
    shuffleArr: shuffleArr
};
