// Query Selectors
var playerTurnIcon = document.getElementById('turnToken')
var playerOneStatusToken = document.getElementById('playerOneToken')
var playerTwoStatusToken = document.getElementById('playerTwoToken')
var gameBoard = document.getElementById('gameBoard')
var gameEndDisplay = document.getElementById('gameEndDisplay')
var turnDisplay = document.getElementById('turnDisplay')
var boardSpaces = document.querySelectorAll('.js-bs')

//Variable
var gameRound = new Game(new Player({id:"one", token:"./assets/machoman.png", altText:"player one token Macho Man"}), new Player({id:"two", token:"./assets/ultimatewarrior.png", altText:"player two token Ultimate Warrior"}))

// Eventlisteners
window.addEventListener('load', loadPlayers)
gameBoard.addEventListener('click', playerTurn)

function loadPlayers() {
	playerOneStatusToken.src = `${gameRound.players[0].token}`
	playerOneStatusToken.alt = `${gameRound.players[0].altText}`

	playerTwoStatusToken.src = `${gameRound.players[1].token}`
	playerTwoStatusToken.alt = `${gameRound.players[1].altText}`

	playerTurnIcon.src = `${gameRound.currentPlayer.token}`
	playerTurnIcon.altText = `${gameRound.currentPlayer.altText}`
}

function playerTurn() {
	if (event.target.classList.contains("board-space") && !event.target.classList.contains('js-occupied')) {
		placeToken();
		if (gameRound.checkWin()) {
				stopTokenPlacement()
				gameRound.players[findCurrentPlayerIndex()].wins++;

				var winnerText = document.getElementById(gameRound.players[findCurrentPlayerIndex()].id + 'WinCount')
				winnerText.innerText = `${gameRound.players[findCurrentPlayerIndex()].wins}`
				
				gameEndDisplay.innerHTML = `<img class="winner-token" src=${gameRound.players[findCurrentPlayerIndex()].token} alt=${gameRound.players[findCurrentPlayerIndex()].altText}> won!`
				showEndGameDisplay()
				setTimeout(startNewGame, 3000)
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
			gameEndDisplay.innerHTML = "<p> It's a draw </p>";
			showEndGameDisplay()
			setTimeout(startNewGame, 3000)
		} else {
			gameRound.changeTurn()
		}
	}
}

function startNewGame() {
	gameRound.newGameBoard()
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

function findCurrentPlayerIndex(){
	var index 
	for (var i = 0; i < gameRound.players.length; i++){
		if (gameRound.players[i].id === gameRound.currentPlayer.id){
			index = i;
		}
	} return index
}


//** Add finger hover over board spaces */
