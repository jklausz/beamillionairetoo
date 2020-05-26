const stepsArr = [
    '1. szint - 5000 Ft',
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
];

console.log(stepsArr);

// 0. index = 5000 Ft

let actualStep = 0;

for (let i = 0; i < stepsArr.length; i++) {
    if (actualQuestion.answer[answerIndex] === actualQuestion.correct) {
        actualStep++;
    } else {
        console.log('Game over');
    }
}


console.log(actualStep);

// ponteredmények tömb:

let scoreResult = '';

// már kérdezett kérdések tömb (ne ismétlődjenek ugyanazok a kérdések):

let askedQuestionsArr = [];





module.exports = {
    stepsArr: stepsArr
}
