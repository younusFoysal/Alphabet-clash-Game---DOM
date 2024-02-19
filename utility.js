function hideElementById(elementId) {
    const element =  document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element =  document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    //const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    const randomNum =  Math.random()*25;
    const index = Math.round(randomNum)

    const alphabet = alphabets[index];
    //console.log(index, alphabet)
    return alphabet;
}

function setBackgroundColorByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


