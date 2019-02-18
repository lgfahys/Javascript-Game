window.onload = function(e){ 

// correct words
var words = ["soccer", "football", "tennis", "track", "golf"]

// variables to hold wins, letters remaining and letters guessed
var wins = 0;
var guessesRemaining = 15;
var allLettersGuessed = "";

// variable that holds references to places in html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var allLettersGuessedText = document.getElementById("allLettersGuessed-text");

// function is run whenever user presses a key (letter)
document.onkeyup = function(event) {
    allLettersGuessed = allLettersGuessed + ", " + event.key;


// makes guesses go down when user presses a key (letter)

// displays number of wins, letters guessed and remaining letters
 winsText.textContent = "Wins: " + wins;
 guessesRemainingText.textContent = "Remaining Guesses: " + guessesRemaining;
 allLettersGuessedText.textContent = "Letters Guessed: " + allLettersGuessed;
}
}

