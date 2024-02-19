// function play() {
//     console.log("Connected")
//     document.getElementById("homeScreen").classList.add('hidden')
//
//     //show play ground
//     document.getElementById("playGround").classList.remove('hidden')
// }

let score = 0;
function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;
    console.log('Button Pressed', playerPressed);

    if (playerPressed === 'Escape'){
        gameOver()
    }


    //get the expected to press
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    console.log("should press", currentAlphabet)

    //check matched or not
    if (playerPressed === currentAlphabet){

        //start a new round
        continueGame();
        removeBackgroundColorByID(currentAlphabet);

        //update score
        const currentScoreText = document.getElementById('score').innerText;
        const currentScoreNum = parseInt(currentScoreText);
        //const currentScore = getTextElementValueById('score');
        const currentScore = currentScoreNum + 1;
        document.getElementById('score').innerText = currentScore;



    }else {
        //alert("You lost A Life");

        //get the current life
        let life = document.getElementById("life").innerText - 1;
        console.log(life)
        document.getElementById('life').innerText = life;

        if (life === 0){
            gameOver();
            //setElementById('scoreFinal', score)

        }

    }

}
document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame() {
    // generate random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet)

    //show random alphabet
    document.getElementById('current-alphabet').innerText = alphabet;

    //set bg color
    setBackgroundColorByID(alphabet);

}


function play() {
    hideElementById('homeScreen')
    hideElementById('finalScoreSection')
    showElementById('playGround')


    //reset everything
    setElementById('life', 3);
    setElementById('score', 0);
    setElementById('scoreFinal', 0);
    removeBackgroundColorByID(alphabet)


    continueGame()
}

function gameOver() {
    hideElementById('playGround')
    showElementById('finalScoreSection')
    const lastScore = getTextElementValueById('score')
    //setElementById('scoreFinal', lastScore);
    document.getElementById('scoreFinal').innerText = lastScore;

}