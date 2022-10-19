//This project is from The Odin Project. It is mainly object/closure/factory function practice.

const playerOneName = prompt("Enter Player 1 name");
const playerTwoName = prompt("Enter Player 2 name");
let whoseTurn = true;   //true = player one's turn, false = player two's turn
let turnCounter = 0;    //if this reaches 9 and there's no winner, then it's a tie
let spot;               //used to identify where the X or O goes in the array
const gameBoard = ['', '', '', '', '', '', '', '', '', ];
const playerTurnIndicator = document.getElementById("playerTurnIndicator"); //used to display whose turn it is above game board
const winner = document.querySelector(".winner");                           //used to display winner at end of game
const resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener('click', endGame);
const newGameButton = document.querySelector(".newGameButton");
    newGameButton.addEventListener('click', endGame);

const topLeft = document.getElementById("topLeft"); 
    topLeft.addEventListener('click', () => {
        if(whoseTurn)   player1.tLeft(); 
        else            player2.tLeft(); 
        });
const topMid = document.getElementById("topMid");
    topMid.addEventListener('click', () => {
        if(whoseTurn)   player1.tMid(); 
        else            player2.tMid(); 
    });   
const topRight = document.getElementById("topRight");
    topRight.addEventListener('click', () => {
        if(whoseTurn)   player1.tRight(); 
        else            player2.tRight();
    });
const midLeft = document.getElementById("midLeft");
    midLeft.addEventListener('click', () => {
        if(whoseTurn)   player1.mLeft(); 
        else            player2.mLeft();
    });
const midMid = document.getElementById("midMid");
    midMid.addEventListener('click', () => {
        if(whoseTurn)   player1.mMid(); 
        else            player2.mMid();
    });
const midRight = document.getElementById("midRight");
    midRight.addEventListener('click', () => {
        if(whoseTurn)   player1.mRight(); 
        else            player2.mRight();
    });
const bottomLeft = document.getElementById("bottomLeft");
    bottomLeft.addEventListener('click', () => {
        if(whoseTurn)   player1.bLeft(); 
        else            player2.bLeft();
    });
const bottomMid = document.getElementById("bottomMid");
    bottomMid.addEventListener('click', () => {
        if(whoseTurn)   player1.bMid(); 
        else            player2.bMid();
    });
const bottomRight = document.getElementById("bottomRight");
    bottomRight.addEventListener('click', () => {
        if(whoseTurn)   player1.bRight(); 
        else            player2.bRight();
    });
//End of event listeners

//object/closure/factory function stuff
const game = (playerName, marker) => {
    const playerTurn = () => playerTurnIndicator.textContent = playerName + " , your turn!";
    const nextPlayerTurn = () => whoseTurn = !whoseTurn;
    const player1Won = () => winner.textContent = playerName + " wins!";
    const player2Won = () => winner.textContent = playerName + " wins!";

    const tLeft = () => {
        spot = 0; turnCounter++;
        gameBoard[spot] = marker;
        topLeft.textContent = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const tMid = () => {
        spot = 1; turnCounter++;
        topMid.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const tRight = () => {
        spot = 2; turnCounter++;
        topRight.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const mLeft = () => {
        spot = 3; turnCounter++;
        midLeft.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const mMid = () => {
        spot = 4; turnCounter++;
        midMid.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const mRight = () => {
        spot = 5; turnCounter++
        midRight.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const bLeft = () => {
        spot = 6; turnCounter++;
        bottomLeft.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const bMid = () => {
        spot = 7; turnCounter++;
        bottomMid.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    const bRight = () => {
        spot = 8; turnCounter++;
        bottomRight.textContent = marker;
        gameBoard[spot] = marker;
        checkFor3InARow(); nextPlayerTurn(); beginGame();
    };
    return {playerTurn, nextPlayerTurn, player1Won, player2Won, 
            tLeft, tMid, tRight, 
            mLeft, mMid, mRight, 
            bLeft, bMid, bRight};
};
const player1 = game(playerOneName, "X");
const player2 = game(playerTwoName, "O");

function checkFor3InARow() { //hard coded i know..
    if(gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X')   player1.player1Won();
    if(gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O')   player2.player2Won();
    if(gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X')   player1.player1Won();
    if(gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X')   player1.player1Won();
    if(gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O')   player2.player2Won();
    if(gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X')   player1.player1Won();
    if(gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O')   player2.player2Won();
    if(gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X')   player1.player1Won();
    if(gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O')   player2.player2Won();
    if(gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X')   player1.player1Won(); 
    if(gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O')   player2.player2Won();
    if(gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X')   player1.player1Won();
    if(gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O')   player2.player2Won(); 
    if(gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X')   player1.player1Won(); 
    if(gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O')   player2.player2Won(); 
}

function endGame() {
    window.location.reload();
}

function beginGame() {
    if(turnCounter == 9 )   winner.textContent = "It's a tie.. wow.";  
    if(whoseTurn)           player1.playerTurn();
    else                    player2.playerTurn();
}
beginGame();