// Query Selectors
var playerTurnToken = document.getElementById('turnToken');
var playerOneStatusToken = document.getElementById('playerOneToken');
var playerTwoStatusToken = document.getElementById('playerTwoToken');
var gameBoardDisplay = document.getElementById('gameBoard');
var gameEndDisplay = document.getElementById('gameEndDisplay');
var turnDisplay = document.getElementById('turnDisplay');
var boardSpaces = document.querySelectorAll('.js-bsq');
var playerWinCounts = document.querySelectorAll('.win-count');
var winnerDisplay = document.getElementById('winnerDisplay');

var gameRound = new Game(new Player({ id: "one", token: "./assets/machoman.png", altText: "player one token Macho Man" }), 
						 new Player({ id: "two", token: "./assets/ultimatewarrior.png", altText: "player two token Ultimate Warrior" }));

// Eventlisteners
window.addEventListener('load', loadPlayers);
gameBoardDisplay.addEventListener('click', playerTurn);

function loadPlayers() {
	setToken(playerOneStatusToken, gameRound.players[0]);
	setToken(playerTwoStatusToken, gameRound.players[1]);
	setToken(playerTurnToken, gameRound.currentPlayer);
}

function setToken(element, player) {
	element.src = `${player.token}`;
	element.alt = `${player.altText}`;
}

function playerTurn() {
	if (event.target.classList.contains('board-space') && !event.target.classList.contains('occupied')) {
		placeToken();
		if (gameRound.checkWin().winnerFound) {
			stopTokenPlacement();

			var index = findCurrentPlayerIndex();
			gameRound.players[index].increaseWins();
			playerWinCounts[index].innerText = 
			`${gameRound.players[index].wins}`
			gameEndDisplay.innerHTML = `
			<img class="winner-token" src=${gameRound.players[index].token} alt=${gameRound.players[index].altText}> <p>won!</p>`;

			animateWinningTokens();
			showEndGameDisplay();
			setTimeout(declareWinner, 1000);
			setTimeout(startNewGame, 3000);
		} else if (gameRound.gameBoard.length === 9 && !gameRound.gameBoard.includes(undefined)) {
			gameEndDisplay.innerHTML = "<p>It's a draw </p>";
			showEndGameDisplay();
			setTimeout(startNewGame, 3000);
		} else {
			gameRound.changeTurn();
			setToken(playerTurnToken, gameRound.currentPlayer);
		}
	}
}

function placeToken() {
	gameRound.gameBoard[Number(event.target.id)] = gameRound.currentPlayer;
	event.target.classList.add('occupied');

	var tokenElement = document.createElement('img');
	tokenElement.src = gameRound.currentPlayer.token;
	tokenElement.alt = gameRound.currentPlayer.altText;
	tokenElement.classList.add('board-token');
	event.target.appendChild(tokenElement);
}

function stopTokenPlacement() {
	for (var i = 0; i < boardSpaces.length; i++) {
		boardSpaces[i].classList.add('occupied')
	}
}

function animateWinningTokens() {
	var winSquare = gameRound.checkWin().winningSpaces;
	for (var i = 0; i < boardSpaces.length; i++) {
		var space = Number(boardSpaces[i].id)
		if (!(space === winSquare[0]) && !(space === winSquare[1]) && !(space === winSquare[2])) {
			boardSpaces[i].innerHTML = '';
		}
		else {
			boardSpaces[i].children[0].classList.add('shimmy');
		}
	}
}

function showEndGameDisplay() {
	show(gameEndDisplay);
	hide(turnDisplay);
}

function declareWinner() {
	winnerDisplay.children[1].src = gameRound.currentPlayer.token;
	winnerDisplay.children[1].alt = gameRound.currentPlayer.altText;
	hide(gameBoardDisplay);
	show(winnerDisplay);
}

function startNewGame() {
	gameRound.newGameBoard();

	for (var i = 0; i < boardSpaces.length; i++) {
		boardSpaces[i].innerHTML = '';
		boardSpaces[i].classList.remove('occupied');
	}
	gameRound.changeTurn();
	setToken(playerTurnToken, gameRound.currentPlayer);
	show(turnDisplay);
	hide(gameEndDisplay);
	show(gameBoardDisplay);
	hide(winnerDisplay);
}

function findCurrentPlayerIndex() {
	var index
	for (var i = 0; i < gameRound.players.length; i++) {
		if (gameRound.players[i].id === gameRound.currentPlayer.id) {
			index = i;
		}
	} return index
}

function hide(element) {
	element.classList.add('hidden');
}

function show(element) {
	element.classList.remove('hidden');
}