// Query Selectors
var gameStatusHeader = document.getElementById('gamestatus')
var playerOneWins = document.getElementById('pOneWins')
var playerTwoWins = document.getElementById('pTwoWins')

var gameBoard = document.getElementById('gameBoard')
var topLeft = document.getElementById('space0')
var topCenter = document.getElementById('space1')
var topRight = document.getElementById('space2')

var middleLeft = document.getElementById('space3')
var middleCenter = document.getElementById('space4')
var middleRight = document.getElementById('space5')

var bottomLeft = document.getElementById('space6')
var bottomCenter = document.getElementById('space7')
var bottomRight = document.getElementById('space8')

// Eventlisteners
/// upon load create 2 players and start a new game
gameBoard.addEventListener('click', placeToken)
// Variables
var currentRound = new Game (
    new Player("one", "./assets/badger.png"), 
    new Player("two","./assets/blowfish.png"))


// Event Handlers


function placeToken(){
    // dom hears click on space
    //dom hears click on ancestor
    //ancestor gives ID
   var selectedBoardSpace =event.target.id
    var boardSpaceLoc = Number(selectedBoardSpace.charAt(selectedBoardSpace.length - 1))


    //Use Id to add player info to gameboard array
    currentRound.currentGameBoard[boardSpaceLoc]= currentRound.currentPlayerTurn

    //diplay on gameboard
//******Pullout of handler when refactor? */
    var tokenNode = document.createElement('img')
    tokenNode.src = currentRound.currentPlayerTurn.token
    event.target.appendChild(tokenNode)

    // Change turn
    currentRound.changeTurn()
}


