// Global Variable Declarations
var index;          // Used as index for superheroes Object
var letter;         // Stores value of key pressed
var guesses = [];   // Stores all keys pressed
var lives = 10;     // Number of guesses allowed
var nameArray = []; // Stores the names
var numOfWins = 0;  // Store number of wins




// HTML Modifiers
var current = document.getElementById("current");               // Show current letter guessed
var guessed = document.getElementById("guessed");               // Show letters guessed
var identity = document.getElementById("identity");             // Hide/reveal alias
var showLives = document.getElementById("showLives");            // Show lives left
var showWins = document.getElementById("showWins");             // Show total wins
var superhero_img = document.getElementById("superhero_img");   // Insert image after win


// Superhero Object
var superheroes = [
    {
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
    index = Math.floor(Math.random() * superheroes.length); // Random number used to select random alias
    console.log("index: " + index);
    hideName(superheroes[index].alias.toLowerCase());       // Will display dashes for each character in alias selected
    showWins.innerText = numOfWins;                         // Will display number of wins
    showLives.innerText = lives;                            // Will display number of lives left
}

function hideName(realName) {
    console.log(realName);
    for (var i = 0; i < realName.length; i++) {
        if (realName[i] === " ") {
            nameArray.push(" ");
        }
        else nameArray.push("-");
    }
    return identity.innerText = nameArray.join("");
}

// Check the letter guessed to see if it was previously used
function guessedLetter(newLetter) {
    // if the array is empty, the add new letter to array
    if (guesses.length === 0) {
        guesses.push(newLetter);
        guessed.innerText = guesses;
    }

    // if the array is not empty, check each letter in array
    else if (guesses.length !== 0) {
        // compare current letter to letter at index i
        for (var i = 0; i < guesses.length; i++) {
            // if the current letter exists, exit loop
            if (newLetter === guesses[i]) {
                break;
            }
            // else, if the current letter does not equal letter at index i
            else if (newLetter !== guesses[i]) {
                // if the end of array has been reached
                if (guesses.length === i + 1) {
                    // else add the new letter to the array
                    guesses.push(newLetter);
                    guessed.innerText = guesses;
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
        // if letter does not match letter at index i, move to next letter
        if (letter !== name[i] && name.length !== i) {
            console.log("no match, incrementing i = " + i);
        }
        else {
            nameArray[i] = letter;
        }
    }
    // if the nameArray does not contain current letter, decrement lives by 1
    if (!nameArray.includes(letter)) {
        lives--;
    }
    // Update display with letters that were guessed correctly
    showLives.innerText = lives;
    identity.innerText = nameArray.join("");

}