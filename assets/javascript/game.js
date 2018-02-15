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
        image: "assets/images/aquaman.jpg"
    },
    {
        alias: "Bruce Wayne",
        superhero: "Batman",
        image: "assets/images/batman.jpg"
    },
    {
        alias: "Steven Rogers",
        superhero: "Captain America",
        image: "assets/images/captain-america.jpg"
    },
    {
        alias: "Wade Wilson",
        superhero: "Deadpool",
        image: "assets/images/deadpool.jpg"
    },
    {
        alias: "Oliver Queen",
        superhero: "Green Arrow",
        image: "assets/images/green-arrow.jpg"
    },
    {
        alias: "Bruce Banner",
        superhero: "Incredible Hulk",
        image: "assets/images/incredible-hulk.jpg"
    },
    {
        alias: "Tony Stark",
        superhero: "Iron Man",
        image: "assets/images/iron-man.jpg"
    },
    {
        alias: "Peter Parker",
        superhero: "Spider-man",
        image: "assets/images/spider-man.jpg"
    },
    {
        alias: "Clark Kent",
        superhero: "Superman",
        image: "assets/images/superman.jpg"
    },
    {
        alias: "Princess Diana",
        superhero: "Wonder Woman",
        image: "assets/images/wonder-woman.jpg"
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
    // showName(letter);
}

function resetGame(wins) {
    index = Math.floor(Math.random() * superheroes.length); // Random number used to select random alias
    // console.log("index: " + index);
    hideName(superheroes[index].alias.toLowerCase());       // Will display dashes for each character in alias selected
    showWins.innerText = numOfWins;                         // Will display number of wins
    showLives.innerText = lives;                            // Will display number of lives left
    wins = numOfWins;
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

    if (!guesses.includes(newLetter)) {
        guesses.push(newLetter);
        guessed.innerText = guesses;
        showName(newLetter);
    }
}

// Look for the current letter in the alias
function showName(letter) {
    var img = document.createElement("img");                // Create HTML element to display image
    var imgSrc = superheroes[index].image;
    var name = superheroes[index].alias.toLowerCase();      // Shorthand reference to superhero's alias

    img.src = imgSrc;

    // loop through array and compare with current letter
    for (var i = 0; i < name.length; i++) {
        // if letter is found, update nameArray to include letter and display
        if (name[i] === letter) {
            nameArray[i] = letter;
        }
    }
    // if the nameArray does not contain current letter, decrement lives by 1
    if (!nameArray.includes(letter)) {
        lives--;
        if (lives === 0) {
            alert("Game over...you lose.");
            return;
        }
    }
    // if the nameArray does not contain dashes, increment games win by 1
    else if (!nameArray.includes("-") && lives > 0) {
        numOfWins++;
        superhero_img.appendChild(img);
    }


    // Update display with letters that were guessed correctly
    showLives.innerText = lives;
    showWins.innerText = numOfWins;
    identity.innerText = nameArray.join("");
}