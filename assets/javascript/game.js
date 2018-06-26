// Global Variables

// Array of Letters
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

// Game Counters
var winCounter = 0;
var loseCounter = 0;
var guessesLeft = 13;

// Holds the computer selected letter
var chosenLetter = "";

// Holds the wrong letters
var wrongGuesses = "";

// function that will start and reset the game
function startGame(){
    // Reset the guess back 
    guessesLeft = 13;

    // Letter gets randomly from alphabets list
    chosenLetter = alphabets[Math.floor(Math.random() * alphabets.length)];

    // Store the wrong guesses
    wrongGuesses = "";

    // Prints the guessLeft to 13
    document.getElementById("guesses-left").innerHTML = guessesLeft;

    // Clears the wrong guess
    document.getElementById("so-far").innerHTML = wrongGuesses;
}

// Function

// function that will do the comparison
function checksGuess(letter){

    // if letters match, then the user wins
    if(chosenLetter === letter){
        // increments the win counter
        winCounter++;

        alert("You win");

        // Update the win counter in the HTML
        document.getElementById("wins").innerHTML = winCounter;

        // Resets the game
        startGame();

        // if user runs out of guesses, they lose
    } else if(guessesLeft === 0){
        // increment the lose counter
        loseCounter++;

        alert("You lose");

        // Update the lose counter in the HTML
        document.getElementById("losses").innerHTML = loseCounter;

        //Resets the game
        startGame();

    } else{
        // stores the letter into wrongGusses
        wrongGuesses += letter;

        // decrement the amount of guesses left 
        guessesLeft--;
    }

    // Update the wrong guesses in the HTML
    document.getElementById("so-far").innerHTML = wrongGuesses;

    // Update the guesses left counter in the HTML
    document.getElementById("guesses-left").innerHTML = guessesLeft;

}

// Starts the game
startGame();

console.log(chosenLetter);


document.onkeyup = function(event){
    // Converts all keys to lowercase letters
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();

    // Runs to see if the key event matches the computer letter
    checksGuess(letterGuessed);
};