class Game {
	constructor(playerOne, playerTwo) {
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
		this.gameBoard = [];
		this.currentPlayer = this.playerOne;
	}

	changeTurn() {
		if (this.currentPlayer === this.playerOne) {
			this.currentPlayer = this.playerTwo;
			} else {
			this.currentPlayer = this.playerOne;
		}
	}

	checkWin() {
		var winnerFound = false;
		var player = this.currentPlayer
/// horz
		if (this.gameBoard[0] === player && this.gameBoard[1] === player && this.gameBoard[2] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by top row`)
		} else if (this.gameBoard[3] === player && this.gameBoard[4] === player && this.gameBoard[5] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by middle row`)
		} else if (this.gameBoard[6] === player && this.gameBoard[7] === player && this.gameBoard[8] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by top row`)
// vert		
		} else if (this.gameBoard[0] === player && this.gameBoard[3] === player && this.gameBoard[6] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by first coloumn`)
		} else if (this.gameBoard[1] === player && this.gameBoard[4] === player && this.gameBoard[7] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by second coloumn`)
		} else if (this.gameBoard[2] === player && this.gameBoard[5] === player && this.gameBoard[8] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by third coloumn`)
//diag
		} else if (this.gameBoard[0] === player && this.gameBoard[4] === player && this.gameBoard[8] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by ltr diagnal`)
		} else if (this.gameBoard[2] === player && this.gameBoard[4] === player && this.gameBoard[6] === player) {
			winnerFound = true;
			console.log(`${player.id} wins by rtl diagnal`)
//draw			
		} else if (this.gameBoard.length === 9 && !this.gameBoard.includes(undefined)) {
			console.log("this is a draw")
		}
		return winnerFound
	}

	newGameBoard() {
		this.gameBoard =[];
		}
}