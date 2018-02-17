// Global Variable Declarations
var index; // Used as index for superheroes Object
var letter; // Stores value of key pressed
var guesses = []; // Stores all keys pressed
var lives = 10; // Number of guesses allowed
var nameArray = []; // Stores the names
var numOfWins = 0; // Store number of wins

// HTML Modifiers
var button = document.getElementById("restart");
var current = document.getElementById("current"); // Show current letter guessed
var guessed = document.getElementById("guessed"); // Show letters guessed
var identity = document.getElementById("identity"); // Hide/reveal alias
var showLives = document.getElementById("showLives"); // Show lives left
var showWins = document.getElementById("showWins"); // Show total wins
var superhero = document.getElementById("superhero"); // Show superhero name
var superhero_img = document.getElementById("superhero_img"); // Insert image after win
var tagline = document.getElementById("tagline"); // Show hint associated with superhero

// HTML Buttons
var exitBtn = document.getElementById("exitBtn");
var restartBtn = document.getElementById("restartBtn");
var revealBtn = document.getElementById("revealBtn");



// Superhero Object
var superheroes =
    [{
        alias: "Arthur Curry",
        superhero: "Aquaman",
        publisher: "DC Comics",
        tagline: "Dressed like a bat. I dig it.",
        image: "assets/images/superheroes/aquaman.jpg"
    },
    {
        alias: "Natalia Allanovna Romanova",
        superhero: "Black Widow",
        publisher: "Marvel Comics",
        tagline: "Cognitive Re-Calibration: I hit you really hard in the head.",
        image: "assets/images/superheroes/black-widow.jpg"
    },
    {
        alias: "Bruce Wayne",
        superhero: "Batman",
        publisher: "DC Comics",
        tagline: "I am vengeance, I am the night. I am...",
        image: "assets/images/superheroes/batman.jpg"
    },
    {
        alias: "Steven Rogers",
        superhero: "Captain America",
        publisher: "Marvel Comics",
        tagline: "Not a perfect soldier, but a good man.",
        image: "assets/images/superheroes/captain-america.jpg"
    },
    {
        alias: "Victor Stone",
        superhero: "Cyborg",
        publisher: "DC Comics",
        tagline: "I heard about you. Didn't think you were real.",
        image: "assets/images/superheroes/cyborg.jpg"
    },
    {
        alias: "Wade Wilson",
        superhero: "Deadpool",
        publisher: "Marvel Comics",
        tagline: "Hey you. Yeah You. No, not you...the other guy. You right there! Yes, you! ...Do you like tacos?",
        image: "assets/images/superheroes/deadpool.jpg"
    },
    {
        alias: "Barry Allen",
        superhero: "The Flash",
        publisher: "DC Comics",
        tagline: "Life doesn't give us purpose, we give life purpose.",
        image: "assets/images/superheroes/the-flash.jpg"
    },
    {
        alias: "Oliver Queen",
        superhero: "Green Arrow",
        publisher: "DC Comics",
        tagline: "An arrow can only be shot by pulling backward...",
        image: "assets/images/superheroes/green-arrow.jpg"
    },
    {
        alias: "Bruce Banner",
        superhero: "Incredible Hulk",
        publisher: "Marvel Comics",
        tagline: "Don't make me angry. You wouldn't like me when I'm angry.",
        image: "assets/images/superheroes/incredible-hulk.jpg"
    },
    {
        alias: "Tony Stark",
        superhero: "Iron Man",
        publisher: "Marvel Comics",
        tagline: "I told you. I don't want to join your super-secret boy band.",
        image: "assets/images/superheroes/iron-man.jpg"
    },
    {
        alias: "Magnus Eisenhardt",
        superhero: "Magneto",
        publisher: "Marvel Comics",
        tagline: "Are you a God-fearing man, Senator?",
        image: "assets/images/superheroes/magneto.jpg"
    },
    {
        alias: "Raven Darkholme",
        superhero: "Mystique",
        publisher: "Marvel Comics",
        tagline: "...and I'm way more mysterious than you.",
        image: "assets/images/superheroes/mystique.jpg"
    },
    {
        alias: "Jean Grey",
        superhero: "Phoenix",
        publisher: "Marvel Comics",
        tagline: "I am fire and life incarnate! Now and forever - I am...",
        image: "assets/images/superheroes/phoenix.jpg"
    },
    {
        alias: "Charles Francis Xavier",
        superhero: "Professor X",
        publisher: "Marvel Comics",
        tagline: "Mutation: it is the key to our evolution. It has enabled us to evolve from a single-celled organism into the dominant species on the planet. This process is slow, and normally taking thousands and thousands of years. But every few hundred millennia, evolution leaps forward.",
        image: "assets/images/superheroes/professorX.jpg"
    },
    {
        alias: "Anna Marie",
        superhero: "Rogue",
        publisher: "Marvel Comics",
        tagline: "The first boy I ever kissed ended up in a coma for three weeks.",
        image: "assets/images/superheroes/rogue.jpg"
    },
    {
        alias: "Peter Parker",
        superhero: "Spider-man",
        publisher: "Marvel Comics",
        tagline: "My spidey-senses are going crazy!",
        image: "assets/images/superheroes/spider-man.jpg"
    },
    {
        alias: "Ororo Monroe",
        superhero: "Storm",
        publisher: "Marvel Comics",
        tagline: "By the Goddess!",
        image: "assets/images/superheroes/storm.jpg"
    },
    {
        alias: "Clark Kent",
        superhero: "Superman",
        publisher: "DC Comics",
        tagline: "Up,up and away!",
        image: "assets/images/superheroes/superman.jpg"
    },
    {
        alias: "James Logan Howlett",
        superhero: "Wolverine",
        publisher: "Marvel Comics",
        tagline: "I'm the best at what I do.",
        image: "assets/images/superheroes/wolverine.jpg"
    },
    {
        alias: "Princess Diana of Themyscira",
        superhero: "Wonder Woman",
        publisher: "DC Comics",
        tagline: "I will fight for those that cannot fight for themselves.",
        image: "assets/images/superheroes/wonder-woman.jpg"
    }
    ];


// Start game
document.onload = startGame(numOfWins);

// Capture letter on key up
document.onkeyup = function (event) {
    // console.log(event.keyCode);
    if (event.keyCode > 122 ||
        (event.keyCode < 97 && event.keyCode > 90) ||
        (event.keyCode < 65 && event.keyCode > 75) ||
        (event.keyCode < 48)) {
        letter = "";
    } else {
        letter = event.key.toLowerCase();
        current.innerText = letter;
        guessedLetter(letter);
    }
}

exitBtn.onclick = function () {
    window.close();
}

revealBtn.onclick = function () {
    identity.innerHTML = superheroes[index].alias.toLowerCase();
    $("#stage").modal("show");
};


// Start of Game
function startGame(wins) {
    // Modal shows the instruction on page load
    $('#myModal').modal('show');

    // Random number used to select random alias
    index = Math.floor(Math.random() * superheroes.length);

    // Will display dashes for each character in alias selected
    hideName(superheroes[index].alias.toLowerCase());

    // Will display number of wins
    showWins.innerText = numOfWins;

    // Will display number of lives left
    showLives.innerText = lives;
    wins = numOfWins;
}

restartBtn.onclick = function () {
    location.reload()
};

// Display dashes on the screen
function hideName(realName) {
    console.log(realName);
    for (var i = 0; i < realName.length; i++) {
        if (realName[i] === " ") {
            nameArray.push(" ");
        } else nameArray.push("-");
    }
    identity.innerText = nameArray.join("");
    tagline.innerText = '\"' + superheroes[index].tagline + '\"';
    // return nameArray;
}

// Check the letter guessed to see if it was previously used
function guessedLetter(newLetter) {
    // console.log(newLetter);
    if (!guesses.includes(newLetter)) {
        guesses.push(newLetter);
        guessed.innerText = guesses;
        showName(newLetter);
    }
    else alert("You have used that letter; make another selection.");
    // return newLetter;
}

// Look for the current letter in the alias
function showName(letter) {
    var superheroName = superheroes[index].superhero; // Shorthand reference to superhero name
    var img = document.createElement("img"); // Create HTML element to display image
    var imgSrc = superheroes[index].image; // Use alias attribute to get superhero image
    var name = superheroes[index].alias.toLowerCase(); // Shorthand reference to superhero's alias

    // Shorthand for setting image source attribute
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
            for (var i = 0; i < nameArray.length; i++) {
                nameArray.pop();
            }
            alert("Game over...you lose.");
            identity.innerText = name;
            startGame(numOfWins);
        }

    }
    // if the nameArray does not contain dashes, increment games win by 1
    else if (!nameArray.includes("-") && lives > 0) {
        numOfWins++;
        superhero_img.appendChild(img);
        superhero.innerText = superheroName;
        $("#stage").modal("show");
        nameArray = [];
        guesses = [];

    }

    // Update display with letters that were guessed correctly
    showLives.innerText = lives;
    showWins.innerText = numOfWins;
    identity.innerText = nameArray.join("");

    // return letter;
}

revealBtn.onclick = function () {
    identity.innerHTML = superheroes[index].alias.toLowerCase();
    superhero_img.appendChild(img);
    superhero.innerText = superheroName;
    $("#stage").modal("show");
    clearStats(numOfWins);
}

// function clearStat(pastWins) {
//     for (var i = 0; nameArray.length; i++) {
//         nameArray.pop();
//     }
//     nameArray = [];
//     startGame(pastWins);
// }