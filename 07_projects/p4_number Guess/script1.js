const form = document.querySelector("form")
const random = (Math.random()*100).toFixed(0)
const guessFieldInput = document.querySelector("#guessField");
console.log(random)

let eligible = true

let chances = 10

    form.addEventListener("submit", function(e){
    const guess = guessFieldInput.value
    e.preventDefault();
    playGame(guess)
    // validateGuess(guess)
    // checkNum(guess)
})

function playGame(userGuess){
    if(chances<=0){
        alert(`YOU LOST! number was ${random}`)
        eligible = false
    }
    else(validateGuess(userGuess))
}

function checkNum(userGuess){
    if(userGuess == random){
        alert(`you won! random number was: ${random}`)
    }
    else{
        alert(`wrong number`)
        --chances
        alert(`chances left: ${chances}`)
    }
}

function validateGuess(userGuess){
    if(isNaN(userGuess)){
        alert("not a number!")
    }
    else if(userGuess<0){
        alert("less than zero not allowed")
    }
    else{
        checkNum(userGuess)
    }
}