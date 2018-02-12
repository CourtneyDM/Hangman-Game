# Pseudocode
This file acts as my "white board" approach to the hangman game assignment.

## Tasks
- [X] Create a variable to display the number of guesses
- [X] Create a variable to display the letter guessed
- [X] Create a variable to display the total number of wins
- [X] Create an array to store the letters guessed
- [X] Create an array to store superhero's name and alias


## Psuedo
* capture the letter that the user inputs from the keyboard
* check to see if that letter has been guessed
    - if that letter has not been guessed
        - add it to the lettersGuessed array
        - check that letter to see if it is in the name to be guessed
            - if that letter is not in the name
                - decrement numOfGuesses by 1
            - else
                - display that letter on the screen in the appropriate spot
    - else
        - wait for user to press another letter
* check to see if there are letters to be guessed
    - if numOfGuess is not zero and there are no more letters to be guessed
        - display the superhero's picture
        - display the superhero's name
    - else
        - if numOfGuess is equal to zero and there are more letters to be guessed
        - display game over message

