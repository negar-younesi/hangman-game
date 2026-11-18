## 🚀 Live Demo

Check out the live version of the game:

👉 [Play Hangman Game](https://negar-younesi.github.io/hangman-game/)

🎮 Hangman Game

A simple, interactive, and responsive Hangman Game built with HTML5, CSS3, and Vanilla JavaScript.

Guess the hidden word before the hangman is complete! Choose from different word categories, earn points, use hints strategically, and challenge yourself.

🚀 Live Demo

Check out the live version of the game:

👉 Play Hangman Game

✨ Features
Multiple Categories: Guess words from General, Animals, Fruits, and Colors.
Interactive Keyboard: Play using your physical keyboard or on-screen letter buttons.
Random Word Selection: A random category and word are selected for each round.
Hint System: Reveal a random hidden letter for 5 points.
Scoring System: Earn 10 points for every successfully completed round.
Mistake Counter: You have a maximum of 6 incorrect guesses.
Visual Feedback: Hangman illustrations update with each incorrect guess.
Win & Lose Detection: Receive instant feedback when the game ends.
New Game: Start another round without refreshing the page.
Responsive Design: Optimized for desktop and mobile screens.
Compact Layout: Designed to keep the main game elements accessible within typical desktop viewports.
Accessibility: Includes keyboard focus indicators and reduced-motion support.
🛠️ Technologies
HTML5
CSS3
JavaScript (Vanilla JS)

No external libraries, frameworks, or dependencies are required.

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

🎯 How to Play
Open the game in your browser.
A random word and its category will be displayed.
Guess the hidden word by clicking the letters or using your keyboard.
Correct guesses reveal the matching letters.
Each incorrect guess adds one mistake.
You have a maximum of 6 incorrect guesses.
Use the Hint button to reveal a hidden letter at the cost of 5 points.
Earn 10 points when you successfully guess the word.
Click New Game to start another round.
🏆 Scoring Rules
Action Points
Successfully guess a word +10
Use a hint -5
Incorrect guess 0

Additional Rules:

You need at least 5 points to use a hint.
Each hint reveals one random unrevealed letter.
A hint counts as a guess and can reveal a letter even if it is incorrect.
Your score is preserved between rounds.
Starting a new game does not reset your accumulated score.
📚 Word Categories

The game currently includes four categories:

Category Example Words
General Never, Break, Bullet, Water, Music
Animals Tiger, Horse, Rabbit, Dolphin
Fruits Apple, Banana, Mango, Cherry
Colors Purple, Yellow, Green, White
🚀 Getting Started

No installation or additional dependencies are required.

Prerequisites

A modern web browser is all you need.

Installation
Clone the repository:
bash
git clone https://github.com/negar-younesi/hangman-game.git

Navigate to the project directory:
bash
cd hangman-game

Open index.html in your browser.

Alternatively, you can use the Live Server extension in Visual Studio Code.

📱 Responsive Design

The game features a clean and compact interface designed for different screen sizes.

Desktop: Centered game layout with a 13-column letter grid.
Mobile: Responsive layout with a 7-column letter grid.
Short screens: Reduced spacing and image sizes to make better use of available vertical space.
Accessibility: Visible keyboard focus indicators and reduced-motion preferences.
🎨 Customization
Adding New Words

You can add new words or categories by editing the words object in main.js.

javascript
const words = {
General: ["never", "break", "water"],
Animals: ["tiger", "horse", "rabbit"],
Technology: ["javascript", "computer", "browser"],
};

Changing Game Settings

You can customize the main game settings in main.js:

javascript
const MAX_MISTAKES = 6;
const HINT_COST = 5;
const WIN_POINTS = 10;

Customizing the Design

Edit style.css to modify colors, typography, spacing, button styles, and responsive layouts.

🖼️ Game Assets

The images/ directory contains the illustrations used during gameplay.

Make sure the following files are included:

hangman0.png through hangman6.png
winner.png
👩‍💻 Author

Negar Younesi

GitHub: @negar-younesi
Project Repository: hangman-game
🤝 Contributing

Suggestions, improvements, and contributions are welcome!

Fork the repository.
Create a new branch.
Make your changes.
Commit your changes.
Open a Pull Request.
⭐ Support

If you enjoy this project, consider giving it a star on GitHub!

Thanks for playing! 🎉




 
