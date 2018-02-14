

// Global Variable Declarations
var index;          // Used as index for superheroes Object
var letter;         // Stores value of key pressed
var guesses = [];   // Stores all keys pressed
var nameArray = []; // Stores the names 
var lives = 10;     // Number of guesses allowed
var numOfWins;      // Number of wins


// HTML Modifiers
var current = document.getElementById("current");
var guessed = document.getElementById("guessed");
var identity = document.getElementById("identity");
var superhero_img = document.getElementById("superhero_img");


// Superhero Object
var superheroes = [{
    alias: "Arthur Curry",
    superhero: "Aquaman",
    image: "/assets/images/aquaman.jpg"
},
{
    alias: "Bruce Wayne",
    superhero: "Batman",
    image: "/assets/images/batman.jpg"
},
{
    alias: "Steven Rogers",
    superhero: "Captain America",
    image: "/assets/images/captain-america.jpg"
},
{
    alias: "Wade Wilson",
    superhero: "Deadpool",
    image: "/assets/images/deadpool.jpg"
},
{
    alias: "Oliver Queen",
    superhero: "Green Arrow",
    image: "/assets/images/green-arrow.jpg"
},
{
    alias: "Bruce Banner",
    superhero: "Incredible Hulk",
    image: "/assets/images/incredible-hulk.jpg"
},
{
    alias: "Tony Stark",
    superhero: "Iron Man",
    image: "/assets/images/iron-man.jpg"
},
{
    alias: "Peter Parker",
    superhero: "Spider-man",
    image: "/assets/images/spider-man.jpg"
},
{
    alias: "Clark Kent",
    superhero: "Superman",
    image: "/assets/images/superman.jpg"
},
{
    alias: "Princess Diana",
    superhero: "Wonder Woman",
    image: "/assets/images/wonder-woman.jpg"
}
];

document.onload = resetGame();

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
    showName(letter);
}

function resetGame() {
    index = Math.floor(Math.random() * superheroes.length);
    console.log("index: " + index);
    hideName(superheroes[index].alias.toLowerCase());
}

function hideName(realName) {
    console.log(realName);
    for (var i = 0; i < realName.length; i++) {
        if (realName[i] === " ") {
            nameArray.push(" ");
        }
        else nameArray.push("-");
    }
    identity.innerText = nameArray.join("");
}

// Check the letter guessed to see if it was previously used
function guessedLetter(newLetter) {
    if (guesses.length === 0) {
        // console.log("array is empty, adding new letter to array.");
        guesses.push(newLetter);
        guessed.innerText = guesses;
        // console.log("exiting If statement...");
    }

    // if the array is not empty
    else if (guesses.length !== 0) {
        // console.log("array not empty, there are " + guesses.length + " items in the array...starting FOR loop");
        for (var i = 0; i < guesses.length; i++) {
            // console.log("Beginning of FOR loop. i = " + i + ", guesses[i] = " + guesses[i]);

            // if the new letter equals the current letter
            if (newLetter === guesses[i]) {
                // console.log("found a match. not adding letter.");
                break;
            }

            // else, if the new letter does not equal current letter
            else if (newLetter !== guesses[i]) {
                // if the end of array has been reached
                if (guesses.length === i + 1) {
                    // else add the new letter to the array
                    // console.log("no match found and have reached end of array. adding new letter.");
                    guesses.push(newLetter);
                    guessed.innerText = guesses;
                    // break;
                }
            }
        }
    }
}

// Look for the current letter in the alias
function showName(letter) {

    // shorthand reference to superhero's alias
    var name = superheroes[index].alias.toLowerCase();

    // loop through array and compare with current letter
    for (var i = 0; i < name.length; i++) {

        // if there is a match, update name array
        if (letter === name[i]) {
            nameArray[i] = letter;
        }
        // else, decrement lives by 1
        else lives--;
    }
    // Update display with letters that were guessed correctly
    identity.innerText = nameArray.join("");
}