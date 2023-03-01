class Game {
	constructor(playerOne, playerTwo) {
//** Array of 2 objects *****
		this.players = [playerOne, playerTwo];

// ** Array of 9 with player objects or just icon? ****
// top  		left: 0 center: 1, right: 2 
// middle		left: 3 center: 4, right: 5 
// bottom		left: 6 center: 7, right: 8 
		this.currentGameBoard = [];

// ***** may not need? Possible toggle? *****
		this.currentPlayerTurn = this.players[0];
	}

	changeTurn(){
		if (this.currentPlayerTurn === this.players[0]){
			this.currentPlayerTurn = this.players[1];
		} else {
			this.currentPlayerTurn = this.players[0];
		}
	}

	checkWin(){

		

	}

	newGameBoard(){

	}
}