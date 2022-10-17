const playerOneName = prompt("Enter Player 1 name");
const playerTwoName = prompt("Enter Player 2 name");
let whoseTurn = true; //true = player one's turn, false = player two's turn
let turnCounter = 0; //if this reaches 9 and there's no winner, then it's a tie
const gameBoard = []; //possible winning combinations in the array -> [1,2,3], [4,5,6], [7,8,9],
                      //[1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]

const playerTurnIndicator = document.getElementById("playerTurnIndicator"); //displays whose turn it is above board
const winner = document.querySelector(".winner");
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

//:O
const game = (playerName, marker) => {
    const playerTurn = () => {
        playerTurnIndicator.textContent = playerName + " , your turn!";
    };
    const nextPlayerTurn = () => {
        whoseTurn = !whoseTurn;
    };
    const tLeft = () => {
        topLeft.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const tMid = () => {
        topMid.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const tRight = () => {
        topRight.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const mLeft = () => {
        midLeft.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const mMid = () => {
        midMid.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const mRight = () => {
        midRight.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const bLeft = () => {
        bottomLeft.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const bMid = () => {
        bottomMid.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };
    const bRight = () => {
        bottomRight.textContent = marker;
        nextPlayerTurn();
        beginGame();
        gameBoard.push(marker);
    };

    const getMarker = () => marker;

    return {playerTurn, nextPlayerTurn, tLeft, tMid, tRight, mLeft, mMid, mRight, bLeft, bMid, bRight};
};
const player1 = game(playerOneName, "X");
const player2 = game(playerTwoName, "O");

function beginGame() {
    if(turnCounter == 9) //check to see if last move ended up winning first, ill fix later
        winner.textContent = "It's a tie.. wow.";
        
    if(whoseTurn) {
        player1.playerTurn();
        turnCounter++;
    }
    else {
        turnCounter++;
        player2.playerTurn();
    }
}
beginGame();