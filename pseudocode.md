# Pseudocode

This file acts as my "white board" approach to the hangman game assignment.

## Tasks

-   [x] Create a variable to display the number of guesses
-   [x] Create a variable to display the letter guessed
-   [x] Create a variable to display the total number of wins
-   [x] Create an array to store the letters guessed
-   [x] Create an array to store superhero's name and alias
-   [x] Add an area on the index page to show the letter currently guessed
-   [x] Modify guessedLetter function to iterate through array for duplicate values
-   [x] Randomly generate a number between 1 and the length of superhero Object
-   [x] Use random number as index to grab alias from the superhero Object
-   [x] Display letter blanks for alias on index.html
-   [x] Add "Number of Guesses Left" display to index.html
-   [ ] Add a "Reset Game" button
-   [ ] Add "Number of Wins" and "Number of Losses"

## Pseudocode

-   capture letter that the user inputs from the keyboard
    -   check to see if that letter has been guessed
    -   if that letter has not been guessed
        -   [x] add it to the guessed array
            -   [x] check that letter to see if it is in the name to be guessed
                -   [x] if that letter is not in the name
                    -   [x] decrement numOfGuesses by 1
                -   else
                    -   [x] display that letter on the screen in the appropriate spot
    -   else if letter has been guessed
        -   [x] wait for user to press another letter -- modify later to prompt user
-   check to see if there are letters to be guessed
    -   if numOfGuess is not zero and there are no more letters to be guessed
        -   [x] display the superhero's picture
        -   [ ] display the superhero's name
    -   else
        -   if numOfGuess is equal to zero and there are more letters to be guessed
        -   [ ] display a game over message
