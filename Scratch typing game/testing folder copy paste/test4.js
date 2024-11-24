// Game Variables
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetter = '';
let score = 0;
let incorrect = 0;
let totalKeyPresses = 0;
let correctKeyPresses = 0;

// HTML Elements
const letterDisplay = document.getElementById('letterDisplay');
const scoreDisplay = document.getElementById('score');
const accuracyDisplay = document.getElementById('accuracy');
const progressDisplay = document.getElementById('progress');
const startButton = document.getElementById('start-button');
const userInput = document.getElementById('user-input');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');

// Start the game
function startGame() {
  score = 0;
  incorrect = 0;
  totalKeyPresses = 0;
  correctKeyPresses = 0;
  userInput.disabled = false;
  userInput.focus();
  generateLetter();
  updateStats();
}

// Generate a random letter from the alphabet
function generateLetter() {
  currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  letterDisplay.textContent = currentLetter;
}

// Check if the key pressed matches the letter on the screen
function checkInput(event) {
  const typedLetter = event.key.toUpperCase();

  // Only accept alphabetic keys
  if (alphabet.includes(typedLetter)) {
    totalKeyPresses++;

    if (typedLetter === currentLetter) {
      score++;
      correctKeyPresses++;
      generateLetter(); // Generate new letter
    } else {
      incorrect++;
    }

    updateStats();
  }
}

// Update the score, accuracy, and progress
function updateStats() {
  userScore.textContent = score;
  computerScore.textContent = incorrect;

  // Calculate accuracy
  const accuracy = totalKeyPresses > 0 ? Math.round((correctKeyPresses / totalKeyPresses) * 100) : 0;
  accuracyDisplay.textContent = accuracy;

  // Progress (number of letters typed correctly)
  progressDisplay.textContent = `${Math.min(score, 26)}/26`;
}

// Event listener for key presses
document.addEventListener('keydown', checkInput);

// Start the game when the "Start Game" button is clicked
startButton.addEventListener('click', startGame);
