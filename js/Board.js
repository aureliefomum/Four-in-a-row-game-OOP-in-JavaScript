class Board {
	constructor() {
		this.rows = 6;
		this.columns = 7;
		this.spaces = this.createSpaces();
	}

	/**
	 * Generates 2D array of spaces.
	 * @return  {array}     An array of space objects
	 */

	createSpaces() {
		let spacesArr = [];
		for (let i = 0; i < this.columns; i++) {
			const column = [];
			for (let j = 0; j < this.rows; j++) {
				const space = new Space(i, j);
				column.push(space);
			}
			spacesArr.push(column);
		}
		return spacesArr;
	}

	drawHTMLBoard() {
		for (let column of this.spaces) {
			for (let space of column) {
				space.drawSVGSpace();
			}
		}
	}
}
