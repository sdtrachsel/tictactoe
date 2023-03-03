// Query Selectors

var playerTurnIcon = document.getElementById('turnToken')
var playerOneStatusToken = document.getElementById('playerOneToken')
var playerTwoStatusToken = document.getElementById('playerTwoToken')
var playerOneWins = document.getElementById('pOneWins')
var playerTwoWins = document.getElementById('pTwoWins')
var gameBoard = document.getElementById('gameBoard')
var gameEndDisplay = document.getElementById('gameEndDisplay')
var turnDisplay = document.getElementById('turnDisplay')
var boardSpaces = document.querySelectorAll('.js-bs')

//Variable
var gameRound = new Game(new Player("one", "./assets/machoman.png", "player one token Macho Man"), new Player("two", "./assets/ultimatewarrior.png", "player two token Ultimate Warrior"))

// Eventlisteners
window.addEventListener('load', loadPlayers)
gameBoard.addEventListener('click', playerTurn)

function loadPlayers() {
	playerOneStatusToken.src = `${gameRound.playerOne.token}`
	playerOneStatusToken.alt = `${gameRound.playerOne.altText}`

	playerTwoStatusToken.src = `${gameRound.playerTwo.token}`
	playerTwoStatusToken.alt = `${gameRound.playerTwo.altText}`

	playerTurnIcon.src = `${gameRound.currentPlayer.token}`
	playerTurnIcon.altText = `${gameRound.currentPlayer.altText}`


}


// Event Handlers
function playerTurn() {
	if (event.target.classList.contains("board-space") && !event.target.classList.contains('js-occupied')) {
		placeToken();

		// Check for winner 
		if (gameRound.checkWin()) {
			if (gameRound.currentPlayer.id.includes('one')) {
				stopTokenPlacement()

				gameRound.playerOne.wins++;
				playerOneWins.innerText = `${gameRound.playerOne.wins} Wins`

				showEndGameDisplay()

				gameEndDisplay.innerHTML = `<img class="winner-token" src=${gameRound.playerOne.token} alt=${gameRound.playerOne.altText}> won!`

				setTimeout(startNewGame, 3000)
			} else if (gameRound.currentPlayer.id.includes('two')) {
				stopTokenPlacement()

				gameRound.playerTwo.wins++;
				playerTwoWins.innerText = `${gameRound.playerTwo.wins} Wins`

				showEndGameDisplay()

				gameEndDisplay.innerHTML = `
				<img class="winner-token" src=${gameRound.playerTwo.token} alt=${gameRound.playerTwo.altText}> 
				<p>won!</p>`

				setTimeout(startNewGame, 3000)
			}
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
			gameEndDisplay.innerHTML = "<p> It's a draw </p>";
			showEndGameDisplay()
			setTimeout(startNewGame, 3000)
		} else {
			//Change Turn 
			gameRound.changeTurn()
		}
	}
}

function startNewGame() {
	gameRound.newGameBoard()

	for (var i = 0; i < boardSpaces.length; i++) {
		boardSpaces[i].innerHTML = ''
		boardSpaces[i].classList.remove('js-occupied')
	}

	gameRound.changeTurn()



	turnDisplay.classList.remove('hidden')
	gameEndDisplay.classList.add('hidden')

}

function stopTokenPlacement() {
	for (var i = 0; i < boardSpaces.length; i++) {
		boardSpaces[i].classList.add('js-occupied')
	}
}

function showEndGameDisplay() {
	turnDisplay.classList.add('hidden')
	gameEndDisplay.classList.remove('hidden')
}

function placeToken() {
	var selectedBoardSpace = event.target.id
	gameRound.gameBoard[Number(selectedBoardSpace)] = gameRound.currentPlayer
	event.target.classList.add('js-occupied')

	var tokenElement = document.createElement('img')
	tokenElement.src = gameRound.currentPlayer.token
	tokenElement.alt = gameRound.currentPlayer.altText
	tokenElement.classList.add("board-token")
	event.target.appendChild(tokenElement)
}


//** Add finger hover over board spaces */
