//gameboard object
const gameboard = (() => {
    let board = [];

    //generate board array
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    //generate board display
    let squares = document.querySelector('.squares');

    board.forEach(e => {
        let square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = 'x';
        squares.appendChild(square);
    })

    //add event listeners for each square
    squares.forEach(e => {
        e.addEventListener('click', () => {
            //have to figure out how to switch between players and the appropriate symbol according to which player is active
            //square.innerHTML should be the array object of that specific index vs just editing the text alone and leaving the array empty
        })
    })

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