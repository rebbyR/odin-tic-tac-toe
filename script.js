
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

    const checkWinner = () => {
        
        if (gameboard.board[0][0] === 'X' && gameboard.board[0][1] === 'X' && gameboard.board[0][2] === 'X') {
                winner = players[0].name;
                game.endGameWinner();
        }
        else if (gameboard.board[1][0] === 'X' && gameboard.board[1][1] === 'X' && gameboard.board[1][2] === 'X') {
                winner = players[0].name;
                game.endGameWinner();
        }
        else if (gameboard.board[2][0] === 'X' && gameboard.board[2][1] === 'X' && gameboard.board[2][2] === 'X') {
            winner = players[0].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][0] === 'X' && gameboard.board[1][0] === 'X' && gameboard.board[2][0] === 'X') {
            winner = players[0].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][1] === 'X' && gameboard.board[1][1] === 'X' && gameboard.board[2][1] === 'X') {
            winner = players[0].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][2] === 'X' && gameboard.board[1][2] === 'X' && gameboard.board[2][2] === 'X') {
            winner = players[0].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][0] === 'O' && gameboard.board[0][1] === 'O' && gameboard.board[0][2] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (gameboard.board[1][0] === 'O' && gameboard.board[1][1] === 'O' && gameboard.board[1][2] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (gameboard.board[2][0] === 'O' && gameboard.board[2][1] === 'O' && gameboard.board[2][2] === 'O') {
            winner = players[0].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][0] === 'O' && gameboard.board[1][0] === 'O' && gameboard.board[2][0] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][1] === 'O' && gameboard.board[1][1] === 'O' && gameboard.board[2][1] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][2] === 'O' && gameboard.board[1][2] === 'O' && gameboard.board[2][2] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (gameboard.board[0][0] === 'O' && gameboard.board[1][1] === 'O' && gameboard.board[2][2] === 'O') {
            winner = players[1].name;
            game.endGameWinner();
        }
        else if (cells[0].textContent !== '' && cells[1].textContent !== '' &&
            cells[2].textContent !== '' && cells[3].textContent !== '' && cells[4].textContent !== '' &&
            cells[5].textContent !== '' && cells[6].textContent !== '' && cells[7].textContent !== '' && 
            cells[8].textContent !== '') {
                game.endGameTie();
        }
    };

    const endGameWinner = () => {
        displayController.declareWinner();
    };

    const endGameTie = () => {
        displayController.declareTie();
    };

    const resetGame = () => {
       gameboard.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']  
        ];
        displayController.refreshBoard();
        activePlayer = players[0];
        game.getActivePlayer();
        displayController.textDisplayReset();
    };

    return {switchTurn, getActivePlayer, checkWinner, endGameWinner, endGameTie, resetGame};

})();

const displayController = (() => {
    const body = document.querySelector('body');

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
       
       for (i in cells) {
        i.textContent = '';
       };

       for (i=0; i < 3; i++) {
            cells[i].textContent = gameboard.board[0][i];
        };

        for (i=3; i < 6; i++) {
            cells[i].textContent = gameboard.board[1][i-3];
        };
        
        for (i=6; i < 9; i++) {
            cells[i].textContent = gameboard.board[2][i-6];
        };

        displayController.notifyTurn();
        game.checkWinner();
    };
    

    const addListeners = () => {
        
        cells[0].addEventListener('click', () => {
            if (cells[0].textContent === '') {           
                gameboard.board[0][0] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };  
        });
        
        cells[1].addEventListener('click', () => {
            if (cells[1].textContent === '') {
                gameboard.board[0][1] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);
            };
        }); 
        
        cells[2].addEventListener('click', () => {
            if (cells[2].textContent === '') {
                gameboard.board[0][2] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[3].addEventListener('click', () => {
            if (cells[3].textContent === '') {
                gameboard.board[1][0] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[4].addEventListener('click', () => {
            if (cells[4].textContent === '') {
                gameboard.board[1][1] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[5].addEventListener('click', () => {
            if (cells[5].textContent === '') {
                gameboard.board[1][2] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[6].addEventListener('click', () => {
            if (cells[6].textContent === '') {
                gameboard.board[2][0] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[7].addEventListener('click', () => {
            if (cells[7].textContent === '') {
                gameboard.board[2][1] = game.getActivePlayer().marker;
                game.switchTurn();
                displayController.refreshBoard();
                console.log(gameboard.board);                
            };
        }); 
        
        cells[8].addEventListener('click', () => {
            if (cells[8].textContent === '') {
            gameboard.board[2][2] = game.getActivePlayer().marker;
            game.switchTurn();
            displayController.refreshBoard();
            console.log(gameboard.board);                
            };  
        }); 
    };

    const notifyTurn = () => {
        textDisplay.textContent = `It is ${game.getActivePlayer().name}'s turn.`;
    };

    const textDisplayReset = () => {
        textDisplay.textContent = `New game! It is ${game.getActivePlayer().name}'s turn.`;
    }

    const createTextDisplay = () => {
        const textDisplay = document.createElement('p');
        textDisplay.textContent = 'Ready to play!';
        textDisplay.classList.add('text-display');
        body.appendChild(textDisplay);
        return textDisplay;
    };

    const declareTie = () => {
        textDisplay.textContent = 'Tie!';
    };

    const declareWinner = () => {
        textDisplay.textContent = `${winner} wins!`
    };

    return {displayBoard, refreshBoard, addListeners, 
        createTextDisplay, notifyTurn, declareTie, declareWinner, textDisplayReset};
})();


//running stuff

displayController.displayBoard();
const cells = document.querySelectorAll('.cell');
displayController.addListeners();
displayController.createTextDisplay();
const textDisplay = document.querySelector('.text-display');
