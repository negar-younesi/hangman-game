class HangmanGame {
    constructor() {
        this.words = {
            'عمومی': ['never', 'break', 'that', 'bullet', 'under', 'house', 'water', 'light', 'world', 'music'],
            'حیوانات': ['cat', 'dog', 'bird', 'fish', 'lion', 'tiger', 'bear', 'wolf', 'horse', 'mouse'],
            'میوه‌ها': ['apple', 'banana', 'orange', 'grape', 'mango', 'lemon', 'peach', 'berry', 'melon', 'cherry'],
            'رنگ‌ها': ['red', 'blue', 'green', 'yellow', 'black', 'white', 'brown', 'pink', 'purple', 'orange']
        };
        
        this.currentWord = '';
        this.currentCategory = '';
        this.guessedLetters = [];
        this.mistakes = 0;
        this.maxMistakes = 6;
        this.score = 0;
        this.gameOver = false;
        
        this.initializeElements();
        this.createLetterButtons();
        this.bindEvents();
        this.startNewGame();
    }
    
    initializeElements() {
        this.lettersGrid = document.getElementById('letters-grid');
        this.hangmanImg = document.getElementById('hangman-img');
        this.wordClue = document.getElementById('word-clue');
        this.categoryText = document.getElementById('category-text');
        this.mistakesCount = document.getElementById('mistakes-count');
        this.scoreElement = document.getElementById('score');
        this.gameMessage = document.getElementById('game-message');
        this.messageText = document.getElementById('message-text');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.playAgainBtn = document.getElementById('play-again-btn');
    }
    
    createLetterButtons() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.lettersGrid.innerHTML = '';
        
        letters.forEach(letter => {
            const button = document.createElement('div');
            button.id = letter;
            button.textContent = letter;
            button.className = 'letter-btn';
            button.addEventListener('click', () => this.handleLetterClick(letter));
            this.lettersGrid.appendChild(button);
        });
    }
    
    bindEvents() {
        this.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.playAgainBtn.addEventListener('click', () => this.startNewGame());
        
        document.addEventListener('keydown', (event) => {
            if (this.gameOver) return;
            
            const letter = event.key.toUpperCase();
            if (/^[A-Z]$/.test(letter) && !this.guessedLetters.includes(letter)) {
                this.handleLetterClick(letter);
            }
        });
    }
    
    startNewGame() {
        this.gameOver = false;
        this.mistakes = 0;
        this.guessedLetters = [];
        
        this.selectRandomWord();
        this.resetLetterButtons();
        this.updateDisplay();
        this.hideMessage();
        
        this.mistakesCount.textContent = this.mistakes;
        this.hangmanImg.src = './images/hangman0.png';
    }
    
    selectRandomWord() {
        const categories = Object.keys(this.words);
        this.currentCategory = categories[Math.floor(Math.random() * categories.length)];
        const categoryWords = this.words[this.currentCategory];
        this.currentWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
        
        this.categoryText.textContent = this.currentCategory;
    }
    
    resetLetterButtons() {
        const buttons = this.lettersGrid.querySelectorAll('.letter-btn');
        buttons.forEach(button => {
            button.classList.remove('used', 'correct');
            button.disabled = false;
        });
    }
    
    handleLetterClick(letter) {
        if (this.gameOver || this.guessedLetters.includes(letter)) return;
        
        this.guessedLetters.push(letter);
        const button = document.getElementById(letter);
        button.classList.add('used');
        button.disabled = true;
        
        if (this.currentWord.toUpperCase().includes(letter)) {
            button.classList.add('correct');
            this.updateDisplay();
            this.checkWin();
        } else {
            this.mistakes++;
            this.mistakesCount.textContent = this.mistakes;
            this.updateHangmanImage();
            this.checkLoss();
        }
    }
    
    updateDisplay() {
        const display = this.currentWord
            .toUpperCase()
            .split('')
            .map(letter => this.guessedLetters.includes(letter) ? letter : '_')
            .join(' ');
        
        this.wordClue.textContent = display;
    }
    
    updateHangmanImage() {
        this.hangmanImg.src = `./images/hangman${this.mistakes}.png`;
    }
    
    checkWin() {
        const wordLetters = this.currentWord.toUpperCase().split('');
        const allGuessed = wordLetters.every(letter => this.guessedLetters.includes(letter));
        
        if (allGuessed) {
            this.gameOver = true;
            this.score += 10;
            this.scoreElement.textContent = this.score;
            this.hangmanImg.src = './images/winner.png';
            this.showMessage('🎉 تبریک! شما برنده شدید!', 'success');
            this.playAgainBtn.style.display = 'inline-block';
        }
    }
    
    checkLoss() {
        if (this.mistakes >= this.maxMistakes) {
            this.gameOver = true;
            this.hangmanImg.src = './images/hangman6.png';
            this.showMessage(`😔 بازی تمام شد! کلمه صحیح: ${this.currentWord.toUpperCase()}`, 'error');
            this.playAgainBtn.style.display = 'inline-block';
        }
    }
    
    showHint() {
        if (this.gameOver) return;
        
        const unguessedLetters = this.currentWord
            .toUpperCase()
            .split('')
            .filter(letter => !this.guessedLetters.includes(letter));
        
        if (unguessedLetters.length > 0) {
            const hintLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
            this.handleLetterClick(hintLetter);
            this.score = Math.max(0, this.score - 5);
            this.scoreElement.textContent = this.score;
        }
    }
    
    showMessage(text, type) {
        this.messageText.textContent = text;
        this.gameMessage.style.display = 'block';
        this.gameMessage.className = `game-message ${type}`;
    }
    
    hideMessage() {
        this.gameMessage.style.display = 'none';
        this.playAgainBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HangmanGame();
});
