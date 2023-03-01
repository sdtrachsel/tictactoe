// Query Selectors
var gameStatusHeader = document.getElementById('gameStatus')
var playerTurnIcon = document.getElementById('turnIcon')
var playerOneWins = document.getElementById('pOneWins')
var playerTwoWins = document.getElementById('pTwoWins')

var gameBoard = document.getElementById('gameBoard')


// Eventlisteners
gameBoard.addEventListener('click', placeToken)

// Variables
var gameRound = new Game(new Player("one", "./assets/badger.png","player one icon badger"), new Player("two", "./assets/blowfish.png", "player two icon blowfish"))


// Event Handlers


function placeToken() {
	if (event.target.classList.contains("board-space")) {
// Place token
	//data model		
		var selectedBoardSpace = event.target.id
		gameRound.gameBoard[Number(selectedBoardSpace)] = gameRound.currentPlayer

	//dom 
		var tokenElement = document.createElement('img')
		tokenElement.src = gameRound.currentPlayer.token
		tokenElement.alt = gameRound.currentPlayer.altText
		event.target.appendChild(tokenElement)

// Check for winner 
	// data model
		if(gameRound.checkWin()){
			if(gameRound.currentPlayer.id.includes('one')){
				gameRound.playerOne.wins++;

				gameStatusHeader.innerHTML = `
				<img class="winner-icon" src=${gameRound.playerOne.token} alt=${gameRound.playerOne.altText}> won!
				`
				} else {
				gameRound.playerTwo.wins++
			}
		} else {
	//Change Turn 
	//DataModel
		gameRound.changeTurn()
	//DOM
		playerTurnIcon.src = gameRound.currentPlayer.token
		}

	}
}


