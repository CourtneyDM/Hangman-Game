// Global Variable Declarations
var letter;
var lettersGuessed = [];
var numOfGuesses;
var numOfWins;

// Superhero Object
var superheroes = [
    {
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
    }
    else letter = event.key.toLowerCase();
    guessedLetter(letter);
}

// Check the letter guessed to see if it was previously used
function guessedLetter(guessedLetter) {
    if (lettersGuessed.length === 0) {
        lettersGuessed.push(guessedLetter);
    }
    else
        lettersGuessed.push(guessedLetter);
    console.log(lettersGuessed);
    // console.log(superheroes[0]);
}