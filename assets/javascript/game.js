// Global Variable Declarations
var letter;
var lettersGuessed = [];
var numOfGuesses;
var numOfWins;

var superhero = document.getElementById("superhero");
var superhero_img = document.getElementById("superhero_img");

superhero_img.innerHTML = "<img src='/images/superman.jpg'>";


// Superhero Object
var superheroes = [
    {
        id: 0,
        alias: "Arthur Curry",
        superhero: "Aquaman"
    },
    {
        id: 1,
        alias: "Bruce Wayne",
        superhero: "Batman"
    },
    {
        id: 2,
        alias: "Steven Rogers",
        superhero: "Captain America"
    },
    {
        id: 3,
        alias: "Wade Wilson",
        superhero: "Deadpool"

    },
    {
        id: 4,
        alias: "Oliver Queen",
        superhero: "Green Arrow"
    },
    {
        id: 5,
        alias: "Bruce Banner",
        superhero: "Incredible Hulk"
    },
    {
        id: 6,
        alias: "Tony Stark",
        superhero: "Iron Man"
    },
    {
        id: 7,
        alias: "Peter Parker",
        superhero: "Spider-man"
    },
    {
        id: 8,
        alias: "Clark Kent",
        superhero: "Superman"
    },
    {
        id: 9,
        alias: "Princes Diana",
        superhero: "Wonder Woman"
    }
];