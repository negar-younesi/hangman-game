"use strict";

const lettersContainer = document.querySelector(".letters");
const image = document.querySelector(".image img");
const clue = document.querySelector(".clue p");
const gameOverMessage = document.querySelector(".gameover p");
const attemptsDisplay = document.querySelector(".attempts span");
const restartButton = document.querySelector(".restart-btn");

const WORDS = ["never", "break", "that", "bullet", "under"];
const MAX_MISTAKES = 6;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

let randomWord = "";
let checkedLetters = new Set();
let mistakes = 0;
let previousWord = "";
let isGameOver = false;

// Create keyboard
function createKeyboard() {
  lettersContainer.innerHTML = "";

  for (const letter of ALPHABET) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = letter.toUpperCase();
    button.dataset.letter = letter;

    button.addEventListener("click", () => {
      letterHandler(letter);
    });

    lettersContainer.appendChild(button);
  }
}

// Select random word
function selectRandomWord() {
  const availableWords = WORDS.filter((word) => word !== previousWord);

  const pool = availableWords.length ? availableWords : WORDS;

  const selected = pool[Math.floor(Math.random() * pool.length)];

  previousWord = selected;

  return selected;
}

// Start game
function startGame() {
  randomWord = selectRandomWord();

  checkedLetters = new Set();
  mistakes = 0;
  isGameOver = false;

  image.src = "./images/hangman0.png";
  image.alt = "Hangman starting position";

  gameOverMessage.textContent = "";
  gameOverMessage.className = "";

  attemptsDisplay.textContent = mistakes;

  restartButton.style.display = "none";

  createKeyboard();
  updateWordDisplay();
}

// Handle letter
function letterHandler(letter) {
  letter = letter.toLowerCase();

  if (!/^[a-z]$/.test(letter)) return;
  if (isGameOver || checkedLetters.has(letter)) return;

  checkedLetters.add(letter);

  const button = lettersContainer.querySelector(`[data-letter="${letter}"]`);

  if (button) {
    button.disabled = true;
    button.classList.add("used");
  }

  if (randomWord.includes(letter)) {
    updateWordDisplay();
    checkIfWon();
  } else {
    mistakes++;
    updateAttempts();
    updateHangmanImage();
    checkIfLost();
  }
}

// Display word
function updateWordDisplay() {
  clue.textContent = [...randomWord]
    .map((letter) => (checkedLetters.has(letter) ? letter : "_"))
    .join(" ");
}

// Update attempts
function updateAttempts() {
  attemptsDisplay.textContent = mistakes;
}

// Update image
function updateHangmanImage() {
  image.src = `./images/hangman${mistakes}.png`;
}

// Check win
function checkIfWon() {
  if (![...randomWord].every((letter) => checkedLetters.has(letter))) {
    return;
  }

  image.src = "./images/winner.png";

  endGame(`Congratulations! You won! The word was "${randomWord}".`, "won");
}

// Check loss
function checkIfLost() {
  if (mistakes !== MAX_MISTAKES) return;

  clue.textContent = [...randomWord].join(" ");

  endGame(`Game Over! The word was "${randomWord}".`, "lost");
}

// End game
function endGame(message, result) {
  isGameOver = true;

  gameOverMessage.textContent = message;
  gameOverMessage.className = result;

  lettersContainer.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });

  restartButton.style.display = "inline-block";
}

// Physical keyboard support
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey) return;

  const key = event.key.toLowerCase();

  if (/^[a-z]$/.test(key)) {
    event.preventDefault();
    letterHandler(key);
  }
});

// Restart
restartButton.addEventListener("click", startGame);

// Initialize
startGame();
