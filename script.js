
const gameboard = (() => {
    const board = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']  
    ];

    const markCell = () => {

    }
    return {board, markCell};
})();

const game = ((playerOneName = "Player One", playerTwoName = "Player Two") => {
    const players = [
        {
            name: playerOneName,
            marker: "X"
        },
        {
            name: playerTwoName,
            marker: "O"
        },
    ];

    let activePlayer = players[0];
    
    const switchTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else activePlayer = players[0];
    };

    const getActivePlayer = () => activePlayer;

    const notifyTurn = () => {
        console.log(`It is ${getActivePlayer().name}'s turn.`);
    }

    return {players, switchTurn, getActivePlayer, notifyTurn};

})();


//worry about this after things work in console
const displayController = (function() {
    //display stuff here
})();


//running stuff
console.log(gameboard.board);
