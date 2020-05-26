const drawInit = () => {

    console.clear();

    console.log("Legyen Ön is Milliomos");
}

const startGame = () => {
    gameInProgress = true;
    drawQuestion();
}

const endGame = () => {

    process.stdin.pause();

}
