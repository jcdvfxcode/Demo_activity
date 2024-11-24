// Game variables
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetter = '';
let score = 0;

// HTML elements
const letterDisplay = document.getElementById('letterDisplay');
const scoreDisplay = document.getElementById('score');

// Start the game by displaying a random letter
function startGame() {
  // Generate a random letter
  currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  letterDisplay.textContent = currentLetter;

  // Listen for keyboard input
  document.addEventListener('keydown', checkInput);
}

// Check if the typed letter matches the displayed letter
function checkInput(event) {
  if (event.key.toUpperCase() === currentLetter) {
    // Correct letter typed
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    startGame(); // Display a new letter
  }
}

// Start the game when the page loads
startGame();
