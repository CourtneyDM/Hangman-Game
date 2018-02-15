# Pseudocode
This file acts as my "white board" approach to the hangman game assignment.

## Tasks
- [X] Create a variable to display the number of guesses
- [X] Create a variable to display the letter guessed
- [X] Create a variable to display the total number of wins
- [X] Create an array to store the letters guessed
- [X] Create an array to store superhero's name and alias
- [X] Add an area on the index page to show the letter currently guessed
- [X] Modify guessedLetter function to iterate through array for duplicate values
- [X] Randomly generate a number between 1 and the length of superhero Object
- [X] Use random number as index to grab alias from the superhero Object
- [X] Display letter blanks for alias on index.html
- [X] Add "Number of Guesses Left" display to index.html
- [ ] Add a "Reset Game" button
- [ ] Add "Number of Wins" and "Number of Losses"


## Psuedocode
* capture letter that the user inputs from the keyboard
    - check to see if that letter has been guessed
    - if that letter has not been guessed
        - [X] add it to the guessed array
            - [X] check that letter to see if it is in the name to be guessed
                - [X] if that letter is not in the name
                    - [X] decrement numOfGuesses by 1
                - else
                    - [X] display that letter on the screen in the appropriate spot
    - else if letter has been guessed
        - [X] wait for user to press another letter -- modify later to prompt user
* check to see if there are letters to be guessed
    - if numOfGuess is not zero and there are no more letters to be guessed
        - [X] display the superhero's picture
        - [ ] display the superhero's name
    - else
        - if numOfGuess is equal to zero and there are more letters to be guessed
        - [ ] display a game over message

