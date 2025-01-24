const random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("resultParas");

const p = document.createElement("p");

let PrevGuess = [];
let numGuess = 1;
let playGame = true;
let chances = 10;



if (playGame == true) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    userValue = parseInt(userInput.value);
    // console.log(userValue)
    validateGuess(userValue);
    displayGuess(userValue)
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("enter a valid number.");
  } else if (guess > 100) {
    alert("number shouldnt be greater than 100");
  } else if (guess < 0) {
    alert("number shouldnt be shorter than 0");
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess == random) {
    alert(`you won! nubmer was: ${random}`);
    PrevGuess.push(guess)
    playGame = false;
    endGame()
} else {
    PrevGuess.push(guess)
    alert("wrong number!");
    --chances;
    if(chances<=0){
        endGame()
    }
  }
}

function displayGuess(guess) {
    guessSlot.innerHTML = PrevGuess
    remaining.innerHTML = chances
}

function displayMessage(message) {}

function newGame() {}

function endGame() {
        playGame = false
        userInput.disab
    
}
