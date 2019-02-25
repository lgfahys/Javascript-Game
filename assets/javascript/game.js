window.onload = function (e) {

    // correct words
    var words = ["SUSHI", "COFFEE", "AVOCADO", "POPCORN", "ICECREAM", "PIZZA", "SMOOTHIE", "STRAWBERRY", 
    "CHERRY", "KIWI", "BURGER"];

    //selects a random word
    var randomWord = words[Math.floor(Math.random() * words.length)];

    // variables to hold wins, letters remaining and letters guessed
    var wins = 0;
    var blankSpaces = [];
    var guessesRemaining = 15;
    var allLettersGuessed = "";

    //counts the number of letters for the randomWord and puts them in to a string
    for (var i = 0; i < randomWord.length; i++) {
        blankSpaces[i] = "_";
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

        // makes guesses go down when user presses a key/letter
        if ("keydown") {
            guessesRemaining--;
        }

        // fills in blank if user types correct letter in randomWord
        for (var j = 0; j < randomWord.length; j++) {
            var guessedLetter = event.key.toUpperCase();
            if (randomWord[j] == guessedLetter) {
                blankSpaces[j] = guessedLetter;
            }

        }

        // alert user that they won (user wins when "_" can no longer be found in the array of blankSpaces)
        if (blankSpaces.includes("_") == false) {
            alert("You Win!");
            alert("The word was " + randomWord.toLowerCase());
            confirm("Do you want to guess another word?");
            if (confirm){
            wins ++;
            allLettersGuessed = "";
            guessesRemaining = 15;
            blankSpaces = [];
            randomWord = words[Math.floor(Math.random() * words.length)];
            for (var i = 0; i < randomWord.length; i++) {
                blankSpaces[i] = "_";
            }
        }
    }

        // alerts user that they lost the game if the run out of guesses
        if (guessesRemaining <= 0) {
            alert("Game Over! You ran out of guesses.");
            alert("The word was " + randomWord.toLowerCase());
            //asks users if they want to start a new game. if yes, restart game
            confirm("Do you want to start a new game?");
            if (confirm) {
                wins = 0;
                allLettersGuessed = "";
                guessesRemaining = 15;
                blankSpaces = [];
                randomWord = words[Math.floor(Math.random() * words.length)];
                for (var i = 0; i < randomWord.length; i++) {
                    blankSpaces[i] = "_";
            }
        }

        };
        // displays number of wins, letters guessed and remaining letters
        winsText.textContent = "Wins: " + wins;
        blankSpacesText.textContent = "Current Word: " + blankSpaces;
        guessesRemainingText.textContent = "Remaining Guesses: " + guessesRemaining;
        allLettersGuessedText.textContent = "Letters Guessed: " + allLettersGuessed;
    }
}

