class Game {
	constructor(playerOne, playerTwo) {
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
		this.gameBoard = [];
		this.currentPlayer = this.playerOne;
	}

	changeTurn() {
		if (this.currentPlayer.id === this.playerOne.id) {
			this.currentPlayer = this.playerTwo;
		} else {
			this.currentPlayer = this.playerOne;
		}
		playerTurnIcon.src = gameRound.currentPlayer.token
		playerTurnIcon.altText = gameRound.currentPlayer.altText
	}

	checkWin() {
		var winnerFound = false;
		var player = this.currentPlayer

		if ((this.gameBoard[0] === player && this.gameBoard[1] === player && this.gameBoard[2] === player) ||
			(this.gameBoard[3] === player && this.gameBoard[4] === player && this.gameBoard[5] === player) ||
			(this.gameBoard[6] === player && this.gameBoard[7] === player && this.gameBoard[8] === player) ||
			(this.gameBoard[0] === player && this.gameBoard[3] === player && this.gameBoard[6] === player) ||
			(this.gameBoard[1] === player && this.gameBoard[4] === player && this.gameBoard[7] === player) ||
			(this.gameBoard[2] === player && this.gameBoard[5] === player && this.gameBoard[8] === player) ||
			(this.gameBoard[0] === player && this.gameBoard[4] === player && this.gameBoard[8] === player) ||
			(this.gameBoard[2] === player && this.gameBoard[4] === player && this.gameBoard[6] === player)) {
			winnerFound = true;
		}
		return winnerFound
	}

	newGameBoard() {
		this.gameBoard = [];
	}
}