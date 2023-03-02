// Query Selectors
var gameStatusHeader = document.getElementById('gameStatus')
var playerTurnIcon = document.getElementById('turnIcon')
var playerOneWins = document.getElementById('pOneWins')
var playerTwoWins = document.getElementById('pTwoWins')
var gameBoard = document.getElementById('gameBoard')

//Variable
var gameRound = new Game(new Player("one", "./assets/badger.png", "player one icon badger"), new Player("two", "./assets/blowfish.png", "player two icon blowfish"))
// Eventlisteners
gameBoard.addEventListener('click', placeToken)




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
				gameStatusHeader.innerHTML = `<img class="winner-token" src=${gameRound.playerOne.token} alt=${gameRound.playerOne.altText}> won!`
				
				setTimeout(startNewGame, 3000)
				} else if (gameRound.currentPlayer.id.includes('two')) {
				gameRound.playerTwo.wins++
				playerTwoWins.innerText =`${gameRound.playerTwo.wins} Wins`
				gameStatusHeader.innerHTML = `<img class="winner-token" src=${gameRound.playerTwo.token} alt=${gameRound.playerTwo.altText}> won!`
			
				setTimeout(startNewGame, 3000)
			}
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
				gameStatusHeader.innerHTML = "It's a draw";			
				setTimeout(startNewGame, 3000)
			} else {
//Change Turn 
			gameRound.changeTurn()
			playerTurnIcon.src = gameRound.currentPlayer.token
		}
	}
}

function startNewGame(){

	gameRound.changeTurn()
	playerTurnIcon.src = gameRound.currentPlayer.token
	gameRound.newGameBoard()
	gameStatusHeader.innerHTML = `It's <img class="turn-icon" src=${gameRound.currentPlayer.token} id="turnIcon" alt=${gameRound.currentPlayer.altText}>'s turn`

	var boardSpaces = document.querySelectorAll('.board-space')
	for (var i = 0; i < boardSpaces.length; i++){
		boardSpaces[i].innerHTML =''
	}

}

//**** add eventlister/handler to set header images */
//****Lock the other board spaces once won*/
//*** add disabled to boardspa */
//***after new round the player tokens are not being switched in the header */