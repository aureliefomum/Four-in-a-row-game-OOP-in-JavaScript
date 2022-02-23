class Game {
	constructor(board, players) {
		this.board = new Board();
		this.players = this.createPlayers();
		this.ready = false;
	}

	/**
	 * Creates two player objects
	 * @return  {Array}    An array of two Player objects.
	 */

	createPlayers() {
		const players = [
			new Player("Player 1", 1, "#e15258", true),
			new Player("Player 2", 2, "#e59a13"),
		];
		return players;
	}
	/**
	 * Returns active player.
	 * @return {Object} player - The active player
	 */

	get activePlayer() {
		return this.players.find((player) => player.active);
	}

	/**
	 * Branches code, depending on what key player presses
	 * @param   {Object}    e - Keydown event object
	 */

	handleKeydown(e) {
		if (this.ready) {
			if (e.key === "ArrowLeft") {
				//    move token left
			} else if (e.key === "ArrowRight") {
				//    move token right
			} else if (e.key === "ArrowDown") {
				//    move token down
			}
		}
	}

	/**
	 * Starts game
	 */

	startGame() {
		this.board.drawHTMLBoard();
		this.activePlayer.activeToken.drawHTMLToken();
		this.ready = true;
	}
}
