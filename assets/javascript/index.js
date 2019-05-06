let alias, blanks, guesses, index, losses = 0, wins = 0;
let button = document.querySelectorAll( "button" );

// Add superhero contents to modal to be displayed when game is won
function superheroModal () {
    document.querySelector( "#superhero" ).textContent = superheroes[ index ].superhero;
    document.querySelector( "#hero_img" ).innerHTML = '<img src="./' + superheroes[ index ].image + '"/>';
    $( "#stage" ).modal( "show" );
}

// Clear the gameboard for gameplay
function clearGameboard () {
    alias, blanks = [], guesses = 10;
    document.querySelector( "#wins" ).textContent = wins;
    document.querySelector( "#losses" ).textContent = losses;
    document.querySelector( "#guesses" ).textContent = guesses;
    document.querySelector( "#current" ).textContent = "N/A";
    document.querySelector( "#lettersGuessed" ).textContent = "N/A";

    // Randomly select a superhero from the Superheroes object
    index = Math.floor( Math.random() * ( superheroes.length - 1 ) );
    alias = superheroes[ index ].alias;

    // Sort through the alias array and add dashes to the screen
    for ( let i = 0; i < alias.length; i++ ) {
        alias[ i ] === " " ? blanks.push( " " ) : blanks.push( "_" );
    }
    document.querySelector( "#identity" ).textContent = blanks.join( "" );

    // Show tagline on game board
    document.querySelector( "#tagline" ).textContent = superheroes[ index ].tagline;

    // Call the function to start the hangman game
    startGame();
}

// Check if current letter is in the alias
function checkLetter ( letter, alias, blanks ) {
    // Decrease guesses by 1 if the letter was not found
    if ( !alias.toLowerCase().includes( letter ) ) {
        guesses--;
    }
    // If the letter was found, show it on the gameboard
    for ( let i = 0; i < alias.length; i++ ) {
        if ( alias[ i ].toLowerCase() === letter ) {
            blanks[ i ] = alias[ i ];
        }
    }
    document.querySelector( "#identity" ).textContent = blanks.join( "" );
    document.querySelector( "#guesses" ).textContent = guesses;

    // If the game has been won, show the superhero modal
    if ( guesses > 0 && !blanks.includes( "_" ) ) {
        superheroModal();
    }
}

// Start Hangman game
function startGame () {
    let lettersGuessed = [], currentLetter = null;

    // Check if the letter entered is in the array
    document.onkeyup = event => {
        // If the key pressed isn't a letter, then disregard it
        if ( event.keyCode > 122 ||
            ( event.keyCode < 97 && event.keyCode > 90 ) ||
            ( event.keyCode < 65 && event.keyCode > 75 ) ||
            event.keyCode < 48
        ) {
            currentLetter = null;
            // Otherwise, convert to a lowercase letter for checking
        } else currentLetter = event.key.toLowerCase();

        document.querySelector( "#current" ).textContent = currentLetter;

        // Check if the user entered a letter that was previously used
        if ( lettersGuessed.includes( currentLetter ) ) {
            alert( "This letter has been guessed. Pleased try again." );
        }
        // Add the letter to the guessed array
        else lettersGuessed.push( currentLetter );
        document.querySelector( "#lettersGuessed" ).textContent = lettersGuessed;

        // If there are no guesses left, end game. Otherwise, check current letter
        if ( guesses === 0 && blanks.includes( "_" ) ) {
            losses++;
            alert( "Game over. You lose." );
            clearGameboard();
        }
        else checkLetter( currentLetter, alias, blanks )
    };
}

// Event listener for buttons: Reveal, Restart, Exit and modal close after winning round
for ( let i = 0; i < button.length; i++ ) {
    button[ i ].addEventListener( "click", event => {
        if ( event.target.value === "reveal" ) {
            document.querySelector( "#identity" ).textContent =
                superheroes[ index ].alias;
        }
        if ( event.target.value === "restart" ) {
            losses++;
            clearGameboard();
        }
        if ( event.target.value === "winner" ) {
            wins++;
            clearGameboard();
        }
        if ( event.target.value === "exit" ) {
            window.close();
        }
    } );
}

// Start game on page load
clearGameboard();