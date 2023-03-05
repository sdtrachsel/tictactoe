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
		var player = this.currentPlayer;

		var winDetails ={winnerFound: false, winningSpaces:[]}
		var winConditions =[
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]

		for(var i = 0; i < winConditions.length; i++){

			if(this.gameBoard[winConditions[i][0]] === player && this.gameBoard[winConditions[i][1]] === player && this.gameBoard[winConditions[i][2]] === player){

				winDetails.winnerFound = true;
				winDetails.winningSpaces = winConditions[i];
			}
		}
		return winDetails
	}

	newGameBoard() {
		this.gameBoard = [];
		for (var i = 0; i < boardSpaces.length; i++) {
			boardSpaces[i].innerHTML = ''
			boardSpaces[i].classList.remove('occupied')
		}
	}
}