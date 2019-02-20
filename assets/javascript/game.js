window.onload = function (e) {

    // correct words
    var words = ["coffee", "avocadotoast", "acaibowls", "icecream"];
    // variables to hold wins, letters remaining and letters guessed
    var wins = 0;
    var currentWord;
    var guessesRemaining = 15;
    var allLettersGuessed = "";

    // variable that holds references to places in html
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var currentWordText = document.getElementById("currentWord-text");
    var guessesRemainingText = document.getElementById("guessesRemaining-text");
    var allLettersGuessedText = document.getElementById("allLettersGuessed-text");

    // function is run whenever user presses a key/letter
    document.onkeyup = function (event) {
        //hides comma before first letter guessed
        if (allLettersGuessed === "") {
            allLettersGuessed = event.key;
            //concatenates allLettersGuessed each time a key is pressed
        } else {
            allLettersGuessed = allLettersGuessed + ", " + event.key;
        }

        // makes guesses go down when user presses an incorrect key/letter
        if ("keydown") {
            guessesRemaining--;
        }
        
        // alerts user that they lost the game if the run out of guesses
        if (guessesRemaining <= 0) {
            alert("Game Over! You ran out of guesses.");
            alert("The word was " + currentWord);
            //asks users if they want to start a new game. if yes, reload page
            var reloadPage = confirm("Do you want to start a new game?");
            if(reloadPage)
            {
              window.location.reload();
            }
            else
            {
    
            }
        }
        else {

        };
        // displays number of wins, letters guessed and remaining letters
        winsText.textContent = "Wins: " + wins;
        currentWordText.textContent = "Current Word: " + currentWordText;
        guessesRemainingText.textContent = "Remaining Guesses: " + guessesRemaining;
        allLettersGuessedText.textContent = "Letters Guessed: " + allLettersGuessed;
    }
}

