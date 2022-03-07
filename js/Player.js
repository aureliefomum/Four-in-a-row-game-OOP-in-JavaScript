class Player {
	constructor(name, id, color, active = false) {
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

	/**
	 * Creates token objects for player
	 * @param {integer} num = Number of token objects to be created
	 * @return {Array} Array of token objects created
	 */
	createTokens(num) {
		const tokensArr = [];
		for (let i = 0; i < num; i++) {
			let token = new Token(i, this);
			tokensArr.push(token);
		}
		return tokensArr;
	}

	/**
	 * gets all unused tokens
	 * @returns array of tokens with dropped properties equal to false
	 */

	get unusedTokens() {
		return this.tokens.filter((token) => !token.dropped);
	}

	/**
	 * checks if active player has any  unused left
	 * @return {Boolean}
	 */

	checkTokens() {
		return this.unusedTokens.length !== 0;
	}

	/**
	 * Gets active token by returning the first token in the array of unused tokens.
	 * @return {Object} First token object in the array of unused tokens
	 */

	get activeToken() {
		return this.unusedTokens[0];
	}
}
