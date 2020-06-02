const stepsArr = [
    {
        'levelName': '1. szint - 5000 Ft', 'canStop': false
    },
    { 'levelName': '2. szint - 10000 Ft', 'canStop': false },
    { 'levelName': '3. szint - 25000 Ft', 'canStop': false },
    { 'levelName': '4. szint - 50000 Ft', 'canStop': false },
    { 'levelName': '5. szint - 100000 Ft', 'canStop': true },
    { 'levelName': '6. szint - 200000 Ft', 'canStop': false },
    { 'levelName': '7. szint - 300000 Ft', 'canStop': false },
    { 'levelName': '8. szint - 500000 Ft', 'canStop': false },
    { 'levelName': '9. szint - 800000 Ft', 'canStop': false },
    { 'levelName': '10. szint - 1500000 Ft', 'canStop': true },
    { 'levelName': '11. szint - 3000000 Ft', 'canStop': false },
    { 'levelName': '12. szint - 5000000 Ft', 'canStop': false },
    { 'levelName': '13. szint - 10000000 Ft', 'canStop': false },
    { 'levelName': '14. szint - 20000000 Ft', 'canStop': false },
    { 'levelName': '15. szint - 40000000 Ft', 'canStop': false }

];


let getLength = () => {
    return stepsArr.length
}

//visszaadja a tomb indexedik elemet
let getElement = (index) => {
    console.log(stepsArr[index].levelName);
}

module.exports = {
    getLength: getLength,
    getElement: getElement,
    stepsArr: stepsArr
};
