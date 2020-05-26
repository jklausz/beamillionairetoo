const questionsEasy = require('./questionEasy');

let actualQuestion = null;
let askedQuestions = [];

function askQuestion() {
    //benne van-e mar a kerdes az askedQuestions-be?
    //nem -> akkor kerdezzuk es rakjuk bele
    //igen -> akkor kerdezzunk masikat
    //hozzadni a kerdes indexet askedQuestions
    //actualQuestion =  random question
    //return random question
}

function checkAnswer(userAnswer) {
    if(userAnswer === actualQuestion.correct) {
        return true
    } else {
        false
    }
}

[
    {
        "question": "Milyen színű a hó?",
        "answers": [
            "kek",
            "zold",
            "piros",
            "fehér"
        ],
        "correct": "fehér"
    },
    {
        "question": "Hány lába van a kutyának?",
        "answers": ["1", "5", "18", "4"],
        "correct": "4"
    },
    {
        "question": "Mi Magyarország fővárosa?",
        "answers": ["Bukarest", "Szeged", "Róma", "Budapest"],
        "correct": "Budapest"
    }
]


module.exports = {
    questionArrEasy: questionArrEasy
};
