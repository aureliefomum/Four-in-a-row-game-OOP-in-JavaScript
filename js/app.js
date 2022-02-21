const startBtn = document.getElementById("begin-game");

const newGame = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

startBtn.addEventListener("click", function () {
	newGame.startGame();

	this.style.display = "none";
	document.getElementById("play-area").style.opacity = "1";
});
