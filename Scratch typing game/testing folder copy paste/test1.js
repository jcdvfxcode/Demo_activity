

// Game variables
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let currentLetterIndex = 0;
let correctTyped = 0;
let totalTyped = 0;
let startTime = null;
let gameActive = false;

// DOM elements
const letterDisplay = document.getElementById('letter-display');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const accuracyDisplay = document.getElementById('accuracy');
const progressDisplay = document.getElementById('progress');
const startButton = document.getElementById('start-button');

// Start the game
startButton.addEventListener('click', startGame);

// Start game function
function startGame() {
    // Reset game state
    currentLetterIndex = 0;     //correctKeyPresses
    correctTyped = 0;           // totalKeyPresses
    totalTyped = 0;             //progress
    startTime = Date.now();
    gameActive = true;
    
    // Show first letter
    updateLetterDisplay();
    
    // Reset stats
    updateStats();
    
    // Focus input field for typing
    userInput.value = '';
    userInput.focus();
    
    // Disable start button to prevent starting new game while playing
    startButton.disabled = true;
}

// Handle user input
userInput.addEventListener('input', function() {
    if (!gameActive) return;

    const typedLetter = userInput.value.toLowerCase();
    const currentLetter = letters[currentLetterIndex];

    if (typedLetter === currentLetter) {
        correctTyped++;
        totalTyped++;
        currentLetterIndex++;

        if (currentLetterIndex < letters.length) {
            updateLetterDisplay();
        } else {
            endGame();
        }

        // Reset the input field
        userInput.value = '';
    } else {
        totalTyped++;
    }

    updateStats();
});

// Update letter display
function updateLetterDisplay() {
    letterDisplay.textContent = letters[currentLetterIndex].toUpperCase();
}

// Update game stats
function updateStats() {
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
    const accuracy = (correctTyped / totalTyped) * 100 || 0;
    const progress = `${currentLetterIndex}/${letters.length}`;

    timeDisplay.textContent = timeElapsed;
    accuracyDisplay.textContent = accuracy.toFixed(2);
    progressDisplay.textContent = progress;
}

// End the game
function endGame() {
    gameActive = false;
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
    alert(`Game over! Time: ${timeElapsed} seconds. Accuracy: ${(correctTyped / totalTyped) * 100}%`);
    
    // Enable the start button for restarting the game
    startButton.disabled = false;
}


