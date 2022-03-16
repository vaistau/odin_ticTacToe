//gameboard object
const gameboard = (() => {
    let board = [];

    //generate board array
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    //generate board display
    let squares = document.querySelector('.squares');

    board.forEach(element => {
        let square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = 'x';
        squares.appendChild(square);
    })

    //add event listeners for each square

})();

//game object
const game = (() => {

    //player factory function
    const createPlayer = (name) => {
    return {name};
    }

    //generate players
    const playerOne = createPlayer('Player 1');
    const playerTwo = createPlayer('Player 2');
})();