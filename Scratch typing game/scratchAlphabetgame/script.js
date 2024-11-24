// Game variables
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetter = '';
let score = 0;
let correctKeyPresses = 0;
let totalKeyPresses = 0;
let progress = 0;

// HTML elements
const letterDisplay = document.getElementById('letterDisplay');
const scoreDisplay = document.getElementById('score');
const accuracyDisplay = document.getElementById('accuracy');
const progressDisplay = document.getElementById('progress');
const userInput = document.getElementById('user-input');
const startButton = document.getElementById('start-button');

// Start the game
startButton.addEventListener('click', startGame);

// Start the game by displaying the first letter // Start game function
function startGame() {
  generateLetter();       // updateLetterDisplay(); test2
  // userInput.disabled = false; // Enable the input field
  // userInput.focus(); // Focus the input field for immediate typing
let correctKeyPresses = 0;
let totalKeyPresses = 0;
let progress = 0;

    
}

//(done) Generate a random letter to display
function generateLetter() {
  currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  letterDisplay.textContent = currentLetter;
}

// Check if the typed letter matches the displayed letter
function checkInput(event) {
  const typedLetter = event.key.toUpperCase();

  // Ignore non-letter keys
  if (!alphabet.includes(typedLetter)) return;

  totalKeyPresses++;
  
  if (typedLetter === currentLetter) {
    score++;
    correctKeyPresses++;
    generateLetter(); // Generate a new letter
  }

  updateStats();
}

// Update the score, accuracy, and progress
function updateStats() {
  scoreDisplay.textContent = `Score: ${score}`;
  
  // Calculate accuracy (correct / total)
  const accuracy = totalKeyPresses > 0 ? Math.round((correctKeyPresses / totalKeyPresses) * 100) : 0;
  accuracyDisplay.textContent = accuracy;
  
  // Progress: how many letters have been correctly typed (out of 26)
  progress = Math.min(score, 26); // Limit progress to a maximum of 26
  progressDisplay.textContent = `${progress}/26`;
}

// Event listener for keypresses
document.addEventListener('keydown', checkInput);

// Initialize the game when the page loads
startGame();
