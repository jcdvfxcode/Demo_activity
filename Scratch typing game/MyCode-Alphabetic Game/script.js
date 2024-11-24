// Game variables
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetter = '';
let score = 0;
let currentLetterIndex = 0;
let correctTyped = 0;
let totalTyped = 0;
let progress = 0;
let gameActive = false;

// HTML elements
const letterDisplay = document.getElementById('letterDisplay');
const scoreDisplay = document.getElementById('score');
const accuracyDisplay = document.getElementById('accuracy');
const progressDisplay = document.getElementById('progress');
const userInput = document.getElementById('user-input');
const startButton = document.getElementById('start-button');

// Start the Game
startButton.addEventListener('click', startGame);


// Start Function
function startGame() {
   
    // Show first random letter
    generateLetter();

    // Focus input field for typing
    userInput.value = '';                   //?
    userInput.focus();

    // Disable start button to prevent starting a new game while playing
    startButton.disabled = true;

}



// // Handle user input
// userInput.addEventListener("input", function() {
//     if (!gameActive) return;

//      const letterInput = userInput.value.toUpperCase();
//      const currentInput = alphabet[currentLetterIndex];

//      if (letterInput === currentInput) {
//         correctTyped++;
//         totalTyped++;
//         currentLetterIndex++;

//         if (currentLetterIndex < alphabet.length) {
//         generateLetter();
//         } else {
//             alert ("test!")
//         }

//     // Rest the input field
//     userInput.value = '';
//     } else {
//         totalTyped++;
//     }

//     updateStats();

//  });
//  // end of handle user input



// Generate a random letter to display
function generateLetter() {
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    letterDisplay.textContent = currentLetter;
  }



// Check if the typed letter matches the displayed letter
function checkInput(event) {
    const typedLetter = event.key.toUpperCase();

    // Ignore non-letter keys
    if (!alphabet.includes(typedLetter)) return;

    totalTyped++;
    

    if (typedLetter === currentLetter) {
        score++;
        correctTyped++;
        generateLetter(); // Generate a new letter
    } 
    userInput.value = "";
    updateStats();
    
}



// Update the score, accuracy, and progress
function updateStats() {
    scoreDisplay.textContent = `Score: ${score}`;

    // Calculate accuracy (correct / total)
    const accuracy = (correctTyped / totalTyped) * 100 || 0;   
    const progress = `${currentLetterIndex}/${alphabet.length}`;    // to measure the total count of "alphabet"(26)

    accuracyDisplay.textContent = accuracy.toFixed(2);
    progressDisplay.textContent = progress;
}

// Event listener for keypresses
document.addEventListener("keydown", checkInput);

// Initialize the game when the page loads
startGame();





  


