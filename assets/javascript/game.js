window.onload = function (e) {

    // correct words
    var words = ["COFFEE", "AVOCADOTOAST", "ACAIBOWL", "ICECREAM"];

    //selects a random word
    var randomWord = words[Math.floor(Math.random() * words.length)];

    // variables to hold wins, letters remaining and letters guessed
    var wins = 0;
    var blankSpaces = [];
    var guessesRemaining = 15;
    var allLettersGuessed = "";

    //counts the number of letters for the randomWord
    for (var i = 0; i < randomWord.length; i++) {
        blankSpaces[i] = "_ ";
      }

    // variable that holds references to places in html
    var winsText = document.getElementById("wins-text");
    var blankSpacesText = document.getElementById("blankSpaces-text");
    var guessesRemainingText = document.getElementById("guessesRemaining-text");
    var allLettersGuessedText = document.getElementById("allLettersGuessed-text");

    // function is run whenever user presses a key/letter
    document.onkeyup = function (event) {
        //hides comma before first letter guessed
        if (allLettersGuessed === "") {
            allLettersGuessed = event.key.toUpperCase();
            //concatenates allLettersGuessed each time a key is pressed
        } else {
            allLettersGuessed = allLettersGuessed + ", " + event.key.toUpperCase();
        }

        // makes guesses go down when user presses an incorrect key/letter
        if ("keydown") {
            guessesRemaining--;
        }
        
        // alerts user that they lost the game if the run out of guesses
        if (guessesRemaining <= 0) {
            alert("Game Over! You ran out of guesses.");
            alert("The word was " + randomWord);
            //asks users if they want to start a new game. if yes, reload page
            var reloadPage = confirm("Do you want to start a new game?");
            if(reloadPage)
            {
              window.location.reload();
            }
        
        };
        // displays number of wins, letters guessed and remaining letters
        winsText.textContent = "Wins: " + wins;
        blankSpacesText.textContent = "Current Word: " + blankSpaces;
        guessesRemainingText.textContent = "Remaining Guesses: " + guessesRemaining;
        allLettersGuessedText.textContent = "Letters Guessed: " + allLettersGuessed;
    }
}

