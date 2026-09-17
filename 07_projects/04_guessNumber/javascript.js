let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {

    submit.addEventListener("click", function (event) {

        event.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);
    });
}


function validateGuess(guess) {

    if (isNaN(guess)) {

        alert("Please enter a valid number");

    } else if (guess < 1) {

        alert("Please enter a number greater than 1");

    } else if (guess > 100) {

        alert("Please enter a number less than 100");

    } else {

        checkGuess(guess);
    }
}


function checkGuess(guess) {

    if (numGuess === 10) {

        displayGuess(guess);
        displayMessage(`Game Over! Random number was ${randomNumber}`);

        endGame();

    } else {

        displayGuess(guess);

        if (guess === randomNumber) {

            displayMessage("You guessed it right! 🎉");

            endGame();

        } else if (guess < randomNumber) {

            displayMessage("Your guess is too low!");

        } else if (guess > randomNumber) {

            displayMessage("Your guess is too high!");
        }
    }
}


function displayGuess(guess) {

    userInput.value = "";

    prevGuess.push(guess);

    guessSlot.innerHTML = prevGuess.join(", ");

    numGuess++;

    remaining.innerHTML = 11 - numGuess;
}


function displayMessage(message) {

    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}


function endGame() {

    userInput.value = "";

    userInput.setAttribute("disabled", "");

    submit.setAttribute("disabled", "");

    p.classList.add("button");

    p.innerHTML = `<button id="newGame">Start New Game</button>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}


function newGame() {

    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click", function () {

        randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = [];

        numGuess = 1;

        guessSlot.innerHTML = "";

        remaining.innerHTML = "10";

        userInput.removeAttribute("disabled");

        submit.removeAttribute("disabled");

        startOver.removeChild(p);

        lowOrHi.innerHTML = "";

        playGame = true;
    });
}