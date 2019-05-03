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
var modal = document.getElementById("stage"); // Get the modal
var showLives = document.getElementById("showLives"); // Show lives left
var showWins = document.getElementById("showWins"); // Show total wins
var superhero = document.getElementById("superhero"); // Show superhero name
var superhero_img = document.getElementById("superhero_img"); // Insert image after win
var tagline = document.getElementById("tagline"); // Show hint associated with superhero

// HTML Buttons
var exitBtn = document.getElementById("exitBtn");
var restartBtn = document.getElementById("restartBtn");
var revealBtn = document.getElementById("revealBtn");

// Start game
window.onload = startGame(numOfWins);

// Capture letter on key up
document.onkeyup = function(event) {
	// console.log(event.keyCode);
	if (
		event.keyCode > 122 ||
		(event.keyCode < 97 && event.keyCode > 90) ||
		(event.keyCode < 65 && event.keyCode > 75) ||
		event.keyCode < 48
	) {
		letter = "";
	} else {
		letter = event.key.toLowerCase();
		current.innerText = letter;
		guessedLetter(letter);
	}
};

revealBtn.onclick = function() {
	identity.innerHTML = superheroes[index].alias.toLowerCase();
	$("#stage").modal("show");
};

// Start of Game
function startGame(wins) {
	// Modal shows the instruction on page load
	$("#myModal").modal("show");

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

restartBtn.onclick = function() {
	location.reload();
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
	tagline.innerText = '"' + superheroes[index].tagline + '"';
	return nameArray;
}

// Check the letter guessed to see if it was previously used
function guessedLetter(newLetter) {
	// console.log(newLetter);
	if (!guesses.includes(newLetter)) {
		guesses.push(newLetter);
		guessed.innerText = guesses;
		showName(newLetter);
	} else alert("You have used that letter; make another selection.");
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
			// startGame(numOfWins);
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

revealBtn.onclick = function() {
	identity.innerHTML = superheroes[index].alias.toLowerCase();
	superhero_img.appendChild(img);
	superhero.innerText = superheroName;
	// $("#stage").modal("show");
	// clearStats(numOfWins);
};
