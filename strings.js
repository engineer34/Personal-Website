 /* ~~~~~~~~~~~ Chapter 8: Manipulating Data in 
Strings and Arrays - Guessing Game ~~~~~~~~~~~~ 
 The JavaScript code is located in 
strings.js */ 
// Array of mystery words
var words = ["dog", "cat", "bird", "horse"];

// Select a random word from the array
var randomIndex = Math.floor(Math.random() * words.length);
var secretWord = words[randomIndex];
var remainingLetters = secretWord.length;
var correctGuesses = "";
// Display asterisks for each letter in the secret word
var displayString = "*".repeat(secretWord.length);
document.getElementById("displayWord").textContent = displayString;

// Event listener for Submit Letter button
document.getElementById("buttonSubmitGuess").addEventListener("click", function() {
    var guess = document.getElementById("guessLetter").value.toLowerCase();
    if (!guess.match(/[a-z]/i)) {
        alert("Please enter a valid letter.");
        return;
    }
    if (guess.length !== 1) {
        alert("Please enter only one letter at a time.");
        return;
    }
    var newDisplayString = "";
    var letterFound = false;
    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess && displayString[i] === "*") {
            newDisplayString += guess;
            letterFound = true;
            remainingLetters--;
            correctGuesses += guess; // Store the correct guess
        } else {
            newDisplayString += (correctGuesses.includes(secretWord[i]) ? secretWord[i] : "*");
        }
    }
    if (!letterFound) {
        alert("Incorrect guess.");
    }
    document.getElementById("displayWord").textContent = newDisplayString;
    document.getElementById("guessLetter").value = "";
    if (remainingLetters === 0) {
        alert("You guessed correctly! The mystery word is '" + secretWord + "'.");
        // Reset game for a new word
        randomIndex = Math.floor(Math.random() * words.length);
        secretWord = words[randomIndex];
        correctGuesses = "";
        remainingLetters = secretWord.length;
        displayString = "*".repeat(secretWord.length);
        document.getElementById("displayWord").textContent = displayString;
    }
});