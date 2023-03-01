class Game {
	constructor(playerOne, playerTwo) {
//** Array of 2 objects *****
		this.players = [playerOne, playerTwo];

// ** Array of 9 with player objects or just icon? ****
// top  		left: 0 center: 1, right: 2 
// middle		left: 3 center: 4, right: 5 
// bottom		left: 6 center: 7, right: 8 
		this.gameBoard = [];

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
		var player = this.currentPlayerTurn
/// horz
		//top row
		if(this.gameBoard[0] === player && this.gameBoard[1] === player && this.gameBoard[2] === player){
			console.log(`${player.id} wins by top row`)
		} else if (this.gameBoard[3] === player && this.gameBoard[4] === player && this.gameBoard[5] === player){
			console.log(`${player.id} wins by middle row`)
		} else if(this.gameBoard[6] === player && this.gameBoard[7] === player && this.gameBoard[8] === player){
			console.log(`${player.id} wins by top row`)
// vert		
		} else if(this.gameBoard[0] === player && this.gameBoard[3] === player && this.gameBoard[6] === player){
			console.log(`${player.id} wins by first coloumn`)
		} else if (this.gameBoard[1] === player && this.gameBoard[4] === player && this.gameBoard[7] === player){
			console.log(`${player.id} wins by second coloumn`)
		} else if (this.gameBoard[2] === player && this.gameBoard[5] === player && this.gameBoard[8] === player){
			console.log(`${player.id} wins by third coloumn`)
//diag
		} else if(this.gameBoard[0] === player && this.gameBoard[4] === player && this.gameBoard[8] === player){
			console.log(`${player.id} wins by ltr diagnal`)

		} else if(this.gameBoard[2] === player && this.gameBoard[4] === player && this.gameBoard[6] === player){
			console.log(`${player.id} wins by rtl diagnal`)
		}
	}

	newGameBoard(){
	// set currentGameBoard to 

	}
}