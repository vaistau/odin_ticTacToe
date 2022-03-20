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
        square.innerHTML = '?';

        //add event listeners to each square
        square.addEventListener('click', () => {
            if (square.innerHTML === '?') {
                //switch players
                let player = game.getActivePlayer();
                //add symbol to board
                square.innerHTML = player.symbol;
                //add symbol to array
                board.splice(i, 1, player.symbol);
            }
        })
        squares.appendChild(square);
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

    //function to change active player
    const getActivePlayer = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo;
        } else {
            activePlayer = playerOne;
        }
        return activePlayer;
    }
    //returns
    return {
        activePlayer,
        getActivePlayer
    }
})();