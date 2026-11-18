## 🚀 Live Demo

Check out the live version of the game:

👉 [Play Hangman Game](https://negar-younesi.github.io/hangman-game/)
🎮 Hangman Game

A simple, interactive, and responsive Hangman Game built with HTML, CSS, and Vanilla JavaScript.

Challenge yourself to guess the hidden word one letter at a time. Be careful — you only have 6 incorrect attempts before the game is over!

✨ Features
🎯 Random word selection.
⌨️ Physical keyboard support.
🖱️ Interactive on-screen keyboard.
🔄 New Game functionality.
🚫 Prevents guessing the same letter multiple times.
❤️ Visual feedback for incorrect guesses.
🏆 Automatic win and loss detection.
📱 Responsive design for desktop and mobile devices.
♿ Basic accessibility support.
⚡ No external libraries or dependencies.
🛠️ Built With
HTML5 – Semantic structure and accessibility.
CSS3 – Responsive layout, styling, and animations.
JavaScript (ES6+) – Game logic and user interactions.
📸 Screenshots

<!-- Add your project screenshots here -->

<!--
![Game Screenshot](./screenshots/game.png)
-->

📂 Project Structure
text
hangman-game/
│
├── index.html
├── style.css
├── main.js
├── README.md
│
└── images/
├── hangman0.png
├── hangman1.png
├── hangman2.png
├── hangman3.png
├── hangman4.png
├── hangman5.png
├── hangman6.png
└── winner.png

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

You only need:

A modern web browser.
Git (optional).
A code editor such as Visual Studio Code (optional).
Installation
Clone the repository:
bash
git clone https://github.com/YOUR-USERNAME/hangman-game.git

Navigate to the project directory:
bash
cd hangman-game

Open the project in your code editor.
Run index.html in your browser.

You can also use the Live Server extension in Visual Studio Code for a better development experience.

🎮 How to Play
Start the game and a random word will appear as hidden letters.
Guess the word by clicking the letters on the screen or using your physical keyboard.
Correct guesses reveal the matching letters.
Incorrect guesses increase the mistake counter and update the Hangman illustration.
You have a maximum of 6 incorrect attempts.
Guess the complete word to win!
If you run out of attempts, the game reveals the correct word.
Click New Game to start another round.
⚙️ Customization

You can easily customize the game by editing the configuration in main.js.

Add or Remove Words

Modify the WORDS array to change the available words:

javascript
const WORDS = [
"never",
"break",
"that",
"bullet",
"under"
];

Change Maximum Attempts

You can change the number of allowed incorrect guesses:

javascript
const MAX_MISTAKES = 6;

Note: If you change the maximum attempts, make sure the corresponding Hangman images are available in the images directory.

🖼️ Game Assets

The images directory contains the illustrations used throughout the game.

Image Description
hangman0.png Initial game state
hangman1.png – hangman6.png Incorrect guess stages
winner.png Winning state

Make sure all image filenames and paths match the references in main.js.

🌐 Browser Compatibility

The game is designed to work with modern web browsers that support HTML5, CSS3, and modern JavaScript features.

🔮 Future Improvements

Some ideas for future versions:

Difficulty levels (Easy, Medium, Hard).
Word categories and themed challenges.
Score tracking and high scores.
Sound effects and animations.
Hint system.
Multiplayer mode.
Dark mode.
🤝 Contributing

Contributions, suggestions, and improvements are welcome!

If you have an idea to make the game better, feel free to fork the repository and submit a pull request.

📄 License

This project is available for educational and personal use.

Feel free to explore, modify, and improve the source code.

If you enjoyed this project, consider giving it a ⭐ on GitHub!

Made with ❤️ using HTML, CSS, and JavaScript.
