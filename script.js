
const gameboard = (() => {
    const board = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']  
    ];

    return {board};
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
    };

    const chooseCell = () => {
        let cellChoice = prompt("Enter a spot on the board to mark: ");
        return cellChoice;
    }

    return {switchTurn, getActivePlayer, notifyTurn, chooseCell};

})();


//worry about this after things work in console
const displayController = (() => {
    //display stuff here

    const displayBoard = () => {
        for (i in gameboard.board) {
            let row = document.body.appendChild(document.createElement('div'));
            row.classList.add(`row`);
            row.setAttribute('id', `row${i}`);
        };

        let rows = document.getElementsByClassName('row');

        for (i in gameboard.board[0]) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `0-${i}`);
            rows[0].appendChild(cell);
        };
        for (i in gameboard.board[1]) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `1-${i}`);
            rows[1].appendChild(cell);
        };
        for (i in gameboard.board[2]) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `2-${i}`);
            rows[2].appendChild(cell);
        };
    };

    return {displayBoard};
})();


//running stuff
console.log(gameboard.board);
