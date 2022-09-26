'use strict';

// HTML Elements //
const message = document.querySelector(".message")
const number = document.querySelector(".number")
const scoreEl = document.querySelector(".score")
const body = document.querySelector("body")
const guessInputField = document.querySelector(".guess")

let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20

function guessingGame() {
    const guess = Number(guessInputField.value)

    // Validating Input Field
    if (Boolean(guess) === false) {
        message.textContent = "⛔ No Number!"
        return;
    }

    if (guess < 1 || guess > 20) {
        message.textContent = "⛔ Number out of range"
        return;
    }


    if (score > 1) {
        if (guess === secretNumber) {
            message.textContent = "🎉 Correct Number!"
            number.textContent = secretNumber
            number.style.width = "30rem"
            body.style.backgroundColor = "#60B347"

            calcHighScore(score)
        } else {
            if (guess > secretNumber) message.textContent = "📈 Too High!"
            else message.textContent = "📉 Too Low!"
            
            score--
            scoreEl.textContent = score
        }
    } else {
        message.textContent = "💥 You Lost the Game!"
        scoreEl.textContent = 0        
    }
}

function calcHighScore(score) {
    const highScore = document.querySelector(".highscore")
    const maxScore = Number(highScore.textContent)

    if (score > maxScore) highScore.textContent = score;
}


const restore = function() {
    score = 20
    secretNumber = Math.floor(Math.random() * 20) + 1
    
    // Resetting the GUI //
    message.textContent = "Start guessing..."
    number.textContent = "?"
    number.style.width = "15rem" 
    scoreEl.textContent = "20"
    guessInputField.value = ""
    body.style.backgroundColor = "#222"
}


// HTML Elements
const checkBtn = document.querySelector(".check")
const againBtn = document.querySelector(".again")

// Event Listeners
checkBtn.addEventListener("click", guessingGame)
againBtn.addEventListener("click", restore)