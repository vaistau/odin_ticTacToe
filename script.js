//gameboard object
const gameboard = (() => {
    let board = [];
//generate board array
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
})()

//player factory function
const createPlayer = (name) => {
    return {name};
}

//game object
const game = (() => {

    //generate players
    const playerOne = createPlayer('Player 1');
    const playerTwo = createPlayer('Player 2');
})