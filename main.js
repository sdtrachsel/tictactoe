// Query Selectors
var gameStatusHeader = document.getElementById('gameStatus')
var playerTurnIcon = document.getElementById('turnIcon')
var playerOneWins = document.getElementById('pOneWins')
var playerTwoWins = document.getElementById('pTwoWins')

var gameBoard = document.getElementById('gameBoard')


// Eventlisteners
gameBoard.addEventListener('click', placeToken)

// Variables
var gameRound = new Game(new Player("one", "./assets/badger.png", "player one icon badger"), new Player("two", "./assets/blowfish.png", "player two icon blowfish"))


// Event Handlers
function placeToken() {
	if (event.target.classList.contains("board-space")) {
		// Place token

		var selectedBoardSpace = event.target.id
		gameRound.gameBoard[Number(selectedBoardSpace)] = gameRound.currentPlayer

		var tokenElement = document.createElement('img')
		tokenElement.src = gameRound.currentPlayer.token
		tokenElement.alt = gameRound.currentPlayer.altText
		event.target.appendChild(tokenElement)

// Check for winner 
		if (gameRound.checkWin()) {
			if (gameRound.currentPlayer.id.includes('one')) {
				gameRound.playerOne.wins++;
				playerOneWins.innerText =`${gameRound.playerOne.wins} Wins`
				gameStatusHeader.innerHTML = `
				<img class="winner-icon" src=${gameRound.playerOne.token} alt=${gameRound.playerOne.altText}> won!
				`
			} else if (gameRound.currentPlayer.id.includes('two')) {
				gameRound.playerTwo.wins++
				playerOneWins.innerText =`${gameRound.playerTwo.wins} Wins`
				gameStatusHeader.innerHTML = `
				<img class="winner-icon" src=${gameRound.playerTwo.token} alt=${gameRound.playerTwo.altText}> won!
				`
			}
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
			gameStatusHeader.innerHTML = "It's a draw";			
		} else {
//Change Turn 
			gameRound.changeTurn()
			playerTurnIcon.src = gameRound.currentPlayer.token
		}


	}
}


