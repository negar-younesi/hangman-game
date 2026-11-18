const words = {
  General: [
    "never",
    "break",
    "bullet",
    "under",
    "house",
    "water",
    "light",
    "world",
    "music",
  ],
  Animals: [
    "tiger",
    "horse",
    "mouse",
    "elephant",
    "rabbit",
    "monkey",
    "dolphin",
  ],
  Fruits: ["apple", "banana", "orange", "grape", "mango", "lemon", "cherry"],
  Colors: ["purple", "yellow", "green", "orange", "white", "brown", "black"],
};

const MAX_MISTAKES = 6;
const HINT_COST = 5;
const WIN_POINTS = 10;

const lettersContainer = document.querySelector("#letters");
const image = document.querySelector(".image img");
const wordDisplay = document.querySelector("#word-display");
const categoryDisplay = document.querySelector("#category");
const scoreDisplay = document.querySelector("#score");
const mistakesDisplay = document.querySelector("#mistakes");
const message = document.querySelector("#message");
const hintButton = document.querySelector("#hint-btn");
const restartButton = document.querySelector("#restart-btn");

let currentWord = "";
let guessedLetters = [];
let mistakes = 0;
let score = 0;
let gameOver = false;

function createKeyboard() {
  lettersContainer.innerHTML = "";

  for (let code = 65; code <= 90; code++) {
    const letter = String.fromCharCode(code);
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = letter;
    button.dataset.letter = letter;
    button.className = "letter-btn";

    button.addEventListener("click", () => guessLetter(letter));

    lettersContainer.appendChild(button);
  }
}

function startGame() {
  const categories = Object.keys(words);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const categoryWords = words[randomCategory];

  currentWord =
    categoryWords[
      Math.floor(Math.random() * categoryWords.length)
    ].toUpperCase();

  guessedLetters = [];
  mistakes = 0;
  gameOver = false;

  categoryDisplay.textContent = randomCategory;
  mistakesDisplay.textContent = mistakes;

  image.src = "./images/hangman0.png";
  image.alt = "Hangman - 0 mistakes";

  message.textContent = "";
  message.className = "message";

  hintButton.disabled = false;

  createKeyboard();
  updateWord();
}

function guessLetter(letter) {
  if (gameOver || guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  const button = lettersContainer.querySelector(`[data-letter="${letter}"]`);

  if (button) {
    button.disabled = true;
    button.classList.add("used");
  }

  if (currentWord.includes(letter)) {
    button?.classList.add("correct");
    updateWord();
    checkWin();
  } else {
    mistakes++;
    mistakesDisplay.textContent = mistakes;
    updateImage();
    checkLoss();
  }
}

function updateWord() {
  const display = currentWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  wordDisplay.textContent = display;
}

function updateImage() {
  image.src = `./images/hangman${mistakes}.png`;
  image.alt = `Hangman - ${mistakes} mistakes`;
}

function checkWin() {
  const won = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  if (won) {
    score += WIN_POINTS;
    scoreDisplay.textContent = score;

    image.src = "./images/winner.png";
    endGame(`🎉 You Won! +${WIN_POINTS} points`, "success");
  }
}

function checkLoss() {
  if (mistakes >= MAX_MISTAKES) {
    endGame(`Game Over! The word was: ${currentWord}`, "error");
  }
}

function endGame(text, result) {
  gameOver = true;
  message.textContent = text;
  message.classList.add(result);

  lettersContainer.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });

  hintButton.disabled = true;
}

function showHint() {
  if (gameOver || score < HINT_COST) {
    if (score < HINT_COST && !gameOver) {
      message.textContent = "Not enough points for a hint!";
      message.className = "message error";
    }
    return;
  }

  const remainingLetters = [...new Set(currentWord.split(""))].filter(
    (letter) => !guessedLetters.includes(letter),
  );

  if (!remainingLetters.length) return;

  const randomLetter =
    remainingLetters[Math.floor(Math.random() * remainingLetters.length)];

  score -= HINT_COST;
  scoreDisplay.textContent = score;

  guessLetter(randomLetter);
}

function handleKeyboard(event) {
  if (event.ctrlKey || event.altKey || event.metaKey) return;

  if (/^[a-zA-Z]$/.test(event.key)) {
    guessLetter(event.key.toUpperCase());
  }
}

hintButton.addEventListener("click", showHint);
restartButton.addEventListener("click", startGame);
document.addEventListener("keydown", handleKeyboard);

startGame();
