//gameboard object
const gameboard = (() => {
    let board = [];

    let squares = document.querySelector('.squares');

    for (let i = 0; i < 9; i++) {
        //generate board array
        board.push('');

        //generate board display
        let square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = '';

        //add event listeners to each square
        square.addEventListener('click', () => {
            if (square.innerHTML === '' && game.getWinState() === false) {
                //switch player
                let player = game.getActivePlayer();
                //add symbol to board
                square.innerHTML = player.symbol;
                //add symbol to array
                board.splice(i, 1, player.symbol);
                //check for winner
                game.checkWinner();
            }
        })
        squares.appendChild(square);
    }

    //returns
    return {
        board
    }
})();

//player factory function
const createPlayer = (name, symbol) => {
    return {name, symbol};
    }

//game object
const game = (() => {

    //generate players
    const playerOne = createPlayer('Player 1', 'X');
    const playerTwo = createPlayer('Player 2', 'O');

    //start of game
    let activePlayer = playerTwo;
    let winState = false;

    //change active player
    const getActivePlayer = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo;
        } else {
            activePlayer = playerOne;
        }
        return activePlayer;
    }

    //win conditions
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //check win state
    const getWinState = () => {
        return winState;
    }

    //check for winner
    const checkWinner = () => {
        winConditions.forEach((element) => {
            if (gameboard.board[element[0]] === activePlayer.symbol && gameboard.board[element[1]] === activePlayer.symbol && gameboard.board[element[2]] === activePlayer.symbol) {
                console.log('Winner is ' + activePlayer.name + '!');
                winState = true;
            }
        })

        checkTie();
    }

    //check for tie
    const checkTie = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard.board[i] !== playerOne.symbol && gameboard.board[i] !== playerTwo.symbol) {
                return;
            }
        }

        if (winState() === false) {
            console.log('It\'s a tie!');
        }
    }

    //returns
    return {
        getActivePlayer,
        checkWinner,
        getWinState
    }
})();