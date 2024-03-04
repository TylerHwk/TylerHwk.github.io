


window.addEventListener("load", chooseWord);
var letterCount = 0;
var Row = 0;
var wordToGuess;

function chooseWord(){
    wordToGuess = wordBank[Math.floor(Math.random()*wordBank.length)];
    //wordToGuess = "SHEEP";
    wordToGuess = wordToGuess.toUpperCase();
    //console.log(wordToGuess);
}


function addLetter(e){
    if(letterCount >= (Row+1) * 5){
        return;
    }
    var letterPressed = e.target.innerHTML;
    var box = document.getElementById(letterCount);
    box.innerHTML = letterPressed;
    letterCount++;
}


function removeLetter(){
    if(letterCount <= 5 * Row){
        return;
    }
    letterCount--;
    document.getElementById(letterCount).innerHTML = "";
}




function inWord(letter, word){
    var IN = false;
    for(let i=0; i<=word.length; i++){
        if(letter == word[i]){
            IN = true;
        }
    }
    return IN;
}

function flameAnime(el){  
    el.addEventListener("animationend", function() {
        el.style.animationName = 'flamesAnime';
        el.style.animationDuration = '2s';
        el.style.animationIterationCount =  'infinite';
    }, false);

}

function greenAnime(el){  
    el.addEventListener("animationend", function() {
        el.style.animationName = 'greenAnime';
        el.style.animationDuration = '2s';
        el.animationTimingFunction = "ease-in-out";
        el.style.animationIterationCount =  'infinite';
    }, false);

}

function checkWord(){

    var guessed = false;
    var Continue = false;
    var letterG;
    var btnL;
    //Checks to see if you continue
    if(!(letterCount % 5 == 0) || Row * 5 == letterCount){
        return;
    }

    //gets word guessed
    var guess = "";
    for(let o=1; o<=5; o++){
        letterG = document.getElementById(letterCount-o);
        guess = letterG.innerHTML + guess;
    }
    if(guess == wordToGuess){

        guessed = true;

    }

    //checks if in word bank
    allWords.forEach((w) => {
        if(w.toUpperCase() == guess){
            Continue = true;
        }
    })
    if(!Continue){
        PopUp("Not in list", 's');
        setTimeout(removePop, 1000);
        return;
    }
    removeListeners();

    // loops through letters and checks
    var tempWord = wordToGuess;
    for(let i=0; i<5; i++){
        
        // delays each check
        (function(i){
            window.setTimeout(function(){
                letterG = document.getElementById(letterCount - 5 + i);
                btnL = letterG.innerHTML;



                if(letterG.innerHTML == wordToGuess[i]){
                    letterG.style.backgroundColor = "#009400";
                    letterG.style.animationName = 'greenIncome';
                    letterG.style.animationDuration = '.5s';
                    letterG.style.animationTimingFunction = 'linear';
                    greenAnime(letterG);

                    tempWord = tempWord.replace(letterG.innerHTML, '');
                    document.getElementById(btnL).style.backgroundColor = '#39FF14';

                }
                else if(inWord(letterG.innerHTML, tempWord)){
                    letterG.style.animationName = 'flameStart';
                    letterG.style.animationDuration = '1s';
                    flameAnime(letterG);
                    
                    letterG.style.backgroundColor = "#FFF01F";
                    if(!(document.getElementById(btnL).style.backgroundColor == '#39FF14')){
                        document.getElementById(btnL).style.backgroundColor = '#FFF01F';
                    }
                    tempWord = tempWord.replace(letterG.innerHTML, '');
                } 
                else{
                    letterG.style.animationName = 'rotate';
                    letterG.style.animationDuration = '1s';
                    if(document.getElementById(btnL).style.backgroundColor == 'rgb(31, 81, 255)'){
                        document.getElementById(btnL).style.backgroundColor = '#3a3a3c';
                    }
                    letterG.style.backgroundColor = "#3a3a3c";
                }
                if(i == 4){
                    addListeners()

                    if(Row >= 6){
                        PopUp(wordToGuess);
                        removeListeners()
                    }
                    if(guessed){
                        PopUp("AWESOME!! You Guessed it!!!", 's');
                        removeListeners();
                    }
                }
            }, i * 750);
          }(i));
        
    }

    Row++;

}

function End(){



}

function PopUp(text, shake){
    var popUp = document.createElement("div");
    document.body.append(popUp);
    popUp.id = 'popUp';
    popUp.style.color = 'white';
    popUp.style.width = '190px';
    popUp.style.height = '40px';
    popUp.style.position = 'absolute';
    popUp.style.backgroundColor = '#ff1100';
    popUp.style.left = window.innerWidth/2 - 100 + 'px';
    popUp.style.top = '90px';
    //popUp.fontWeight = '2em'
    popUp.style.textAlign = "center";
    popUp.innerHTML = text;
    //popUp.style.animationName = 'shake';
    // popUp.animationDuration = "1s";
    if(shake == 's'){
        popUp.style.animationName = "shake";
        popUp.style.animationIterationCount = "8";
    }
}

// typing
function KeyInp(e){
    if(e.key == 'Backspace'){
        removeLetter();
        return;
    }
    if(e.key == 'Enter' && letterCount%5 == 0){
        checkWord();
        return;
    }
    if(letterCount >= (Row+1) * 5){
        return;
    }
    switch(e.key){
        case 'q':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;
            break;
        case 'w':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'e':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;
            break;
        case 'r':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 't':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'y':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'u':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'i':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'o':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'p':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'a':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 's':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'd':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'f':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'g':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'h':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'j':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'k':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'l':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'z':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'x':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'c':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'v':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'b':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'n':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case 'm':
            document.getElementById(letterCount).innerHTML = e.key.toUpperCase();
            letterCount++;break;
        case '9':
            document.getElementById(letterCount).innerHTML = e.key;
            letterCount++;
            break;
    }
}
window.addEventListener("keydown", KeyInp);
document.onclick = () => {
    removePop()
}
document.onmousedown = () => {
    removePop();
}

function removePop(){
    if(!(document.getElementById("popUp") == null)){
        document.getElementById("popUp").remove();
    }
}

function removeListeners(){
    window.removeEventListener("keydown", KeyInp);
    var btns = Array.from(document.getElementsByClassName('letters'))
    btns.forEach(el => {
        if(el.id == "ENTER"){
            el.removeEventListener("click", checkWord);
        }
        else if(el.id == "DEL"){
            el.removeEventListener("click", removeLetter);
        }else {
            el.removeEventListener("click", addLetter);
        }
    })
}

function addListeners(){
    window.addEventListener("keydown", KeyInp);
    var btns = Array.from(document.getElementsByClassName('letters'))
    btns.forEach(el => {
        if(el.id == "ENTER" ){
            el.addEventListener("click", checkWord);
        }
        else if(el.id == "DEL"){
            el.addEventListener("click", removeLetter);
        }else{
            el.addEventListener("click", addLetter);
        }
})
}

