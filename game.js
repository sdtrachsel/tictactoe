class Game {
	constructor(playerOne, playerTwo) {
		this.players = [playerOne, playerTwo];
		this.gameBoard = [];
		this.currentPlayer = this.players[0];
	}

	changeTurn() {
		if (this.currentPlayer.id === this.players[0].id) {
			this.currentPlayer = this.players[1];
		} else {
			this.currentPlayer = this.players[0];
		}
		setToken(playerTurnToken, this.currentPlayer)
	}

	checkWin() {
		var winnerFound = false;
		var player = this.currentPlayer;

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
		for (var i = 0; i < boardSpaces.length; i++) {
			boardSpaces[i].innerHTML = ''
			boardSpaces[i].classList.remove('js-occupied')
		}
	}
}