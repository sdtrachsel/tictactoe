// Query Selectors
var playerTurnToken = document.getElementById('turnToken')
var playerOneStatusToken = document.getElementById('playerOneToken')
var playerTwoStatusToken = document.getElementById('playerTwoToken')
var gameBoard = document.getElementById('gameBoard')
var gameEndDisplay = document.getElementById('gameEndDisplay')
var turnDisplay = document.getElementById('turnDisplay')
var boardSpaces = document.querySelectorAll('.js-bs')
var playerWinCounts = document.querySelectorAll('.win-count')

//Variable
var gameRound = new Game(new Player({id:"one", token:"./assets/machoman.png", altText:"player one token Macho Man"}), new Player({id:"two", token:"./assets/ultimatewarrior.png", altText:"player two token Ultimate Warrior"}))

// Eventlisteners
window.addEventListener('load', loadPlayers)
gameBoard.addEventListener('click', playerTurn)

function loadPlayers() {
	setToken(playerOneStatusToken, gameRound.players[0])
	setToken(playerTwoStatusToken, gameRound.players[1])
	setToken(playerTurnToken, gameRound.currentPlayer)
}

function setToken(element, player){
	element.src = `${player.token}`
	element.alt = `${player.altText}`
}

function playerTurn() {
	if (event.target.classList.contains("board-space") && !event.target.classList.contains('occupied')) {
		placeToken();
		if (gameRound.checkWin()) {
				stopTokenPlacement()

				var index = findCurrentPlayerIndex();				
				gameRound.players[index].wins++;
				playerWinCounts[index].innerText = `${gameRound.players[index].wins}`		
				gameEndDisplay.innerHTML = `<img class="winner-token" src=${gameRound.players[index].token} alt=${gameRound.players[index].altText}> won!`

				showEndGameDisplay()
				setTimeout(startNewGame, 3000)
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
			gameEndDisplay.innerHTML = "<p>It's a draw </p>"
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
	show(turnDisplay)
	hide(gameEndDisplay)
}

function stopTokenPlacement() {
	for (var i = 0; i < boardSpaces.length; i++) {
		boardSpaces[i].classList.add('occupied')
	}
}

function showEndGameDisplay() {
	show(gameEndDisplay)
	hide(turnDisplay)
}

function placeToken() {
	gameRound.gameBoard[Number(event.target.id)] = gameRound.currentPlayer
	event.target.classList.add('occupied')

	var tokenElement = document.createElement('img')
	tokenElement.src = gameRound.currentPlayer.token
	tokenElement.alt = gameRound.currentPlayer.altText
	tokenElement.classList.add('board-token')
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

function hide(element){
	element.classList.add('hidden')
}

function show(element){
	element.classList.remove('hidden')
}

//** Add finger hover over board spaces */