// question.js
const Table = require('cli-table');
const chalk = require('chalk');
const questionsEasyOrig = require('./questionEasy.json');
const questionsMiddleOrig = require('./questionMiddle.json');
const questionsHardOrig = require('./questionHard.json');
const steps = require('./steps');
const reader = require("readline-sync");

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

let askQuestion = (questionIndex = 0, key) => {
    console.clear();
    steps.getElement(questionIndex);

    //questionArrEasy[0]: az első kérdés a jsonból
    console.log(allQuestionsShuffled[questionIndex].question);


    // instantiate
    var table = new Table({

        colWidths: [50, 50]
    });

    const aText = "a " + allQuestionsShuffled[questionIndex].answers[0].answer
    let markedKeyA = aText

    if (key === 'a') {
        markedKeyA = chalk.bgBlue(aText)
    }


    const bText = "b " + allQuestionsShuffled[questionIndex].answers[1].answer
    let markedKeyB = bText

    if (key === 'b') {
        markedKeyB = chalk.bgBlue(bText)
    }

    const cText = "c " + allQuestionsShuffled[questionIndex].answers[2].answer
    let markedKeyC = cText

    if (key === 'c') {
        markedKeyC = chalk.bgBlue(cText)
    }
    const dText = "d " + allQuestionsShuffled[questionIndex].answers[3].answer
    let markedKeyD = dText

    if (key === 'd') {
        markedKeyD = chalk.bgBlue(dText)
    }

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [markedKeyA, markedKeyB]
        , [markedKeyC, markedKeyD]
    );

    console.log(table.toString());
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
    console.clear();
    let halfOftheAnswers = [];

    let wrongCount = 0;
    const currentQuestion = allQuestionsShuffled[currentQuestionCount]

    console.log(currentQuestion.question);
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const currentWriteAnswer = currentQuestion.answers[i].mark + ' ' + currentQuestion.answers[i].answer
        if (currentQuestion.answers[i].correct) {
            halfOftheAnswers.push(currentWriteAnswer);
        } else if (wrongCount === 0) {
            halfOftheAnswers.push(currentWriteAnswer);
            wrongCount++
        } else {
            halfOftheAnswers.push(" ");
        }
    }

    var table = new Table({

        colWidths: [40, 40]
    });

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [halfOftheAnswers[0], halfOftheAnswers[1]],

        [halfOftheAnswers[2], halfOftheAnswers[3]]
    );

    console.log(table.toString());




}

let audienceAnswer = (questionIndex) => {
    let correctArray = [];
    let wrongArray = [];
    const currentQuestion = allQuestionsShuffled[questionIndex]
    console.log(currentQuestion.question);
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const currentWriteAnswer = currentQuestion.answers[i].mark + ' ' + currentQuestion.answers[i].answer
        if (currentQuestion.answers[i].correct) {
            correctArray.push(currentWriteAnswer)
        } else {
            wrongArray.push(currentWriteAnswer)
        }
    }



    // instantiate
    var table = new Table({

        colWidths: [40, 40, 20]
    });

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        [correctArray[0], "||||||||||", "40%"],

        [wrongArray[0], "|||||", "20%"],

        [wrongArray[1], "|||||", "20%"],

        [wrongArray[2], "|||||", "20%"]
    );

    console.log(table.toString());
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
    askQuestion(getCurrentQuestionCount(), key)
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

    let yesNo = reader.keyIn("Biztos? ");
    if (yesNo === 'y') {
        if (givenAnswer.correct) {
            console.log(chalk.bgGreen("helyes"));

            if (steps.stepsArr.length > currentQuestionCount + 1) {
                currentQuestionCount++;
                askQuestion(currentQuestionCount);
            }
        } else {
            console.log(chalk.bgRed("A válasz helytelen volt, véget ért a játék"));
            process.exit();
        }
    } else {
        for (let i = 0; i < allQuestionsShuffled[currentQuestionCount].answers.length; i++) {
            if (allQuestionsShuffled[currentQuestionCount].answers[i].mark === yesNo) {
                givenAnswer = allQuestionsShuffled[currentQuestionCount].answers[i];
            }
        }
        if (givenAnswer.correct) {
            console.log(chalk.bgGreen("helyes"));

            if (steps.stepsArr.length > currentQuestionCount + 1) {
                currentQuestionCount++;
                askQuestion(currentQuestionCount);
            }
        } else {
            console.log(chalk.bgRed("A válasz helytelen volt, véget ért a játék"));
            process.exit();
        }
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
