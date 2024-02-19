// function play() {
//     console.log("Connected")
//     document.getElementById("homeScreen").classList.add('hidden')
//
//     //show play ground
//     document.getElementById("playGround").classList.remove('hidden')
// }


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
    showElementById('playGround')

    continueGame()
}