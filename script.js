
const gameboard = (() => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']  
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
        //create empty display before refreshing

        for (i in gameboard.board) {
            let row = document.body.appendChild(document.createElement('div'));
            row.classList.add(`row`);
            row.setAttribute('id', `row${i}`);
        };

        let rows = document.getElementsByClassName('row');

        for (i in gameboard.board[0]) {
            let cell = document.createElement('div');
            cell.textContent = gameboard.board[0][i];
            cell.classList.add('cell');
            cell.setAttribute('id', `0-${i}`);
            rows[0].appendChild(cell);
        };
        for (i in gameboard.board[1]) {
            let cell = document.createElement('div');
            cell.textContent = gameboard.board[1][i];

            cell.classList.add('cell');
            cell.setAttribute('id', `1-${i}`);
            rows[1].appendChild(cell);
        };
        for (i in gameboard.board[2]) {
            let cell = document.createElement('div');
            cell.textContent = gameboard.board[2][i];

            cell.classList.add('cell');
            cell.setAttribute('id', `2-${i}`);
            rows[2].appendChild(cell);
        };
    };

    const refreshBoard = () => {
        const body = document.querySelector('body');
        while (body.lastElementChild) {
            body.removeChild(body.lastElementChild);
        };
    };

    return {displayBoard, refreshBoard};
})();


//running stuff
console.log(gameboard.board);
displayController.displayBoard();

const cells = document.querySelectorAll('.cell');

cells[0].addEventListener('click', () => {
    gameboard.board[0][0] = game.getActivePlayer().marker;
    game.switchTurn();
    console.log(gameboard.board);
});

cells[1].addEventListener('click', () => {
    gameboard.board[0][1] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[2].addEventListener('click', () => {
    gameboard.board[0][2] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[3].addEventListener('click', () => {
    gameboard.board[1][0] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[4].addEventListener('click', () => {
    gameboard.board[1][1] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[5].addEventListener('click', () => {
    gameboard.board[1][2] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[6].addEventListener('click', () => {
    gameboard.board[2][0] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[7].addEventListener('click', () => {
    gameboard.board[2][1] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

cells[8].addEventListener('click', () => {
    gameboard.board[2][2] = game.getActivePlayer().marker;
    game.switchTurn();
    displayController.refreshBoard();
    displayController.displayBoard();
    console.log(gameboard.board);
}); 

