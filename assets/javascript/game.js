

// Global Variable Declarations
var index;                  // Used as index for superheroes Object
var letter;                 // Stores value of key pressed
var lettersGuessed = [];    // Stores all keys pressed
var numOfGuesses = 10;      // Number of guesses allowed
var numOfWins;              // Number of wins

var superhero_img = document.getElementById("superhero_img");

var current = document.getElementById("current");
var guessed = document.getElementById("guessed");
var identity = document.getElementById("identity");

// Superhero Object
var superheroes = [{
    alias: "Arthur Curry",
    superhero: "Aquaman"
},
{
    alias: "Bruce Wayne",
    superhero: "Batman"
},
{
    alias: "Steven Rogers",
    superhero: "Captain America"
},
{
    alias: "Wade Wilson",
    superhero: "Deadpool"
},
{
    alias: "Oliver Queen",
    superhero: "Green Arrow"
},
{
    alias: "Bruce Banner",
    superhero: "Incredible Hulk"
},
{
    alias: "Tony Stark",
    superhero: "Iron Man"
},
{
    alias: "Peter Parker",
    superhero: "Spider-man"
},
{
    alias: "Clark Kent",
    superhero: "Superman"
},
{
    alias: "Princes Diana",
    superhero: "Wonder Woman"
}
];

// Function will randomly generate a number between 1 and 10 when the page loads
document.onload = generate();

// Testing display of alias on webpage
// var alias = document.getElementById("alias");
identity = superheroes[index].alias;
generate(identity);

// Capture letter on key up
document.onkeyup = function (event) {
    if (event.key === "Alt" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "ArrowUp" ||
        event.key === "Backspace" ||
        event.key === "CapsLock" ||
        event.key === "Control" ||
        event.key === "Enter" ||
        event.key === "Escape" ||
        event.key === "Meta" ||
        event.key === "Shift") {
        letter = "";
    } else letter = event.key.toLowerCase();

    current.innerText = letter;
    guessedLetter(letter);
    // generate();

    console.log("Function finished. Array now contains " + lettersGuessed);
}


function generate() {
    index = Math.floor(Math.random() * Math.floor(superheroes.length));
    console.log("index: " + index);
    return index;
}

function game(realName) {
    console.log(realName);

}


// Check the letter guessed to see if it was previously used
function guessedLetter(newLetter) {
    // superhero_img.src = "assets/images/superman.jpg";
    if (lettersGuessed.length === 0) {
        // console.log("array is empty, adding new letter to array.");
        lettersGuessed.push(newLetter);
        guessed.innerText = lettersGuessed;
        // console.log("exiting If statement...");
    }

    // if the array is not empty
    else if (lettersGuessed.length !== 0) {
        // console.log("array not empty, there are " + lettersGuessed.length + " items in the array...starting FOR loop");
        for (var i = 0; i < lettersGuessed.length; i++) {
            // console.log("Beginning of FOR loop. i = " + i + ", lettersGuessed[i] = " + lettersGuessed[i]);

            // if the new letter equals the current letter
            if (newLetter === lettersGuessed[i]) {
                // console.log("found a match. not adding letter.");
                break;
            }

            // else, if the new letter does not equal current letter
            else if (newLetter !== lettersGuessed[i]) {
                // if the end of array has been reached
                if (lettersGuessed.length === i + 1) {
                    // else add the new letter to the array
                    // console.log("no match found and have reached end of array. adding new letter.");
                    lettersGuessed.push(newLetter);
                    guessed.innerText = lettersGuessed;
                    break;
                }
                // else, run next iteration of FOR loop
                else {
                    console.log("no match found and have not reached end of array. returning to FOR loop.");
                }
            }
        }
    }
    // console.log("At the end of the function. array contains: " + lettersGuessed);
}